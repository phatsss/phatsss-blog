import React, { JSX } from 'react';
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common';

export default function Contact(): JSX.Element {
  const { colorMode } = useColorMode();
  
  return (
    <section className={`${styles.section} ${colorMode === 'dark' ? styles.sectionDark : styles.sectionLight}`}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Contact Me</h2>
        <p className={styles.sectionDescription}>
          Let's have a chat! Feel free to reach out for collaborations or just a friendly hello.
        </p>
      </div>
      
      <div className={styles.formContainer}>
        <form className={`${styles.contactForm} ${colorMode === 'dark' ? styles.formDark : styles.formLight}`}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input 
                type="text" 
                id="name" 
                className={`${styles.input} ${colorMode === 'dark' ? styles.inputDark : styles.inputLight}`} 
                placeholder="Your name"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input 
                type="email" 
                id="email" 
                className={`${styles.input} ${colorMode === 'dark' ? styles.inputDark : styles.inputLight}`} 
                placeholder="Your email"
                required
              />
            </div>
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="subject" className={styles.label}>Subject</label>
            <input 
              type="text" 
              id="subject" 
              className={`${styles.input} ${colorMode === 'dark' ? styles.inputDark : styles.inputLight}`} 
              placeholder="Subject"
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea 
              id="message" 
              rows={5} 
              className={`${styles.textarea} ${colorMode === 'dark' ? styles.inputDark : styles.inputLight}`} 
              placeholder="Your message"
              required
            ></textarea>
          </div>
          
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}