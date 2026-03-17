import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();
  const startQuiz = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/quiz');
  };

  return (
    <div className="reveal">
      <div className="narrow-container" style={{ textAlign: 'center', marginBottom: '8rem' }}>
        <span className="urgency-badge">Network Access: v2.0.26</span>
        <h1 style={{ marginTop: '2rem' }}>O Próximo Salto da<br/>Abundância Digital.</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-dim)', marginBottom: '3.5rem', maxWidth: '600px', margin: '1rem auto 3.5rem' }}>
          Algoritmos preditivos desenhados para extrair valor dos mercados de 2026 antes da adoção em massa. 
        </p>
        
        <div className="reveal-trigger" style={{ position: 'relative', marginBottom: '4rem' }}>
          <img src="/mockup.png" alt="AI Wealth Plan" className="mockup-img" style={{ animation: 'glowPulse 5s infinite alternate' }} />
          <div style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(0,255,163,0.1)', backdropFilter: 'blur(10px)', padding: '1rem 2rem', borderRadius: '100px', border: '1px solid var(--primary)', fontSize: '0.8rem', fontWeight: 'bold' }}>
            Acesso Restrito: 500 Vagas
          </div>
        </div>

        <button className="btn" onClick={startQuiz} style={{ maxWidth: '420px', margin: '0 auto' }}>
          INICIAR VERIFICAÇÃO DE PERFIL
        </button>
      </div>

      <div className="reveal-trigger" style={{ marginBottom: '8rem' }}>
        <h3 style={{ textAlign: 'center', textTransform: 'uppercase', marginBottom: '4rem', letterSpacing: '4px', fontSize: '0.9rem', color: 'var(--primary)' }}>The Global Infrastructure</h3>
        <div className="figma-grid-3">
          <div className="card">
            <div className="feature-icon">⚡</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Previsão Alpha</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>Identificamos liquidez oculta e movimentos de baleias antes da correção do mercado.</p>
          </div>
          <div className="card">
            <div className="feature-icon">◈</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Sincronia Total</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>Automação passiva que trabalha enquanto você dorme, ajustando posições em milissegundos.</p>
          </div>
          <div className="card">
            <div className="feature-icon">✦</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Liberdade 2.0</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>Não é apenas sobre dinheiro, é sobre tempo. A IA gerencia a complexidade, você colhe os resultados.</p>
          </div>
        </div>
      </div>

      <div className="card narrow-container reveal-trigger" style={{ textAlign: 'center', border: '1px solid rgba(0,255,163,0.3)', background: 'rgba(0,0,0,0.4)' }}>
         <h3 style={{ marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--primary)' }}>Exclusive Access Plan</h3>
         <p style={{ color: 'var(--text-dim)', marginBottom: '3rem' }}>O ecossistema que vai moldar os novos milionários de 2026.</p>
         
         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '10px', marginBottom: '1rem' }}>
           <span style={{ fontSize: '1.5rem', textDecoration: 'line-through', opacity: 0.3, marginBottom: '10px' }}>R$ 197</span>
           <div style={{ fontSize: '5rem', fontWeight: '900', color: '#fff', lineHeight: '1' }}>
             <span style={{ fontSize: '2rem', verticalAlign: 'top', color: 'var(--primary)' }}>R$</span>19,90
           </div>
         </div>
         <p style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '3rem' }}>OFFER CLOSING SOON</p>

         <button className="btn" style={{ boxShadow: '0 0 50px rgba(0,255,163,0.3)' }} onClick={startQuiz}>
           RECLAMAR MEU ACESSO AGORA
         </button>
      </div>
    </div>
  );
}
