"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Nav from "../components/nav";
import ProjectItem from "../components/projectItem";
import projectsData from "./projectsData";
import Footer from "../components/footer";
import Head from "next/head";
import { useState } from "react";
import Tooltip from "../components/tooltip";
import GradientBackground from "../components/gradientBg";

// import Tooltip from "../components/tooltip.client";

export default function Home() {
  const [tooltip, setTooltip] = useState({
    content: "",
    visible: false,
    position: { x: 0, y: 0 },
  });

  const showTooltip = (content, position) => {
    setTooltip({ content, visible: true, position });
  };

  const hideTooltip = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  return (
    <>
      <Head>
        <title>Adina Maratkyzy</title>
        <script src="/scripts.js"></script>
      </Head>
      {/* <GradientBackground> */}
      <Nav isProjectPage={false} isAboutPage={false} />
      {/* <div className={`${styles.hero} margin`}>
          <img src="/images/AdinaMaratkyzy.svg" alt="Hero" />
          <h2 id={styles.heroTagline}>
            She is doing something somewhere for whatever the reason.
          </h2>
        </div> */}
      {/* <div className={styles.projectsHeading}>
        <span>Featured Projects</span>
      </div> */}
      {/* </GradientBackground> */}
      <div className={styles.projects}>
        {projectsData.map((project, index) => (
          <ProjectItem
            key={project.id}
            project={project}
            showTooltip={showTooltip}
            hideTooltip={hideTooltip}
            process={index >= 2}
          />
        ))}
      </div>
      {/* <div className={styles.playground}>
        <Link href="/playground" className={styles.animatedArrow}>
          <span className={`${styles.theArrow} ${styles.left}`}>
            <span className={styles.shaft}></span>
          </span>
          <span className={styles.main}>
            <span className={styles.text}>Playground</span>
            <span className={`${styles.theArrow} ${styles.right}`}>
            <span className={styles.shaft}></span>
          </span>
          </span>
        </Link>
      </div> */}
      <Footer />
      <Tooltip
        content={tooltip.content}
        position={tooltip.position}
        visible={tooltip.visible}
      />
    </>
  );
}
