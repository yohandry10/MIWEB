// src/components/Skills.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function Skills() {
  const { t } = useTranslation();

  // Define todas las habilidades con sus respectivas claves de traducción
  const skills = [
    {
      name: 'AWS',
      descriptionKey: 'SkillsContent.AWS.description',
      usageTimeKey: 'SkillsContent.AWS.usageTime',
      projects: ['SkillsContent.AWS.relatedProjects'],
    },
    {
      name: 'Terraform',
      descriptionKey: 'SkillsContent.Terraform.description',
      usageTimeKey: 'SkillsContent.Terraform.usageTime',
      projects: ['SkillsContent.Terraform.relatedProjects'],
    },
    {
      name: 'Docker',
      descriptionKey: 'SkillsContent.Docker.description',
      usageTimeKey: 'SkillsContent.Docker.usageTime',
      projects: ['SkillsContent.Docker.relatedProjects'],
    },
    {
      name: 'Jenkins',
      descriptionKey: 'SkillsContent.Jenkins.description',
      usageTimeKey: 'SkillsContent.Jenkins.usageTime',
      projects: ['SkillsContent.Jenkins.relatedProjects'],
    },
    {
      name: 'Node.js',
      descriptionKey: 'SkillsContent.Node.js.description',
      usageTimeKey: 'SkillsContent.Node.js.usageTime',
      projects: ['SkillsContent.Node.js.relatedProjects'],
    },
    {
      name: 'PostgreSQL',
      descriptionKey: 'SkillsContent.PostgreSQL.description',
      usageTimeKey: 'SkillsContent.PostgreSQL.usageTime',
      projects: ['SkillsContent.PostgreSQL.relatedProjects'],
    },
    {
      name: 'MongoDB',
      descriptionKey: 'SkillsContent.MongoDB.description',
      usageTimeKey: 'SkillsContent.MongoDB.usageTime',
      projects: ['SkillsContent.MongoDB.relatedProjects'],
    },
    {
      name: 'Ansible',
      descriptionKey: 'SkillsContent.Ansible.description',
      usageTimeKey: 'SkillsContent.Ansible.usageTime',
      projects: ['SkillsContent.Ansible.relatedProjects'],
    },
  ];

  return (
    <section className="skills-section">
      <div className="container mx-auto px-8">
        <h1 className="text-5xl font-bold mb-12 text-center">
          {t('Skills')}
        </h1>
        <div className="skills-list grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-center">{skill.name}</h2>
              <p className="mb-2">{t(skill.descriptionKey)}</p>
              <p className="mb-2"><em>{t(skill.usageTimeKey)}</em></p>
              <p className="mb-2">
                <strong>{t('Proyectos relacionados')}:</strong> {skill.projects.map(project => t(project)).join(', ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
