import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Sales() {
  const navigate = useNavigate();
  return (
    <div className="reveal narrow-container" style={{ textAlign: 'center', paddingTop: '2rem' }}>
      <div className="success-check">✓</div>
      <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Identidade Confirmada</h1>
      <p style={{ color: 'var(--text-dim)', fontSize: '1.2rem', marginBottom: '4rem' }}>
        Seu perfil foi selecionado para o grupo Beta de 2026. <br/>As portas para a nova economia estão abertas.
      </p>
      <button className="btn" onClick={() => navigate('/pre-checkout')}>
         PROSSEGUIR PARA O TERMINAL DE ACESSO
      </button>
    </div>
  );
}
