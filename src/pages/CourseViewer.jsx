import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { PRODUCTS, COURSE_DATA } from '../data/products';

export default function CourseViewer() {
  const navigate = useNavigate();
  const { 
    viewingCourseId, expandedModule, setExpandedModule, 
    isAuthenticated, setViewingCourseId 
  } = useApp();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
    } else if (!viewingCourseId) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, viewingCourseId, navigate]);

  if (!viewingCourseId || !isAuthenticated()) return null;

  const data = COURSE_DATA[viewingCourseId];
  const productInfo = Object.values(PRODUCTS).find(p => p.id === viewingCourseId) || { name: 'Curso', description: '' };

  return (
    <div className="course-v2 reveal">
      <button className="cv-back-btn" onClick={() => { setViewingCourseId(null); navigate('/dashboard'); }}>
        ← Voltar para Central
      </button>

      <div className="cv-hero">
        <img src={`/cursos/${data.folder}/${data.logo}`} alt={productInfo.name} className="cv-hero-img" />
        <div>
          <span style={{ background: 'var(--primary)', color: '#000', padding: '4px 10px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: '900', letterSpacing: '1px' }}>CONTEÚDO LIBERADO</span>
          <h1 className="cv-hero-title">{productInfo.name}</h1>
          <p className="cv-hero-desc">{productInfo.description}</p>
          <div className="cv-hero-stats">
            <span className="cv-stat"><span className="cv-stat-icon">{data.icon}</span> {data.modules.length} Módulos</span>
            <span className="cv-stat"><span className="cv-stat-icon">⏱</span> {data.totalTime} Total</span>
          </div>
        </div>
      </div>

      <div className="cv-download-card">
        <div className="cv-download-icon">📥</div>
        <div className="cv-download-info">
          <h4>Material de Apoio Completo</h4>
          <p>Baixe o arquivo original para ler offline no seu celular ou computador.</p>
        </div>
        <a 
          href={`/cursos/${data.folder}/${data.pdf}`} 
          download 
          target="_blank" 
          rel="noopener noreferrer"
          className="cv-download-btn" 
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          FAZER DOWNLOAD {viewingCourseId === 'kit_master_ia' ? 'DO ZIP' : 'DO PDF'}
        </a>
      </div>

      <h3 className="cv-section-title">Conteúdo Passo a Passo</h3>
      
      <div className="cv-modules">
        {data.modules.map((mod, index) => {
          const isExpanded = expandedModule === index;
          return (
            <div key={index} className={`cv-module ${isExpanded ? 'expanded' : ''}`}>
              <div className="cv-module-header" onClick={() => setExpandedModule(isExpanded ? null : index)}>
                <div className="cv-module-num">{(index + 1).toString().padStart(2, '0')}</div>
                <div className="cv-module-info">
                  <h4 className="cv-module-title">{mod.title}</h4>
                  <p className="cv-module-desc">{mod.desc}</p>
                </div>
                <div className="cv-module-meta">
                  <span className="cv-module-duration">{mod.duration}</span>
                  <span className={`cv-module-arrow ${isExpanded ? 'open' : ''}`}>▼</span>
                </div>
              </div>
              
              {isExpanded && (
                <div className="cv-module-content">
                  {mod.content.split('\n').map((line, i) => {
                    if (line.trim() === '') return <div key={i} className="content-spacer"></div>;
                    const isBullet = line.trim().startsWith('•') || line.trim().startsWith('-');
                    const isNumbered = /^\d+\./.test(line.trim());
                    const isEmojiLine = /^[\u{1F300}-\u{1F6FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}\u{1F018}-\u{1F270}\u{2600}-\u{26FF}\u{2300}-\u{23FF}]/u.test(line.trim());
                    
                    return (
                      <p key={i} className="content-line" style={{
                        paddingLeft: (isBullet || isNumbered) ? '1rem' : '0',
                        fontWeight: line.includes(':') && line.length < 60 && !isBullet && !isEmojiLine ? '700' : 'normal',
                        color: line.includes(':') && line.length < 60 && !isBullet && !isEmojiLine ? '#fff' : 'inherit'
                      }}>
                        {line}
                      </p>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
