import styles from "../styles/projectBanner.module.css";

const ProjectBanner = ({
  title,
  description,
  projectType,
  category,
  timeline,
  tools,
}) => {
  return (
    <>
      <div className={styles.banner}>
        <h2 className={styles.bannerTitle}>{title}</h2>
        <div className={styles.bannerDescription}>
          <span>{description}</span>
        </div>
        <div className={styles.bannerTags}>
          <span>Project type: {projectType}</span>
          <span>Category: {category}</span>
          <span>Timeline: {timeline}</span>
          <span>Tools: {tools}</span>
        </div>
      </div>
    </>
  );
};

export default ProjectBanner;
