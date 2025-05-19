import React, { JSX } from 'react';
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: 'Real Estate Website',
    description: 'A modern property listing platform with search and filtering capabilities.',
    image: '/img/undraw_docusaurus_mountain.svg',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Car Website',
    description: 'An automotive marketplace with detailed vehicle information and comparison tools.',
    image: '/img/undraw_docusaurus_tree.svg',
    tags: ['Vue.js', 'Express', 'PostgreSQL'],
    link: '#'
  },
  {
    title: 'E-commerce',
    description: 'A full-featured online store with product management, cart, and checkout functionality.',
    image: '/img/undraw_docusaurus_react.svg',
    tags: ['React', 'Redux', 'Firebase'],
    link: '#'
  }
];

export default function Portfolio(): JSX.Element {
  const { colorMode } = useColorMode();
  
  return (
    <section className={`${styles.section} ${colorMode === 'dark' ? styles.sectionDark : styles.sectionLight}`}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Let's have a look at my Portfolio</h2>
        <p className={styles.sectionDescription}>
          A showcase of my recent projects and the technologies I've worked with.
        </p>
      </div>
      
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={`${styles.projectCard} ${colorMode === 'dark' ? styles.cardDark : styles.cardLight}`}>
            <div className={styles.projectImage}>
              <img src={project.image} alt={project.title} />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.tagContainer}>
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <a href={project.link} className={styles.projectLink}>
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}