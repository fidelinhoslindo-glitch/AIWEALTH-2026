import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const port = 3001;

// WEBHOOK CONFIG (Produção vs Local)
const WEBHOOK_URL = process.env.WEBHOOK_URL || 'http://localhost:3001/webhook';

app.use(cors());
app.use(bodyParser.json());

// EVOPAY CONFIG
const EVOPAY_API_KEY = process.env.EVOPAY_API_KEY;
const EVOPAY_BASE_URL = process.env.EVOPAY_BASE_URL;

// SUPABASE CONFIG
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// RESEND CONFIG
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');
const FROM_EMAIL = 'AI Wealth <onboarding@resend.dev>'; // Resend test email

// ROTA DE SAÚDE
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Servidor EvoPay & Supabase operante na porta 3001' });
});

// CRIAR TRANSAÇÃO PIX VIA EVOPAY
app.post('/create_pix', async (req, res) => {
  console.log('--- NOVA REQUISIÇÃO PIX ---');
  try {
    const { amount, payerName, payerEmail, description } = req.body;
    
    if (!amount) {
      return res.status(400).json({ error: 'Valor obrigatório' });
    }

    const response = await fetch(`${EVOPAY_BASE_URL}/pix`, {
      method: 'POST',
      headers: {
        'API-Key': EVOPAY_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount: parseFloat(amount),
        callbackUrl: WEBHOOK_URL,
        payerName: payerName || '',
        payerEmail: payerEmail || ''
      })
    });

    const data = await response.json();
    console.log('Resposta EvoPay completa:', JSON.stringify(data, null, 2));
    
    if (!response.ok) {
      console.error('EvoPay retornou erro HTTP', response.status, data);
      return res.status(response.status).json({
        error: 'Erro no gateway de pagamento',
        evopayError: data,
        message: data.message || data.error || JSON.stringify(data)
      });
    }

    // SUPABASE: Salvar Ordem Pendente
    if (data.id) {
      const { error: dbError } = await supabase
        .from('orders')
        .insert([{
          evopay_id: data.id,
          status: 'PENDING',
          amount: parseFloat(amount),
          product_key: description,
          payer_name: payerName,
          payer_email: payerEmail
        }]);

      if (dbError) {
        console.error('⚠️ Aviso: Supabase falhou ao gravar a ordem. Você já criou as tabelas?', dbError.message);
      } else {
        console.log('✅ Ordem PENDENTE gravada no Supabase:', data.id);
      }
    }

    res.json(data);
  } catch (error) {
    console.error('Erro ao criar PIX EvoPay:', error);
    res.status(500).json({ error: 'Erro interno no servidor', message: error.message });
  }
});

