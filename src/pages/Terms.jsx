import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="legal-container">
      <div className="legal-content">
        <Link to="/" className="back-link">← Voltar ao Início</Link>
        <h1>Termos de Uso</h1>
        <p>Última atualização: 17 de Março de 2026</p>

        <section>
          <h2>1. Aceitação dos Termos</h2>
          <p>Ao acessar e utilizar o site AI Wealth 2026, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve utilizar nossos serviços.</p>
        </section>

        <section>
          <h2>2. Descrição do Serviço</h2>
          <p>A AI Wealth 2026 fornece acesso a conteúdos educacionais, ferramentas de análise e estratégias digitais. O acesso é concedido mediante pagamento único ou assinatura, conforme especificado no momento da compra.</p>
        </section>

        <section>
          <h2>3. Propriedade Intelectual</h2>
          <p>Todo o conteúdo disponível no portal, incluindo textos, vídeos, PDFs, logos e softwares, é de propriedade exclusiva da AI Wealth 2026 ou de seus licenciadores e está protegido por leis de direitos autorais.</p>
        </section>

        <section>
          <h2>4. Uso da Conta e Segurança</h2>
          <p>A sua Chave Mestra (Security ID) é pessoal e intransferível. O compartilhamento de acesso com terceiros resultará no bloqueio imediato da conta sem direito a reembolso.</p>
        </section>

        <section>
          <h2>5. Política de Reembolso</h2>
          <p>Seguimos o Código de Defesa do Consumidor, garantindo o direito de arrependimento e reembolso total dentro do prazo de 7 dias após a compra, desde que o conteúdo não tenha sido integralmente consumido ou baixado.</p>
        </section>

        <section>
          <h2>6. Limitação de Responsabilidade</h2>
          <p>A AI Wealth 2026 não garante resultados financeiros específicos. O sucesso do usuário depende da aplicação individual das estratégias e do mercado. Não somos consultores financeiros oficiais.</p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
