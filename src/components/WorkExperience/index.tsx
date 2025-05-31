import React, { JSX } from 'react';
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common';
import { translate } from "@docusaurus/Translate";

/**
 * Work Experience data array
 * Contains professional experience information with job titles, companies, periods, and descriptions
 */
const experiences = [
  {
    title: "Full-Time Front-End Developer",
    company: "Lao IT Dev Co., Ltd.",
    period: "10/2019 – Present",
    description: translate({ id: "workExperience.content1Description" }),
  },
  {
    title: "Outsource Software Developer",
    company: "FreeLance",
    period: "12/2019 – Present",
    description: translate({ id: "workExperience.content4Description" }),
  },
  {
    title: "Part-Time Software Engineer",
    company: "Lao IT Dev Co., Ltd.",
    period: "07/2019 – 10/2019",
    description: translate({ id: "workExperience.content2Description" }),
  },
  {
    title: "Web Development Student",
    company: "National University of Laos (NUOL)",
    period: "10/2016 - 10/2020",
    description: translate({ id: "workExperience.content3Description" }),
  },
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
        <h2 className={styles.sectionTitle}>
          {translate({ id: "workExperience.title" })}
        </h2>
        <p className={styles.sectionDescription}>
          {translate({ id: "workExperience.description" })}
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