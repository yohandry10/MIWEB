// src/components/Footer.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <Container>
        {/* Ajustamos la estructura para reorganizar el contenido */}
        <Row className="align-items-center justify-content-between">
          {/* Columna izquierda: Logo y nombre */}
          <Col md={4} className="text-start">
            <div className="footer-logo-container">
              <img src={logo} alt="Logo" className="footer-logo-img" />
              <p className="footer-brand">© 2024 by Angel Gadea</p>
            </div>
          </Col>

          {/* Columna central: Enlaces de navegación */}
          <Col md={4} className="footer-links text-center">
            <ul className="footer-nav">
              <li><Link to="/">{t('Home')}</Link></li>
              <li><Link to="/skills">{t('Skills')}</Link></li>
              <li><Link to="/projects">{t('Projects')}</Link></li>
              <li><a href="#contact">{t('Contacto')}</a></li>
            </ul>
          </Col>

          {/* Columna derecha: Redes sociales */}
          <Col md={4} className="footer-social text-end">
            <h5>{t('Conecta conmigo')}</h5>
            <div className="footer-social-icons">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </Col>
        </Row>

        {/* Nueva fila para el texto de derechos de autor */}
        <Row className="footer-bottom">
          <Col>
            <div className="footer-copy">
              <p>{t('Todos los derechos reservados. Desarrollado por Andydev.@')}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
