import React, { JSX } from 'react';
import styles from "./styles.module.css";
import CardPreview from './CardPreview';

export default function Hero(): JSX.Element {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          I'm <span className={styles.highlight}>@Phatsss</span>,<br />
          Software Developer
        </h1>
        <p className={styles.heroDescription}>
          A passionate developer who wants to make work look even more amazing!
          Specializing in creating beautiful, functional, and user-friendly
          websites.
        </p>
        {/* <div className={styles.buttonContainer}>
          <button className={styles.primaryButton}>
            Portfolio
          </button>
          <button className={styles.secondaryButton}>
            Contact Me
          </button>
        </div> */}
      </div>
      <div className={styles.heroImageContainer}>
        <CardPreview>
          {/* <div className={styles.avatarContainer}>
            <img
              src="/img/phatsss-logo.svg"
              alt="Developer Avatar"
              className={styles.avatar}
            />
          </div> */}
          <div className={styles.container}>
            <div className={styles.canvas}>
              {[...Array(25)].map((_, i) => (
                <div
                  key={i}
                  className={`${styles.tracker} ${styles[`tr-${i + 1}`]}`}
                />
              ))}
            </div>

            <div id="card" className={styles.noselect}>
              <div className={styles.content}>
                {/* Square-rounded glowing Avatar */}
                <div className={styles.avatarWrapper}>
                  <img
                    src="./img/phatsss-logo.svg"
                    alt="Developer Avatar"
                    className={styles.avatar}
                  />
                </div>
              </div>
            </div>
          </div>
        </CardPreview>
      </div>
    </section>
  );
}