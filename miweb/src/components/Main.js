import React from 'react';
import { useTranslation } from 'react-i18next';

function Main() {
  const { t } = useTranslation();

  return (
    <main className="main-section">
      <div className="container mx-auto px-8">
        <section id="sobre-mi" className="p-12 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src="https://via.placeholder.com/200"
              alt="Angel Ricardo Gadea"
              className="rounded-full shadow-2xl w-64 h-64 mb-6 md:mb-0 md:mr-12"
            />
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                {t('Sobre Mí')}
              </h1>
              <p className="text-xl leading-relaxed max-w-4xl">
                {t('Desde que era niño, a los 7 años, recibí mi primera computadora y me enamoré de sus infinitas posibilidades. Ese momento fue el inicio de mi pasión por la tecnología. Pasaba horas explorando cada rincón del sistema, probando sus capacidades y aprendiendo cómo funcionaba todo. A medida que crecía, mi entusiasmo por la computación se transformó en un deseo profundo por aprender a programar.')}

                <br /><br />
                {t('Estudié HTML y CSS en mis primeros proyectos, y con cada avance sentía una enorme satisfacción al ver mis páginas web en funcionamiento. Sin embargo, mi curiosidad me llevó a ir más allá: exploré JavaScript, el lenguaje que realmente despertó mi pasión por la programación. Esto me condujo a aprender Node.js para desarrollo backend y profundizar en bases de datos como PostgreSQL y MongoDB, lo cual me permitió trabajar con datos estructurados y no estructurados, ampliando mi conocimiento en el manejo de datos.')}

                <br /><br />
                {t('En 2016, entendí que el desarrollo de software y la infraestructura eran dos mundos que deseaba unir. Así, comencé mi trayectoria en DevOps. Desde entonces, he adquirido un amplio conocimiento en la nube, abarcando plataformas como Azure, AWS y GCP. Dominar estas tecnologías me permite diseñar e implementar soluciones basadas en contenedores con Docker y Kubernetes, así como automatizar infraestructuras con herramientas como Jenkins, Terraform y Ansible.')}

                <br /><br />
                {t('Poseo conocimientos sólidos en scripting con Bash y PowerShell, además de experiencia en servidores Nginx y Apache, lo cual me permite gestionar y optimizar entornos. Mi enfoque siempre ha sido ofrecer soluciones integrales, uniendo mis habilidades de programación y gestión de infraestructura en la nube, para proporcionar resultados eficientes y escalables en cada proyecto.')}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;

