import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });

      if (response.ok) {
        sessionStorage.setItem('admin_pass', password);
        navigate('/admin/dashboard');
      } else {
        setError('Senha mestre incorreta');
      }
    } catch (err) {
      setError('Erro ao conectar com o servidor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="card reveal" style={{ maxWidth: '400px', width: '100%', textAlign: 'center' }}>
        <div style={{ marginBottom: '2rem' }}>
          <img src="/favicon.png" alt="AI Wealth" style={{ width: '64px', height: '64px', marginBottom: '1rem' }} />
          <h2 style={{ fontSize: '1.5rem', fontWeight: '900' }}>ADMIN COMMAND</h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>Acesso restrito à infraestrutura AI Wealth</p>
        </div>

        <form onSubmit={handleLogin}>
          <input 
            type="password" 
            className="figma-input" 
            placeholder="Master Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          {error && <p style={{ color: '#ff4d4d', fontSize: '0.8rem', marginBottom: '1rem' }}>{error}</p>}

          <button className="btn" type="submit" disabled={loading}>
            {loading ? 'AUTENTICANDO...' : 'ENTRAR NO SISTEMA'}
          </button>
        </form>
      </div>
    </div>
  );
}
