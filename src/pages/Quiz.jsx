import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/products';
import { QUIZ_QUESTIONS } from '../data/quiz';

export default function Quiz() {
  const navigate = useNavigate();
  const { setSelectedProduct } = useApp();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    const nextAnswers = [...answers, answer];
    setAnswers(nextAnswers);
    
    if (currentQuestion === 0) {
      if (answer === "Renda Extra com IA") setSelectedProduct(PRODUCTS.RENDA_EXTRA);
      else if (answer === "Viver de Lançamentos") setSelectedProduct(PRODUCTS.LANCAMENTOS);
      else if (answer === "Escalar Negócio Local") setSelectedProduct(PRODUCTS.NEGOCIO_LOCAL);
      else if (answer === "Automação Total") setSelectedProduct(PRODUCTS.AUTOMACAO);
    }

    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      navigate('/analyzing');
    }
  };

  return (
    <div className="reveal narrow-container" style={{ marginTop: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3rem', fontSize: '0.75rem', letterSpacing: '2px', color: 'var(--text-dim)' }}>
        <span>PROCESSO {currentQuestion + 1} / {QUIZ_QUESTIONS.length}</span>
        <span style={{ color: 'var(--primary)' }}>ESTADO: EM ANÁLISE</span>
      </div>
      
      <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', lineHeight: '1.1' }}>
        {QUIZ_QUESTIONS[currentQuestion].question}
      </h2>

      <div className="option-list">
        {QUIZ_QUESTIONS[currentQuestion].options.map((opt, i) => (
          <div key={i} className="option-item" onClick={() => handleAnswer(opt)}>
            <span style={{ color: 'var(--primary)', marginRight: '20px', opacity: 0.5 }}>0{i+1}</span>
            {opt}
          </div>
        ))}
      </div>
    </div>
  );
}
