import React, { JSX } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './Home.module.css';
import Hero from '../components/Hero';
import WorkExperience from "../components/WorkExperience";
import SideProjects from "../components/SideProjects";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
// import Contact from "../components/Contact";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Full Stack Developer Portfolio"
    >
      <main className={styles.container}>
        <Hero />
        <WorkExperience />
        <Services />
        <Portfolio />
        <SideProjects />
        {/* <Contact /> */}
      </main>
    </Layout>
  );
}