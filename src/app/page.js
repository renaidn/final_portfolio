"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Nav from "../components/nav";
import ProjectItem from "../components/projectItem";
import projectsData from "./projectsData";
import Footer from "../components/footer";
import Head from "next/head";
import { useState, useEffect } from "react";
import Tooltip from "../components/tooltip";
import GradientBackground from "../components/gradientBg";

export default function Home() {
  const [tooltip, setTooltip] = useState({
    content: "",
    visible: false,
    position: { x: 0, y: 0 },
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const showTooltip = (content, position) => {
    if (!isMobile) {
      setTooltip({ content, visible: true, position });
    }
  };

  const hideTooltip = () => {
    if (!isMobile) {
      setTooltip((prev) => ({ ...prev, visible: false }));
    }
  };

  return (
    <>
      <Head>
        <title>Adina Maratkyzy</title>
        <script src="/scripts.js"></script>
      </Head>
      <Nav isProjectPage={false} isAboutPage={false} />
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
      <Footer />
      {!isMobile && (
        <Tooltip
          content={tooltip.content}
          position={tooltip.position}
          visible={tooltip.visible}
        />
      )}
    </>
  );
}
