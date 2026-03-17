import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function PixPending() {
  const navigate = useNavigate();
  const { pixData, checkPaymentManually, pixPaid } = useApp();
  const [verifying, setVerifying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    if (!pixData && !pixPaid) {
      navigate('/checkout');
    }
  }, [pixData, pixPaid, navigate]);

  // Timer countdown
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleVerifyPayment = async () => {
    setVerifying(true);
    const isPaid = await checkPaymentManually(navigate);
    if (!isPaid) {
      alert('Pagamento ainda não identificado. Se você acabou de pagar, aguarde alguns segundos e tente novamente.');
    }
    setVerifying(false);
  };

  if (!pixData) return null;

  return (
    <div className="reveal narrow-container" style={{ textAlign: 'center', paddingTop: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Finalize seu Acesso</h1>
      <p style={{ color: 'var(--text-dim)', marginBottom: '1rem' }}>
        Escaneie o QR Code abaixo ou use o Pix Copia e Cola para liberar seu acesso imediatamente.
      </p>
      
      <div style={{ color: '#ff6b6b', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '2rem' }}>
        Expira em: {formatTime(timeLeft)}
      </div>
      
      <div className="card" style={{ display: 'inline-block', padding: '2rem', marginBottom: '2rem', background: '#fff' }}>
        <img src={`data:image/png;base64,${pixData.qrCodeBase64}`} alt="QR Code Pix" style={{ width: '250px', height: '250px', borderRadius: '12px' }} />
      </div>
      
      <div style={{ marginBottom: '3rem', maxWidth: '400px', margin: '0 auto 3rem' }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', marginBottom: '0.5rem', textAlign: 'left' }}>Pix Copia e Cola:</p>
        <input 
          type="text" 
          readOnly 
          value={pixData.qrCode || ''} 
          className="figma-input" 
          style={{ textAlign: 'center', fontSize: '0.8rem', color: '#fff', cursor: 'text', padding: '1rem' }}
          onClick={(e) => { e.target.select(); navigator.clipboard.writeText(pixData.qrCode); alert('Chave Pix copiada com sucesso!'); }}
        />
        <p style={{ fontSize: '0.7rem', color: 'var(--primary)', marginTop: '0.5rem' }}>Clique no campo acima para copiar</p>
      </div>

      <button className="btn" onClick={handleVerifyPayment} disabled={verifying}>
        {verifying ? 'VERIFICANDO...' : 'JÁ REALIZEI O PAGAMENTO >'}
      </button>
      
      <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
        Estamos aguardando a confirmação do banco. Isso geralmente leva menos de 10 segundos.
      </p>
    </div>
  );
}
