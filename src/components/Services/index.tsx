import React, { JSX } from 'react';
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: 'Frontend Development',
    description: 'Creating responsive, interactive user interfaces with modern frameworks like React and Vue.',
    icon: '💻'
  },
  {
    title: 'Backend Development',
    description: 'Building robust server-side applications with Node.js, Express, and database integration.',
    icon: '🔧'
  },
  {
    title: 'Database Management',
    description: 'Designing and optimizing database structures for efficient data storage and retrieval.',
    icon: '🗄️'
  }
];

export default function Services(): JSX.Element {
  const { colorMode } = useColorMode();
  
  return (
    <section className={`${styles.section} ${colorMode === 'dark' ? styles.sectionDark : styles.sectionLight}`}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>My Services</h2>
        <p className={styles.sectionDescription}>
          Specialized skills and services I offer to help bring your digital projects to life.
        </p>
      </div>
      
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={`${styles.serviceCard} ${colorMode === 'dark' ? styles.cardDark : styles.cardLight}`}>
            <div className={styles.iconContainer}>
              <span className={styles.icon}>{service.icon}</span>
            </div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}