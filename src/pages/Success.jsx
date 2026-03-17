import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Success() {
  const navigate = useNavigate();
  const { userToken, pixPaid } = useApp();

  useEffect(() => {
    if (!pixPaid && !userToken) {
      navigate('/checkout');
    }
  }, [pixPaid, userToken, navigate]);

  return (
    <div className="reveal narrow-container" style={{ textAlign: 'center' }}>
      <div className="success-check">✓</div>
      <h1 style={{ fontSize: '3.5rem' }}>Acesso Liberado</h1>
      <p style={{ color: 'var(--text-dim)', fontSize: '1.25rem', marginBottom: '2rem' }}>Parabéns, sua entrada na rede Wealth 2026 foi confirmada. <br/>Abaixo está sua chave mestra (Security ID).</p>
      
      <div className="card" style={{ marginBottom: '4rem', display: 'inline-block', padding: '2rem', background: 'rgba(0, 255, 163, 0.05)', borderColor: 'var(--primary)' }}>
        <p style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '1rem', color: 'var(--text-dim)' }}>SUA CHAVE PRIVADA (COPIE ISTO)</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input type="text" readOnly value={userToken} className="figma-input" style={{ marginBottom: 0, fontSize: '1.5rem', fontWeight: '900', letterSpacing: '2px', textAlign: 'center', color: 'var(--primary)', background: 'rgba(0,0,0,0.5)' }} id="tokenInput" />
          <button className="btn" style={{ padding: '1.25rem' }} onClick={() => { document.getElementById('tokenInput').select(); navigator.clipboard.writeText(userToken); alert('Chave copiada!'); }}>COPIAR</button>
        </div>
      </div>
      
      <button className="btn" onClick={() => navigate('/login')}>PROSSEGUIR PARA O PAINEL &gt;</button>
    </div>
  );
}
