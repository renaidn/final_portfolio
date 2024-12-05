import React, { useState, useEffect } from "react";
import styles from "../styles/projectItem.module.css";
import Carousel from "./carousel"; // Import the Carousel component
import { useRouter } from "next/navigation";

const ProjectItem = ({ project, showTooltip, hideTooltip, process }) => {
  const router = useRouter();
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

  const handleClick = () => {
    if (!isMobile) {
      router.push(`/${project.id}`);
    }
  };

  return (
    <div
      className={`${styles.project} ${styles.tooltipTarget}`}
      id={`project-${project.id}`}
      data-tooltip={
        process ? `case study in process` : `view case study: ${project.title}`
      }
      onMouseEnter={(e) =>
        showTooltip(
          process
            ? `case study in process`
            : `view case study: ${project.title}`,
          {
            x: e.clientX,
            y: e.clientY,
          }
        )
      }
      onMouseLeave={hideTooltip}
      onMouseMove={(e) =>
        showTooltip(
          process
            ? `case study in process`
            : `view case study: ${project.title}`,
          {
            x: e.clientX,
            y: e.clientY,
          }
        )
      }
      onClick={process ? null : handleClick}
    >
      <Carousel slides={project.slides} />
      <div className={styles.thumbnail}>
        <div className={styles.projectTitle}>
          <span className={`${styles.projectHeading} ${styles.hackerEffect}`}>
            {project.title}
          </span>
          <div className={styles.projectYear}>
            <span>{project.year}</span>
          </div>
        </div>
        <div className={styles.containerCenter}>
          <div className={styles.projectDescription}>
            <span>{project.description}</span>
          </div>
        </div>          
        <div className={styles.projectTags}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        <div
          className={styles.mobileButton}
          onClick={process ? null : () => router.push(`/${project.id}`)}
          data-tooltip={
            process
              ? `case study in process`
              : `view case study: ${project.title}`
          }
        >
          <span>View Case Study</span>
          <img src="/icons/bi_arrow-right.svg" alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
