import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from "../assets/img/linux.png"; // Imagen del pingüino
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
  const [index, setIndex] = useState(1);
  const [toRotate, setToRotate] = useState([
    t("Cloud Engineer"),
    t("Analista de Middleware Sistemas Operativos Base de Datos"),
    t("DevOps")
  ]);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta]);

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
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  // Actualizar toRotate cuando cambia el idioma
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

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">{t('Especialista DevOps.')}</span>
                  <h1>{`${t('¡Hola, soy Angel Ricardo Gadea!')} `}
                    <span className="txt-rotate" dataPeriod="1000">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>{t('¡Bienvenido a mi portafolio!')}</p>
                  <button onClick={() => console.log('connect')}>{t('¡Conectar!')} <ArrowRightCircle size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" style={{ width: '300px' }} />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
  