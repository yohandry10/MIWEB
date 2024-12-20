import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from "../assets/img/linux.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t, i18n } = useTranslation();
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [toRotate, setToRotate] = useState([
    t("Cloud Engineer"),
    t("Analista de Middleware Sistemas Operativos Base de Datos"),
    t("DevOps")
  ]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const period = 2000;

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta, loopNum, toRotate, isDeleting]);

  useEffect(() => {
    const updatedToRotate = [
      t("Cloud Engineer"),
      t("Analista de Middleware Sistemas Operativos Base de Datos"),
      t("DevOps")
    ];
    setToRotate(updatedToRotate);
    setLoopNum(0);
    setText('');
    setIsDeleting(false);
    setDelta(300 - Math.random() * 100);
  }, [i18n.language, t]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('light-mode');
  };

  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      <nav className="navbar-style">
        <div className="navbar-left">
          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="navbar-links">
            <a href="#home" className="navbar-link">{t('Inicio')}</a>
            <a href="#skills" className="navbar-link">{t('Habilidades')}</a>
            <a href="#projects" className="navbar-link">{t('Proyectos')}</a>
          </div>
        </div>
        <div className="navbar-right">
          <button className="dark-mode-button" onClick={toggleDarkMode}>
            {isDarkMode ? t('Modo Claro') : t('Modo Oscuro')}
          </button>
          <button className="language-button" onClick={changeLanguage}>
            {i18n.language === 'en' ? 'Español' : 'English'}
          </button>
        </div>
        {isMenuOpen && (
          <div className="nav-menu">
            <a href="#home" className="navbar-link" onClick={toggleMenu}>{t('Inicio')}</a>
            <a href="#skills" className="navbar-link" onClick={toggleMenu}>{t('Habilidades')}</a>
            <a href="#projects" className="navbar-link" onClick={toggleMenu}>{t('Proyectos')}</a>
            <button className="dark-mode-button" onClick={() => { toggleDarkMode(); toggleMenu(); }}>
              {isDarkMode ? t('Modo Claro') : t('Modo Oscuro')}
            </button>
            <button className="language-button" onClick={() => { changeLanguage(); toggleMenu(); }}>
              {i18n.language === 'en' ? 'Español' : 'English'}
            </button>
          </div>
        )}
      </nav>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">{t('Especialista DevOps.')}</span>
                    <h1>
                      {t('¡Hola, soy Angel Gadea!')}
                      <span className="txt-rotate" dataPeriod="1000">
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    <p>{t('¡Bienvenido a mi portafolio!')}</p>
                    <button onClick={() => console.log('connect')} className="connect-button">
                      {t('¡Conectar!')} <ArrowRightCircle size={25} />
                    </button>
                  </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerImg} alt="Header Img" className="img-fluid" />
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Banner;
