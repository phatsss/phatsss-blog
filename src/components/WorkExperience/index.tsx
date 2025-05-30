import React, { JSX } from 'react';
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common';

/**
 * Work Experience data array
 * Contains professional experience information with job titles, companies, periods, and descriptions
 */
const experiences = [
  {
    title: 'Full-Time Front-End Developer',
    company: 'Lao IT Dev Co., Ltd.',
    period: '10/2019 – Present',
    description: 'Developed multiple enterprise applications including E-Wallet Systems with secure features using Next.js and TanStack Query, Gas Management dashboards for inventory tracking, Crypto Investment Platforms with Binance API integration, Postal Platforms for package management, Insurance Systems for policy creation and claims, and Education Platforms with student enrollment and payment features.'
  },
  {
    title: 'Part-Time Software Engineer',
    company: 'Lao IT Dev Co., Ltd.',
    period: '07/2019 – 10/2019',
    description: 'Developed a College Management System with core features for student registration, score tracking, course management, tuition handling, and notifications using Laravel (PHP) and MySQL. Focused on both visual design and functional workflows to improve data management and accessibility to academic records.'
  },
  {
    title: 'Web Development Student',
    company: 'National University of Laos (NUOL)',
    period: '10/2016 - 10/2020',
    description: 'Majored in Web Development at the Faculty of Natural Sciences with a GPA of 3.95/4.0. Completed thesis project: NUOL Football Management System - a platform to manage football leagues, teams, players, referees, and matches using Laravel and MySQL.'
  }
];

/**
 * WorkExperience Component
 * Displays professional experience in a timeline format
 * Supports both light and dark mode
 */
export default function WorkExperience(): JSX.Element {
  const { colorMode } = useColorMode();
  
  return (
    <section
      className={`${styles.section} ${
        colorMode === "dark" ? styles.sectionDark : styles.sectionLight
      }`}
    >
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>My Work Experience</h2>
        <p className={styles.sectionDescription}>
          Over 5.5+ years of experience in front-end development creating
          intuitive, modern, and user-friendly web applications.
        </p>
      </div>

      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`${styles.timelineItem} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
          >
            <div
              className={`${styles.timelineContent} ${
                colorMode === "dark" ? styles.cardDark : styles.cardLight
              }`}
            >
              <div className={styles.timelineDot}></div>
              <h3 className={styles.experienceTitle}>{exp.title}</h3>
              <div className={styles.experienceMetadata}>
                <span className={styles.companyName}>{exp.company}</span>
                {/* <span className={styles.metadataSeparator}>•</span> */}
                <span className={styles.period}>{exp.period}</span>
              </div>
              <p className={styles.experienceDescription}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}