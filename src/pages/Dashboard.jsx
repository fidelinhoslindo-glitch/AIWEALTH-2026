import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { PRODUCTS, COURSE_DATA } from '../data/products';

export default function Dashboard() {
  const navigate = useNavigate();
  const { 
    leadData, unlockedCourses, setViewingCourseId, 
    setExpandedModule, logout, buyLockedCourse,
    isAuthenticated
  } = useApp();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const onLogout = () => {
    logout();
    navigate('/');
  };

  const handleAccessCourse = (courseId) => {
    setViewingCourseId(courseId);
    setExpandedModule(null);
    navigate('/course');
  };

  const totalCourses = Object.keys(COURSE_DATA).length;
  // If Kit Master was bought, they have all courses
  const userCoursesCount = unlockedCourses.includes(PRODUCTS.KIT_MASTER.id) 
    ? totalCourses 
    : unlockedCourses.length;

  if (!isAuthenticated()) return null;

  return (
    <div className="dashboard-v2 reveal">
      <header className="dash-header">
        <div className="dash-header-left">
          <div className="dash-logo">AI</div>
          <div>
            <h1 className="dash-title">Central de Cursos</h1>
            <p className="dash-email">{leadData.email}</p>
          </div>
        </div>
        <div className="dash-header-right">
          <div className="dash-status-badge"><span className="status-dot"></span> Sincronizado</div>
          <button className="dash-logout-btn" onClick={onLogout}>Sair</button>
        </div>
      </header>

      <div className="dash-welcome-banner">
        <div>
          <h2 className="welcome-title">Bem-vindo(a), {leadData.name.split(' ')[0]}!</h2>
          <p className="welcome-sub">Seu hub central de conhecimento e ferramentas para a economia de 2026 está pronto.</p>
        </div>
        <div className="welcome-stats">
          <div className="stat-card">
            <span className="stat-number">{userCoursesCount}</span>
            <span className="stat-label">Cursos Liberados</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{totalCourses - userCoursesCount}</span>
            <span className="stat-label">Para Desbloquear</span>
          </div>
          <div className="stat-card" style={{ borderColor: 'var(--primary)', background: 'rgba(0,255,163,0.05)' }}>
            <span className="stat-number" style={{ color: '#fff' }}>∞</span>
            <span className="stat-label" style={{ color: 'var(--primary)' }}>Acesso Vitalício</span>
          </div>
        </div>
      </div>

      <h3 className="dash-section-title">Seus Treinamentos</h3>
      
      <div className="dash-grid">
        {Object.entries(COURSE_DATA).map(([id, data]) => {
          const isUnlocked = unlockedCourses.includes(id) || unlockedCourses.includes(PRODUCTS.KIT_MASTER.id);
          const productInfo = Object.values(PRODUCTS).find(p => p.id === id) || { name: 'Curso', description: '' };
          
          return (
            <div key={id} className={`dash-course-card ${!isUnlocked ? 'locked' : ''}`}>
              <div className="dash-course-thumb">
                <img src={`/cursos/${data.folder}/${data.logo}`} alt={productInfo.name} />
                {!isUnlocked && (
                  <div className="dash-lock-overlay">
                    <span className="dash-lock-icon">🔒</span>
                    <span className="dash-lock-text">Bloqueado</span>
                  </div>
                )}
                {isUnlocked && (
                  <div className="dash-course-badge">{data.icon}</div>
                )}
              </div>
              <div className="dash-course-body">
                <h4 className="dash-course-name">{productInfo.name}</h4>
                <p className="dash-course-desc">{productInfo.description}</p>
                
                <div className="dash-course-meta-row">
                  <span className="meta-pill">📚 {data.modules.length} etapas</span>
                  <span className="meta-pill">⏱ {data.totalTime}</span>
                </div>

                {isUnlocked ? (
                  <button className="dash-access-btn" onClick={() => handleAccessCourse(id)}>
                    ACESSAR CONTEÚDO <span className="btn-arrow">→</span>
                  </button>
                ) : (
                  <button className="dash-buy-btn" onClick={() => buyLockedCourse(id, navigate)}>
                    COMPRAR — R$ {productInfo.price.toFixed(2).replace('.',',')}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
