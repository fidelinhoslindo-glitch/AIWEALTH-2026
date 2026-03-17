import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ totalRevenue: '0.00', totalSales: 0, totalLeads: 0 });
  const [leads, setLeads] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState('stats');
  const navigate = useNavigate();
  const adminPass = sessionStorage.getItem('admin_pass');

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

  useEffect(() => {
    if (!adminPass) {
      navigate('/admin/login');
      return;
    }
    fetchData();
  }, [adminPass]);

  const fetchData = async () => {
    setLoading(true);
    const headers = { 'x-admin-pass': adminPass };

    try {
      const [sRes, lRes, oRes] = await Promise.all([
        fetch(`${API_URL}/admin/stats`, { headers }),
        fetch(`${API_URL}/admin/leads`, { headers }),
        fetch(`${API_URL}/admin/orders`, { headers })
      ]);

      if (sRes.status === 401) { navigate('/admin/login'); return; }

      const [sData, lData, oData] = await Promise.all([
        sRes.json(), lRes.json(), oRes.json()
      ]);

      setStats(sData);
      setLeads(lData);
      setOrders(oData);
    } catch (err) {
      console.error('Erro ao buscar dados admin:', err);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    sessionStorage.removeItem('admin_pass');
    navigate('/admin/login');
  };

  if (loading) return <div className="auth-container"><h2>CARREGANDO COMANDO...</h2></div>;

  return (
    <div className="dashboard-v2 reveal">
      <header className="dash-header">
        <div className="dash-header-left">
          <img src="/favicon.png" alt="Logo" style={{ width: '40px', height: '40px' }} />
          <div>
            <div className="dash-title">ADMIN PANEL</div>
            <div className="dash-email">AI WEALTH STRATEGY</div>
          </div>
        </div>
        <div className="dash-header-right">
          <button className="dash-logout-btn" onClick={logout}>LOGOUT</button>
        </div>
      </header>

      <div className="dash-welcome-banner">
        <div>
          <h2 className="welcome-title">Visão Geral</h2>
          <p className="welcome-sub">Métricas de performance e acesso a dados em tempo real.</p>
        </div>
        <div className="welcome-stats">
          <div className="stat-card">
            <span className="stat-number">R$ {stats.totalRevenue}</span>
            <span className="stat-label">RECARGA TOTAL</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{stats.totalSales}</span>
            <span className="stat-label">VENDAS</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{stats.totalLeads}</span>
            <span className="stat-label">LEADS</span>
          </div>
        </div>
      </div>

      <div className="payment-toggle">
        <button className={`toggle-btn ${tab === 'stats' ? 'active' : ''}`} onClick={() => setTab('stats')}>CONTROLE</button>
        <button className={`toggle-btn ${tab === 'leads' ? 'active' : ''}`} onClick={() => setTab('leads')}>LEADS</button>
        <button className={`toggle-btn ${tab === 'orders' ? 'active' : ''}`} onClick={() => setTab('orders')}>PEDIDOS</button>
      </div>

      <div className="admin-content-area">
        {tab === 'stats' && (
          <div className="card">
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>RESUMO DA INFRAESTRUTURA</h3>
            <p style={{ color: 'var(--text-dim)' }}>
              Seus sistemas estão operando nos parâmetros ideais. <br/>
              Acompanhe os novos registros e conversões através das abas de Leads e Pedidos.
            </p>
          </div>
        )}

        {tab === 'leads' && (
          <div className="card" style={{ padding: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #333', textAlign: 'left', color: 'var(--primary)' }}>
                  <th style={{ padding: '1rem' }}>NOME</th>
                  <th style={{ padding: '1rem' }}>E-MAIL</th>
                  <th style={{ padding: '1rem' }}>CHAVE</th>
                  <th style={{ padding: '1rem' }}>DATA</th>
                </tr>
              </thead>
              <tbody>
                {leads.map(lead => (
                  <tr key={lead.id} style={{ borderBottom: '1px solid #1a1a1a' }}>
                    <td style={{ padding: '1rem' }}>{lead.name || '---'}</td>
                    <td style={{ padding: '1rem' }}>{lead.email}</td>
                    <td style={{ padding: '1rem' }}>{lead.security_token || '---'}</td>
                    <td style={{ padding: '1rem', color: '#666' }}>{new Date(lead.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === 'orders' && (
          <div className="card" style={{ padding: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #333', textAlign: 'left', color: 'var(--primary)' }}>
                  <th style={{ padding: '1rem' }}>VALOR</th>
                  <th style={{ padding: '1rem' }}>PRODUTO</th>
                  <th style={{ padding: '1rem' }}>STATUS</th>
                  <th style={{ padding: '1rem' }}>DATA</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id} style={{ borderBottom: '1px solid #1a1a1a' }}>
                    <td style={{ padding: '1rem' }}>R$ {order.amount.toFixed(2)}</td>
                    <td style={{ padding: '1rem' }}>{order.product_key || '---'}</td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{ 
                        background: order.status === 'COMPLETED' ? 'rgba(0,255,163,0.2)' : 'rgba(255,255,255,0.05)', 
                        color: order.status === 'COMPLETED' ? 'var(--primary)' : '#888',
                        padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold'
                      }}>
                        {order.status}
                      </span>
                    </td>
                    <td style={{ padding: '1rem', color: '#666' }}>{new Date(order.created_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
