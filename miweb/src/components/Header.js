// src/components/Header.js

import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import 'devicon/devicon.min.css';
import { useTranslation } from 'react-i18next';

function Header({ toggleDarkMode, isDarkMode }) {
  const { t, i18n } = useTranslation();
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    // Actualiza el enlace activo basado en la ruta actual
    const path = location.pathname;
    if (path === '/') {
      setActiveLink('home');
    } else if (path === '/skills') {
      setActiveLink('skills');
    } else if (path === '/projects') {
      setActiveLink('projects');
    } else {
      setActiveLink('');
    }
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Función para cambiar el idioma
  const handleLanguageToggle = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <Navbar expand="md" className={`${scrolled ? 'scrolled' : ''} navbar-style`} fixed="top">
      <Container>
        <Navbar.Brand href="/" className="navbar-icons">
          {/* Iconos de Devicon */}
          <i className="devicon-html5-plain colored"></i>
          <i className="devicon-css3-plain colored"></i>
          <i className="devicon-bootstrap-plain colored"></i>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-nodejs-plain colored"></i>
          <i className="devicon-postgresql-plain colored"></i>
          <i className="devicon-mongodb-plain colored"></i>
          <i className="devicon-azure-plain colored"></i>
          <i className="devicon-amazonwebservices-plain colored"></i>
          <i className="devicon-docker-plain colored"></i>
          <i className="devicon-gitlab-plain colored"></i>
          <i className="devicon-terraform-plain colored"></i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Link
                to="/"
                className={activeLink === 'home' ? 'active navbar-link nav-link' : 'navbar-link nav-link'}
                onClick={() => setActiveLink('home')}
              >
                {t('Home')}
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="/skills"
                className={activeLink === 'skills' ? 'active navbar-link nav-link' : 'navbar-link nav-link'}
                onClick={() => setActiveLink('skills')}
              >
                {t('Skills')}
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="/projects"
                className={activeLink === 'projects' ? 'active navbar-link nav-link' : 'navbar-link nav-link'}
                onClick={() => setActiveLink('projects')}
              >
                {t('Projects')}
              </Link>
            </Nav.Item>
          </Nav>
          <span className="navbar-text d-flex justify-content-end align-items-center">
            <Button variant="outline-light" className="ms-3 language-button" onClick={handleLanguageToggle}>
              {t('Cambiar Idioma')}
            </Button>
            <Button variant="outline-light" className="ms-3 dark-mode-button" onClick={toggleDarkMode}>
              {isDarkMode ? t('Light Mode') : t('Dark Mode')}
            </Button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
