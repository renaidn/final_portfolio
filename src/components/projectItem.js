import React from "react";
import styles from "../styles/projectItem.module.css";
import Carousel from "./carousel"; // Import the Carousel component
import { useRouter } from "next/navigation";

const ProjectItem = ({ project, showTooltip, hideTooltip, process }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${project.id}`);
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
          <span className={styles.projectYear}>{project.year}</span>
          <span className={`${styles.projectHeading} ${styles.hackerEffect}`}>
            {project.title}
          </span>
        </div>
        <div className={styles.projectDescription}>
          <span>{project.description}</span>
        </div>
        <div className={styles.projectTags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
