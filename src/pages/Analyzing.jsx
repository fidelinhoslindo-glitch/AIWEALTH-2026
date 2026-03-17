import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Analyzing() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => navigate('/sales'), 800);
          return 100;
        }
        return prev + 1.2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="reveal narrow-container" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ width: '120px', height: '120px', margin: '0 auto 3rem', border: '2px solid rgba(0,255,163,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
         <div style={{ position: 'absolute', inset: '-10px', border: '2px solid var(--primary)', borderRadius: '50%', borderTopColor: 'transparent', animation: 'meshFlow 2s linear infinite' }}></div>
         <h2 style={{ fontSize: '2.5rem' }}>{Math.floor(progress)}%</h2>
      </div>
      <h3 style={{ textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.9rem', color: 'var(--primary)' }}>Sincronizando Perfil</h3>
      <p style={{ color: 'var(--text-dim)', marginTop: '1rem' }}>Cruzando dados com projeções Alpha de 2026...</p>
    </div>
  );
}
