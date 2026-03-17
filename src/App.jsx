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
import Dashboard from './pages/Dashboard';
import CourseViewer from './pages/CourseViewer';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import { Link } from 'react-router-dom';

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
        <Footer />
      </div>
    </>
  );
}

const Footer = () => (
  <footer className="main-footer">
    <div className="footer-content">
      <div className="footer-logo">AI WEALTH<span>2026</span></div>
      <div className="footer-links">
        <Link to="/privacidade" className="link">Política de Privacidade</Link>
        <Link to="/termos" className="link">Termos de Uso</Link>
        <a href="mailto:suporte@aiwealth.online">Suporte</a>
      </div>
      <div className="footer-copyright">
        © 2026 AI Wealth - Todos os direitos reservados.
      </div>
      <div className="footer-disclaimer">
        ESTE SITE NÃO É DO FACEBOOK: Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da FACEBOOK, Inc.
      </div>
    </div>
  </footer>
);

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
            <Route path="/termos" element={<Terms />} />
            <Route path="/privacidade" element={<Privacy />} />
          </Routes>
        </GlobalLayout>
      </BrowserRouter>
    </AppProvider>
  );
}
