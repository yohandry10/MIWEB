// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importa useTranslation
import Header from './components/Header';
import Banner from './components/Banner';
import Main from './components/Main';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './index.css';

function App() {
  const { i18n } = useTranslation(); // Importa i18n para cambiar de idioma
  const [isDarkMode, setIsDarkMode] = useState(true); // Iniciar en modo oscuro

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
    } else {
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  // Función para alternar el modo oscuro y claro
  const handleThemeToggle = () => setIsDarkMode(!isDarkMode);

  // Función para cambiar de idioma
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma en i18n
  };

  return (
    <Router>
      <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Header toggleDarkMode={handleThemeToggle} isDarkMode={isDarkMode} />
        {/* Botones para cambiar el idioma */}
        <div className="language-switcher">
          <button onClick={() => handleLanguageChange('es')}>ES</button>
          <button onClick={() => handleLanguageChange('en')}>EN</button>
        </div>
        <Routes>
          <Route path="/" element={<><Banner /><Main /></>} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          {/* Puedes agregar más rutas aquí si lo deseas */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
