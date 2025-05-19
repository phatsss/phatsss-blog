import React, { JSX } from 'react';
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: 'Frontend Developer',
    company: 'Tech Company',
    period: '2021 - Present',
    description: 'Building responsive web applications using React, Next.js, and modern CSS frameworks.'
  },
  {
    title: 'Full Stack Developer',
    company: 'Web Agency',
    period: '2019 - 2021',
    description: 'Developed full-stack applications with Node.js, Express, and React.'
  },
  {
    title: 'Full Stack & Database',
    company: 'Startup',
    period: '2017 - 2019',
    description: 'Designed and implemented database solutions while contributing to full-stack development.'
  }
];

export default function WorkExperience(): JSX.Element {
  const { colorMode } = useColorMode();
  
  return (
    <section className={`${styles.section} ${colorMode === 'dark' ? styles.sectionDark : styles.sectionLight}`}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>My Work Experience</h2>
        <p className={styles.sectionDescription}>
          A journey through my professional career and the skills I've developed along the way.
        </p>
      </div>
      
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
            <div className={`${styles.timelineContent} ${colorMode === 'dark' ? styles.cardDark : styles.cardLight}`}>
              <div className={styles.timelineDot}></div>
              <h3 className={styles.experienceTitle}>{exp.title}</h3>
              <div className={styles.experienceMetadata}>
                <span className={styles.companyName}>{exp.company}</span>
                <span className={styles.metadataSeparator}>•</span>
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