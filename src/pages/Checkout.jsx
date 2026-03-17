import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/products';

export default function Checkout() {
  const navigate = useNavigate();
  const { 
    selectedProduct, includeKit, setIncludeKit, bumpVisible, setBumpVisible,
    checkoutTotal, onEvoPay, paymentLoading 
  } = useApp();

  useEffect(() => {
    // Trigger bump animation after a short delay
    setTimeout(() => setBumpVisible(true), 400);
  }, [setBumpVisible]);

  return (
    <div className="reveal layout-2col">
      <div className="reveal-trigger">
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Review your order</h1>
        <p style={{ color: 'var(--text-dim)', marginBottom: '3rem' }}>Join the exclusive 2026 Wealth cohort today.</p>
        
        <div className="card" style={{ padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center', marginBottom: '2rem' }}>
          <img src="/mockup.png" alt="Product" className="summary-item-img" />
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <h3 style={{ fontSize: '1.4rem' }}>{selectedProduct.name}</h3>
              <span style={{ background: 'var(--primary)', color: '#000', padding: '2px 8px', borderRadius: '4px', fontSize: '0.6rem', fontWeight: '900' }}>LIFETIME</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '1rem' }}>{selectedProduct.description}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--primary)' }}>R$ {selectedProduct.price.toFixed(2).replace('.',',')}</span>
              <span style={{ fontSize: '0.9rem', textDecoration: 'line-through', opacity: 0.4 }}>R$ {selectedProduct.oldPrice.toFixed(2).replace('.',',')}</span>
            </div>
          </div>
        </div>

        {/* ORDER BUMP — Kit Master */}
        {selectedProduct.id !== PRODUCTS.KIT_MASTER.id && (
          <div 
            className={`order-bump-checkout ${bumpVisible ? 'bump-visible' : ''} ${includeKit ? 'active' : ''}`}
            onClick={() => setIncludeKit(!includeKit)}
          >
            <div className="bump-header">
              <div className="bump-checkbox">
                {includeKit && <span className="bump-check">✓</span>}
              </div>
              <div className="bump-label">
                <span className="bump-badge">🔥 OFERTA ESPECIAL</span>
                <h4 style={{ fontSize: '1.1rem', margin: '0.5rem 0 0.25rem' }}>Adicionar Kit Master Wealth 2026</h4>
              </div>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', margin: '0.75rem 0 1rem', paddingLeft: '3rem' }}>
              Leve todos os <strong style={{ color: '#fff' }}>4 e-books</strong> + bônus exclusivos de escala por apenas:
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingLeft: '3rem' }}>
              <span style={{ fontSize: '0.85rem', textDecoration: 'line-through', opacity: 0.4 }}>R$ 197,00</span>
              <span style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--primary)' }}>+ R$ 27,10</span>
            </div>
          </div>
        )}
        
        <div style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginTop: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem' }}><span>{selectedProduct.name}</span> <span>R$ {selectedProduct.price.toFixed(2).replace('.',',')}</span></div>
          {includeKit && selectedProduct.id !== PRODUCTS.KIT_MASTER.id && (
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', color: 'var(--primary)' }}><span>+ Kit Master Wealth 2026</span> <span>R$ 27,10</span></div>
          )}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem' }}><span>VAT / Tax</span> <span>R$ 0,00</span></div>
          
          <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem', marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '1.2rem', color: '#fff', fontWeight: '700' }}>Total</span>
            <span style={{ fontSize: '2.5rem', color: 'var(--primary)', fontWeight: '900' }}>R$ {checkoutTotal.toFixed(2).replace('.',',')}</span>
          </div>
        </div>

        <div className="trust-badges-grid">
          <div className="trust-card"><span>PCI-DSS COMPLIANT</span></div>
          <div className="trust-card"><span>SSL ENCRYPTED</span></div>
          <div className="trust-card"><span>7-DAY GUARANTEE</span></div>
        </div>
      </div>
      
      <div className="reveal-trigger">
        <div className="payment-details-title">
          <span style={{ color: 'var(--primary)', fontSize: '1.5rem' }}>💳</span> 
          <h2 style={{ fontSize: '1.8rem' }}>Pagamento via PIX</h2>
        </div>

        <div className="card" style={{ padding: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ width: '80px', height: '80px', margin: '0 auto 1.5rem', background: 'rgba(0,255,163,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem' }}>⚡</div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Pagamento Instantâneo</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>Seu acesso é liberado em segundos após a confirmação do PIX.</p>
          </div>

          <div style={{ background: 'rgba(0,255,163,0.05)', border: '1px solid rgba(0,255,163,0.2)', borderRadius: '16px', padding: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem', color: 'var(--text-dim)' }}>VALOR TOTAL</p>
            <p style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)' }}>R$ {checkoutTotal.toFixed(2).replace('.',',')}</p>
          </div>

          <button 
            className="btn unlock-btn" 
            onClick={() => onEvoPay(navigate)} 
            disabled={paymentLoading}
            style={{ marginTop: 0 }}
          >
            {paymentLoading ? 'GERANDO PIX...' : '⚡ PAGAR COM PIX AGORA'}
          </button>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
            <span>🔒 Seguro</span>
            <span>⚡ Instantâneo</span>
            <span>✓ Garantia 7 dias</span>
          </div>
        </div>
        
        <p style={{ textAlign: 'center', fontSize: '0.65rem', color: 'var(--text-dim)', marginTop: '2rem', lineHeight: '1.6' }}>
          Ao clicar no botão acima, você concorda com nossos Termos de Serviço e Política de Privacidade. <br/>Seu acesso será ativado instantaneamente após a confirmação do pagamento.
        </p>

        <button className="btn" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-dim)', marginTop: '4rem' }} onClick={() => navigate('/pre-checkout')}>VOLTAR</button>
      </div>
    </div>
  );
}
