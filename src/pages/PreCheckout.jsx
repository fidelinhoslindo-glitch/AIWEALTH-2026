import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function PreCheckout() {
  const navigate = useNavigate();
  const { leadData, setLeadData } = useApp();

  return (
    <div className="reveal narrow-container" style={{ textAlign: 'center' }}>
       <h1 style={{ fontSize: '3rem' }}>Finalize sua Criptografia</h1>
       <p style={{ color: 'var(--text-dim)', marginBottom: '3.5rem' }}>Onde devemos enviar suas chaves de acesso?</p>
       <div className="card">
          <input type="text" placeholder="Nome Completo" className="figma-input" value={leadData.name} onChange={e => setLeadData({...leadData, name: e.target.value})} />
          <input type="email" placeholder="Seu Melhor E-mail" className="figma-input" style={{ marginBottom: '2.5rem' }} value={leadData.email} onChange={e => setLeadData({...leadData, email: e.target.value})} />
          <button className="btn" disabled={!leadData.name || !leadData.email} onClick={() => navigate('/checkout')}>
            IR PARA O PAGAMENTO SEGURO
          </button>
       </div>
    </div>
  );
}
