// src/components/Projects.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();

  // Define los proyectos con sus respectivas descripciones, tiempos y proyectos relacionados
  const projects = [
    {
      name: 'AWS',
      descriptionKey: 'ProjectsContent.AWS.description',
      usageTimeKey: 'ProjectsContent.AWS.usageTime',
      relatedProjectsKey: 'ProjectsContent.AWS.relatedProjects',
    },
    {
      name: 'Terraform',
      descriptionKey: 'ProjectsContent.Terraform.description',
      usageTimeKey: 'ProjectsContent.Terraform.usageTime',
      relatedProjectsKey: 'ProjectsContent.Terraform.relatedProjects',
    },
    {
      name: 'Docker',
      descriptionKey: 'ProjectsContent.Docker.description',
      usageTimeKey: 'ProjectsContent.Docker.usageTime',
      relatedProjectsKey: 'ProjectsContent.Docker.relatedProjects',
    },
    {
      name: 'Jenkins',
      descriptionKey: 'ProjectsContent.Jenkins.description',
      usageTimeKey: 'ProjectsContent.Jenkins.usageTime',
      relatedProjectsKey: 'ProjectsContent.Jenkins.relatedProjects',
    },
    {
      name: 'Node.js',
      descriptionKey: 'ProjectsContent.Nodejs.description',
      usageTimeKey: 'ProjectsContent.Nodejs.usageTime',
      relatedProjectsKey: 'ProjectsContent.Nodejs.relatedProjects',
    },
    {
      name: 'PostgreSQL',
      descriptionKey: 'ProjectsContent.PostgreSQL.description',
      usageTimeKey: 'ProjectsContent.PostgreSQL.usageTime',
      relatedProjectsKey: 'ProjectsContent.PostgreSQL.relatedProjects',
    },
    {
      name: 'MongoDB',
      descriptionKey: 'ProjectsContent.MongoDB.description',
      usageTimeKey: 'ProjectsContent.MongoDB.usageTime',
      relatedProjectsKey: 'ProjectsContent.MongoDB.relatedProjects',
    },
    {
      name: 'Ansible',
      descriptionKey: 'ProjectsContent.Ansible.description',
      usageTimeKey: 'ProjectsContent.Ansible.usageTime',
      relatedProjectsKey: 'ProjectsContent.Ansible.relatedProjects',
    },
  ];

  return (
    <section className="projects-section">
      <div className="container mx-auto px-8">
        <h1 className="text-5xl font-bold mb-12 text-center">
          {t('Projects')}
        </h1>
        <div className="projects-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-item shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-center">{project.name}</h2>
              <p className="mb-2">{t(project.descriptionKey)}</p>
              <p className="mb-2"><em>{t(project.usageTimeKey)}</em></p>
              <p className="mb-2">
                <strong>{t('Proyectos relacionados')}:</strong> {t(project.relatedProjectsKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
