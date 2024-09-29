import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Main from './components/Main';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Iniciar en modo oscuro
  const [language, setLanguage] = useState('es');

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

  // Función para cambiar el idioma entre inglés y español
  const handleLanguageToggle = () => setLanguage(language === 'es' ? 'en' : 'es');

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header
        toggleDarkMode={handleThemeToggle}
        toggleLanguage={handleLanguageToggle}
        isDarkMode={isDarkMode}
        language={language}
      />
      <Banner language={language} />
      <Main language={language} className={isDarkMode ? 'dark-mode-container' : 'light-mode-container'} />
      <Footer language={language} />
    </div>
  );
}

export default App;
