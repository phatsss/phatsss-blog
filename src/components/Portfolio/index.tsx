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
    title: "E-Wallet System",
    description:
      "Secure wallet application with balance view, transaction history, and QR payment features.",
    technologies: ["Next.js", "TanStack Query", "React", "TypeScript"],
    category: "Financial Technology",
    image: "/img/landing/e-wallet-img.png",
    link: "#",
  },
  {
    title: "Gas Management System",
    description:
      "Inventory management system for gas importers to track stock, deliveries, and sales with comprehensive reporting.",
    technologies: ["React", "Redux", "Chart.js", "Material UI"],
    category: "Enterprise Software",
    image: "/img/landing/petro-img.png",
    link: "#",
  },
  {
    title: "Crypto Investment Platform",
    description:
      "Investment platform with Binance API integration for real-time portfolio tracking and LaoQR payment integration.",
    technologies: ["React", "Node.js", "Binance API", "LaoQR"],
    category: "Financial Technology",
    image: "/img/landing/bitcoin-img.png",
    link: "#",
  },
  {
    title: "Postal Management System",
    description:
      "Platform for shipping companies to manage packages, track deliveries, and generate reports.",
    technologies: ["React", "Express", "MongoDB", "Leaflet Maps"],
    category: "Logistics",
    image: "/img/landing/postal-img.png",
    link: "#",
  },
  {
    title: "Insurance Management System",
    description:
      "Comprehensive system for policy creation, claims processing, and reporting to simplify insurance workflows.",
    technologies: ["React", "Node.js", "MySQL", "PDF Generation"],
    category: "Enterprise Software",
    image: "/img/landing/insurance-img.png",
    link: "#",
  },
  {
    title: "Education Platform",
    description:
      "Student management system with enrollment, QR payment, card generation, and course evaluation features.",
    technologies: ["React", "Laravel", "MySQL", "QR Integration"],
    category: "Education",
    image: "/img/landing/education-img.png",
    link: "#",
  },
];

/**
 * Categories for filtering projects
 */
const categories = [
  "All",
  "Financial Technology",
  "Enterprise Software",
  "Logistics",
  "Education",
];

/**
 * Portfolio Component
 * Displays professional projects with filtering capability
 * Supports both light and dark mode
 */
export default function Portfolio(): JSX.Element {
  const { colorMode } = useColorMode();
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter projects based on selected category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      className={`${styles.section} ${
        colorMode === "dark" ? styles.sectionDark : styles.sectionLight
      }`}
    >
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>My Portfolio</h2>
        <p className={styles.sectionDescription}>
          Explore a selection of projects I've developed throughout my 5.5+
          years of professional experience.
        </p>
      </div>

      <div className={styles.filterContainer}>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`${styles.filterButton} ${
              activeCategory === category ? styles.active : ""
            } ${colorMode === "dark" ? styles.buttonDark : styles.buttonLight}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.portfolioGrid}>
        {filteredProjects.map((project, index) => (
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
              {/* <div className={styles.portfolioOverlay}>
                <a href={project.link} className={styles.viewProjectButton}>View Project</a>
              </div> */}
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