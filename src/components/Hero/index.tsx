import React, { JSX } from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Hero(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          I'm <span className={styles.highlight}>@Phatsss</span>,<br />
          Front-End Developer
        </h1>
        <p className={styles.heroDescription}>
          A passionate developer who wants to make work look even more amazing! Specializing in creating beautiful, functional, and user-friendly websites.
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.primaryButton}>
            Portfolio
          </button>
          <button className={styles.secondaryButton}>
            Contact Me
          </button>
        </div>
      </div>
      <div className={styles.heroImageContainer}>
        <div className={styles.avatarContainer}>
          {/* You can replace this with a 3D avatar or image */}
          <img 
            src="/img/phatsss-logo.png" 
            alt="Developer Avatar" 
            className={styles.avatar}
          />
        </div>
      </div>
    </section>
  );
}