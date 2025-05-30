import React, { useState, JSX } from 'react';
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common';

/**
 * Portfolio project data array
 * Contains information about completed projects
 * Each project includes title, description, technologies used, category, and image
 */
const projects = [
  {
    title: "Covid-19 Tracker",
    description:
      "Web application for tracking COVID-19 statistics.",
    technologies: ["Vite", "React", "Typescript", "Redux-saga", "Antd-design", "MapBox"],
    image: "./img/landing/covid-la-img.jpeg",
    link: "https://covid19-la.netlify.app/",
    projectLink: "https://github.com/phatsss/covid19-la",
  },
  {
    title: "Bento Grid Layout",
    description:
      "Responsive layout grid with various components and animations.",
    technologies: ["Vite", "React", "Typescript", "tailwindcss"],
    image: "./img/landing/bento-grid-img.png",
    link: "https://covid19-la.netlify.app/",
    projectLink: "https://github.com/phatsss/valentine-dev",
  },
];

/**
 * SideProjects Component
 * Displays professional projects with filtering capability
 * Supports both light and dark mode
 */
export default function SideProjects(): JSX.Element {
  const { colorMode } = useColorMode();
  
  return (
    <section
      className={`${styles.section} ${
        colorMode === "dark" ? styles.sectionDark : styles.sectionLight
      }`}
    >
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>My Free Time Projects</h2>
        <p className={styles.sectionDescription}>
        These are open-source personal projects I've built to improve my skills and explore new stacks.
        </p>
      </div>

      <div className={styles.portfolioGrid}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${styles.portfolioCard} ${
              colorMode === "dark" ? styles.cardDark : styles.cardLight
            }`}
          >
            <div className={styles.portfolioImageContainer}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.portfolioImage}
              />
              <div className={styles.portfolioOverlay}>
                <a href={project.link} className={styles.viewProjectButton}>Demo</a>
                <a href={project.projectLink} className={styles.viewProjectButton}>View Project</a>
              </div>
            </div>
            <div className={styles.portfolioContent}>
              <h3 className={styles.portfolioTitle}>{project.title}</h3>
              <p className={styles.portfolioDescription}>
                {project.description}
              </p>
              <div className={styles.technologiesContainer}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className={styles.technologyTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}