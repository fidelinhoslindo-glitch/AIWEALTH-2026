import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="legal-container">
      <div className="legal-content">
        <Link to="/" className="back-link">← Voltar ao Início</Link>
        <h1>Política de Privacidade</h1>
        <p>Última atualização: 17 de Março de 2026</p>

        <section>
          <h2>1. Coleta de Informações</h2>
          <p>Coletamos informações básicas como nome e e-mail no momento do cadastro e dados de transação para processamento de pagamentos via EvoPay.</p>
        </section>

        <section>
          <h2>2. Uso dos Dados</h2>
          <p>Seus dados são utilizados exclusivamente para:
            <ul>
              <li>Liberar seu acesso ao portal.</li>
              <li>Enviar sua chave de segurança por e-mail.</li>
              <li>Comunicar atualizações importantes do produto.</li>
            </ul>
          </p>
        </section>

        <section>
          <h2>3. Segurança dos Dados</h2>
          <p>Utilizamos criptografia SSL e integração com parceiros seguros (Supabase e EvoPay) para garantir que suas informações estejam protegidas contra acessos não autorizados.</p>
        </section>

        <section>
          <h2>4. Cookies</h2>
          <p>Utilizamos cookies para melhorar sua experiência de navegação e manter sua sessão ativa no painel do aluno.</p>
        </section>

        <section>
          <h2>5. Compartilhamento com Terceiros</h2>
          <p>Não vendemos seus dados para terceiros. Compartilhamos informações apenas com provedores de serviços essenciais (processadores de pagamento e serviços de e-mail) necessários para operar o site.</p>
        </section>

        <section>
          <h2>6. Seus Direitos (LGPD)</h2>
          <p>Você tem o direito de solicitar a exclusão de seus dados ou a correção de informações a qualquer momento através do nosso suporte oficial.</p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
