import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { PRODUCTS } from '../data/products';

const AppContext = createContext(null);
export const useApp = () => useContext(AppContext);

// localStorage helpers
const loadState = (key, fallback) => {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
  catch { return fallback; }
};
const saveState = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} };

export function AppProvider({ children }) {
  // Lead / Funnel
  const [leadData, setLeadData] = useState(loadState('leadData', { name: '', email: '' }));
  const [selectedProduct, setSelectedProduct] = useState(loadState('selectedProduct', PRODUCTS.RENDA_EXTRA));
  const [includeKit, setIncludeKit] = useState(true);
  const [bumpVisible, setBumpVisible] = useState(false);

  // Payment
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [pixData, setPixData] = useState(null);
  const [pixPollingId, setPixPollingId] = useState(null);
  const [pixPaid, setPixPaid] = useState(false);

  // Auth / Dashboard
  const [userToken, setUserToken] = useState(loadState('userToken', ''));
  const [unlockedCourses, setUnlockedCourses] = useState(loadState('unlockedCourses', []));
  const [viewingCourseId, setViewingCourseId] = useState(null);
  const [expandedModule, setExpandedModule] = useState(null);

  // Generate token
  const generateToken = () => 'CW2026-' + Math.random().toString(36).substr(2, 5).toUpperCase();

  // Persist to localStorage
  useEffect(() => { saveState('leadData', leadData); }, [leadData]);
  useEffect(() => { saveState('selectedProduct', selectedProduct); }, [selectedProduct]);
  useEffect(() => { saveState('userToken', userToken); }, [userToken]);
  useEffect(() => { saveState('unlockedCourses', unlockedCourses); }, [unlockedCourses]);

  // Checkout total
  const checkoutTotal = includeKit ? (selectedProduct.price + 27.10) : selectedProduct.price;

  // EvoPay: Create PIX
  const onEvoPay = async (navigate) => {
    setPaymentLoading(true);
    const totalAmount = checkoutTotal;
    const description = includeKit ? `${selectedProduct.name} + Kit Master 2026` : selectedProduct.name;
    
    try {
      const response = await fetch('http://localhost:3001/create_pix', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: totalAmount,
          payerName: leadData.name,
          payerEmail: leadData.email,
          description
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.message || errData.error || 'Gateway retornou erro.');
      }

      const data = await response.json();
      if (data.qrCodeBase64) {
        setPixData({
          qrCodeBase64: data.qrCodeBase64,
          qrCode: data.qrCodeText,
          id: data.id
        });
        
        if (includeKit) {
          setUnlockedCourses(Object.values(PRODUCTS).map(p => p.id));
        } else {
          setUnlockedCourses(prev => [...new Set([...prev, selectedProduct.id])]);
        }
        
        const token = generateToken();
        setUserToken(token);
        setPixPaid(false);
        navigate('/pix-pending');
        startPixPolling(data.id, navigate);
      } else {
        throw new Error('EvoPay não retornou QR Code: ' + (data.message || JSON.stringify(data)));
      }
    } catch (e) {
      console.error('Erro PIX:', e);
      alert('Erro ao gerar PIX: ' + e.message);
    } finally {
      setPaymentLoading(false);
    }
  };

  // PIX Polling
  const startPixPolling = useCallback((transactionId, navigate) => {
    if (pixPollingId) clearInterval(pixPollingId);
    const interval = setInterval(async () => {
      try {
        const res = await fetch(`http://localhost:3001/check_pix/${transactionId}`);
        const data = await res.json();
        if (data.status === 'COMPLETED') {
          clearInterval(interval);
          setPixPaid(true);
          navigate('/success');
        }
      } catch {}
    }, 5000);
    setPixPollingId(interval);
  }, [pixPollingId]);

  // Manual payment check
  const checkPaymentManually = async (navigate) => {
    if (!pixData?.id) return;
    try {
      const res = await fetch(`http://localhost:3001/check_pix/${pixData.id}`);
      const data = await res.json();
      if (data.status === 'COMPLETED') {
        if (pixPollingId) clearInterval(pixPollingId);
        setPixPaid(true);
        navigate('/success');
        return true;
      }
      return false;
    } catch {
      return false;
    }
  };

  // Cleanup polling
  useEffect(() => {
    return () => { if (pixPollingId) clearInterval(pixPollingId); };
  }, [pixPollingId]);

  // Auth check
  const isAuthenticated = () => !!(userToken && leadData.email);

  // Login
  const handleLogin = (email, token) => {
    const savedEmail = loadState('leadData', { email: '' }).email;
    const savedToken = loadState('userToken', '');
    if (email === savedEmail && token === savedToken) {
      setLeadData(prev => ({ ...prev, email }));
      setUserToken(token);
      return true;
    }
    return false;
  };

  // Logout
  const logout = () => {
    setUserToken('');
    setUnlockedCourses([]);
    setLeadData({ name: '', email: '' });
    localStorage.clear();
  };

  // Buy locked course
  const buyLockedCourse = (productKey, navigate) => {
    if (PRODUCTS[productKey]) {
      setSelectedProduct(PRODUCTS[productKey]);
    } else {
      setSelectedProduct(productKey);
    }
    setIncludeKit(false);
    setBumpVisible(false);
    navigate('/checkout');
  };

  const value = {
    leadData, setLeadData,
    selectedProduct, setSelectedProduct,
    includeKit, setIncludeKit,
    bumpVisible, setBumpVisible,
    paymentLoading, setPaymentLoading,
    pixData, setPixData, pixPaid, setPixPaid,
    userToken, setUserToken,
    unlockedCourses, setUnlockedCourses,
    viewingCourseId, setViewingCourseId,
    expandedModule, setExpandedModule,
    generateToken, checkoutTotal,
    onEvoPay, checkPaymentManually,
    isAuthenticated, handleLogin, logout,
    buyLockedCourse,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