// VERIFICAR STATUS DA TRANSAÇÃO
app.get('/check_pix/:id', async (req, res) => {
  try {
    const response = await fetch(`${EVOPAY_BASE_URL}/pix?id=${req.params.id}`, {
      headers: { 'API-Key': EVOPAY_API_KEY }
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Erro ao verificar PIX:', error);
    res.status(500).json({ error: error.message });
  }
});

// WEBHOOK (EvoPay manda updates aqui quando é pago)
app.post('/webhook', async (req, res) => {
  console.log('--- WEBHOOK EVOPAY ---', req.body);
  const evopayId = req.body.id || req.body.transactionId;
  const status = req.body.status;
  
  if (evopayId && status) {
    try {
      if (status === 'COMPLETED') {
        console.log(`🤑 Pagamento Confirmado via Webhook! ID: ${evopayId}`);

        // 1. Atualizar ordem no Supabase
        const { data: order, error: orderError } = await supabase
          .from('orders')
          .update({ status: 'COMPLETED' })
          .eq('evopay_id', evopayId)
          .select()
          .single();

        if (orderError || !order) {
           console.error('⚠️ Ordem não encontrada no Supabase ou erro:', orderError?.message);
        } else {
          // 2. Verificar se o usuário existe, senão criar
          const { data: existingUser } = await supabase
            .from('users')
            .select('*')
            .eq('email', order.payer_email)
            .single();

          if (!existingUser) {
             const securityToken = 'CW2026-' + Math.random().toString(36).substr(2, 5).toUpperCase();
             const { error: userError } = await supabase
               .from('users')
               .insert([{
                  email: order.payer_email,
                  name: order.payer_name,
                  security_token: securityToken
               }]);

             if (userError) {
               console.error('⚠️ Erro ao criar usuário no Supabase:', userError.message);
             } else {
               console.log(`✅ Novo usuário criado. Token gerado: ${securityToken}`);
               
               // 3. Enviar E-mail com a Chave Mestra
               try {
                 const { data: emailData, error: emailError } = await resend.emails.send({
                   from: FROM_EMAIL,
                   to: [order.payer_email],
                   subject: '🔓 SEU ACESSO LIBERADO: AI Wealth 2026',
                   html: `
                     <div style="font-family: sans-serif; background-color: #030303; color: #ffffff; padding: 40px; border-radius: 20px;">
                       <h1 style="color: #00ffa3; font-size: 24px;">ACESSO CONFIRMADO!</h1>
                       <p style="color: #cccccc; font-size: 16px;">Sua entrada na rede Wealth 2026 foi processada com sucesso.</p>
                       
                       <div style="background: rgba(0, 255, 163, 0.1); border: 1px solid #00ffa3; padding: 20px; border-radius: 12px; margin: 30px 0; text-align: center;">
                         <p style="text-transform: uppercase; font-size: 12px; letter-spacing: 2px; color: #888; margin-bottom: 10px;">SUA CHAVE MESTRA (SECURITY ID)</p>
                         <h2 style="font-size: 32px; font-weight: 900; color: #00ffa3; margin: 0; letter-spacing: 4px;">${securityToken}</h2>
                       </div>

                       <p style="color: #cccccc;">Use esta chave para fazer login no painel e acessar seus cursos.</p>
                       <a href="http://localhost:5173/login" style="display: inline-block; background: #00ffa3; color: #000; padding: 15px 30px; border-radius: 50px; text-decoration: none; font-weight: bold; margin-top: 20px;">ACESSAR PAINEL AGORA</a>
                       
                       <hr style="border: 0; border-top: 1px solid #222; margin: 40px 0;">
                       <p style="font-size: 12px; color: #555;">Este é um e-mail automático. Se precisar de ajuda, entre em contato com o suporte oficial.</p>
                     </div>
                   `
                 });

                 if (emailError) {
                   console.error('⚠️ Erro ao enviar e-mail via Resend:', emailError);
                 } else {
                   console.log('📧 E-mail de boas-vindas enviado com sucesso!', emailData);
                 }
               } catch (mailErr) {
                 console.error('❌ Falha crítica no envio de e-mail:', mailErr);
               }
             }
          } else {
             console.log(`✅ Usuário já existente. Token: ${existingUser.security_token}`);
             // [OPCIONAL] Re-enviar e-mail de lembrete se necessário
          }
        }
      } else {
        console.log(`🔄 Status do Pix via Webhook: ${status}`);
        await supabase
          .from('orders')
          .update({ status: status })
          .eq('evopay_id', evopayId);
      }
    } catch (e) {
      console.error('Erro interno processando webhook:', e);
    }
  }

  // Sempre retorne 200 OK para o EvoPay saber que recebemos
  res.sendStatus(200);
});

// --- ADMIN ROUTES ---

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'wealth2026';

// Middleware de Segurança Admin
const checkAdmin = (req, res, next) => {
  const pass = req.headers['x-admin-pass'];
  if (pass === ADMIN_PASSWORD) {
    next();
  } else {
    res.status(401).json({ error: 'Acesso negado. Senha admin incorreta.' });
  }
};

// Login Admin
app.post('/admin/login', (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    res.json({ success: true });
  } else {
    res.status(401).json({ error: 'Senha incorreta' });
  }
});

// Stats Gerais
app.get('/admin/stats', checkAdmin, async (req, res) => {
  try {
    const { data: users, count: userCount } = await supabase.from('users').select('*', { count: 'exact' });
    const { data: orders } = await supabase.from('orders').select('*').eq('status', 'COMPLETED');
    
    const totalRevenue = orders ? orders.reduce((sum, o) => sum + (o.amount || 0), 0) : 0;
    const totalSales = orders ? orders.length : 0;

    res.json({
      totalLeads: userCount || 0,
      totalSales,
      totalRevenue: totalRevenue.toFixed(2)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Lista de Leads
app.get('/admin/leads', checkAdmin, async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Lista de Pedidos
app.get('/admin/orders', checkAdmin, async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.listen(port, () => {
  console.log('=========================================');
  console.log(`🚀 BACKEND EVOPAY & SUPABASE: http://localhost:${port}`);
  console.log('=========================================');
});
