import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Login() {
  const navigate = useNavigate();
  const { handleLogin, isAuthenticated } = useApp();
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');

  // Auto-redirect if already authenticated
  React.useEffect(() => {
    if (isAuthenticated()) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const onLogin = () => {
    if (handleLogin(email, token)) {
      navigate('/dashboard');
    } else {
      alert('Acesso Negado: E-mail ou Security ID (Chave) incorretos.');
    }
  };

  return (
    <div className="reveal auth-container narrow-container">
      <div className="card" style={{ width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ width: '48px', height: '48px', background: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: '900', fontSize: '1.5rem', margin: '0 auto 1.5rem' }}>AI</div>
          <h2>Acesso ao Ecossistema</h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Insira suas credenciais para continuar.</p>
        </div>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>E-mail Cadastrado</label>
          <input type="email" placeholder="Seu e-mail" className="figma-input" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        
        <div style={{ marginBottom: '2.5rem' }}>
          <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Security ID (Sua Chave)</label>
          <input type="text" placeholder="CW2026-XXXXX" className="figma-input" value={token} onChange={e => setToken(e.target.value)} />
        </div>

        <button className="btn" onClick={onLogin} disabled={!email || !token}>
          ACESSAR CONTEÚDO
        </button>
      </div>
    </div>
  );
}
