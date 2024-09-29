import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';
import 'devicon/devicon.min.css';
// Importamos solo los iconos que necesitas
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
// Eliminamos navIcon3 si no es necesario

function Header({ toggleDarkMode, toggleLanguage, isDarkMode }) {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => setActiveLink(value);

  return (
    <Router>
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
              <Nav.Link
                href="#home"
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text d-flex justify-content-end align-items-center">
              {/* Si no deseas los íconos sociales en el navbar, puedes comentar o eliminar este bloque */}
              {/*
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="LinkedIn" /></a>
                <a href="#"><img src={navIcon2} alt="Facebook" /></a>
              </div>
              */}
              <Button variant="outline-light" className="ms-3 language-button" onClick={toggleLanguage}>
                Cambiar Idioma
              </Button>
              <Button variant="outline-light" className="ms-3 dark-mode-button" onClick={toggleDarkMode}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </Button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}

export default Header;

