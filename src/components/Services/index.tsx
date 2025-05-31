import React, { JSX } from 'react';
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common';
import { translate } from "@docusaurus/Translate";

/**
 * Services data array
 * Contains information about professional services offered
 * Each service includes a title, description, and icon
 */
const services = [

  {
    title: 'Web Application Development',
    description: 'Building full-featured web applications with secure authentication, data management, and real-time features. Experience with e-wallet systems, dashboards, and various enterprise applications.',
    icon: '🌐'
  },
  {
    title: 'Front-End Development',
    description: 'Creating responsive, modern, and user-friendly web interfaces using React, Next.js, and other cutting-edge front-end technologies. Specializing in building intuitive UIs with smooth interactions and optimal performance.',
    icon: '💻'
  },
  {
    title: 'Back-End Development',
    description: 'Developing robust server-side applications using Laravel (PHP), Node.js, and database technologies like MySQL and MongoDB. Creating RESTful APIs and implementing business logic for complex applications.',
    icon: '⚙️'
  },
  {
    title: 'WordPress Development',
    description: 'Creating custom WordPress websites with tailored themes and plugins. Optimizing site performance, implementing security measures, and ensuring mobile responsiveness.',
    icon: '📱'
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Building online stores and payment integration systems with secure transaction processing. Experience with crypto payment systems and QR-based payment solutions.',
    icon: '🛒'
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive user interfaces and experiences that balance aesthetics with functionality. Creating wireframes, prototypes, and visual designs that enhance user engagement.',
    icon: '🎨'
  }
];

/**
 * Services Component
 * Displays professional services offered in a grid layout
 * Supports both light and dark mode
 */
export default function Services(): JSX.Element {
  const { colorMode } = useColorMode();
  
  return (
    <section
      className={`${styles.section} ${
        colorMode === "dark" ? styles.sectionDark : styles.sectionLight
      }`}
    >
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          {translate({ id: "service.title" })}
        </h2>
        <p className={styles.sectionDescription}>
          {translate({ id: "service.description" })}
        </p>
      </div>

      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div
            key={index}
            className={`${styles.serviceCard} ${
              colorMode === "dark" ? styles.cardDark : styles.cardLight
            }`}
          >
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