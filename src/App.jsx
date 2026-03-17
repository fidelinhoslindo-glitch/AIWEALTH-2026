import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

// Pages
import Welcome from './pages/Welcome';
import Quiz from './pages/Quiz';
import Analyzing from './pages/Analyzing';
import Sales from './pages/Sales';
import PreCheckout from './pages/PreCheckout';
import Checkout from './pages/Checkout';
import PixPending from './pages/PixPending';
import Success from './pages/Success';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CourseViewer from './pages/CourseViewer';

// Scroll to top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function GlobalLayout({ children }) {
  const location = useLocation();
  const showHeader = ['/checkout', '/pre-checkout', '/pix-pending', '/upsell'].includes(location.pathname);

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-trigger').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <>
      <div className="bg-mesh"></div>
      <div className="container" style={{ paddingTop: '2rem' }}>
        {showHeader && (
          <div className="checkout-header reveal">
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
               <div style={{ width: '32px', height: '32px', background: 'var(--primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: '900' }}>AI</div>
               <span style={{ fontWeight: '900', letterSpacing: '2px', fontSize: '1.2rem' }}>AIWEALTH 2026</span>
            </div>
            <div className="secure-badge">
               <span style={{ fontSize: '1rem', color: 'var(--primary)' }}>🔒</span> SECURE 256-BIT ENCRYPTION
            </div>
          </div>
        )}
        
        {children}
        
      </div>
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        <GlobalLayout>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/analyzing" element={<Analyzing />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/pre-checkout" element={<PreCheckout />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/pix-pending" element={<PixPending />} />
            <Route path="/success" element={<Success />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/course" element={<CourseViewer />} />
          </Routes>
        </GlobalLayout>
      </BrowserRouter>
    </AppProvider>
  );
}
