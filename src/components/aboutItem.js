import styles from "../styles/aboutItem.module.css";

const AboutItem = ({
  id,
  title,
  hasColumns,
  text,
  organization,
  timeframe,
  position,
}) => {
  const renderColumns = () => {
    if (hasColumns && title === "Experience") {
      return (
        <>
          <div className={styles.container}>
            
            <div className={styles.column}>
    
              <span className={styles.timeframe}>{timeframe}</span>
            </div>
            <div className={styles.column}>
              <span className={styles.position}>{position}</span>
            <span className={styles.organization}>{organization}</span>
              
              {/* <p className={styles.textGrey}>{text}</p> */}
            </div>
          </div>
        </>
      );
    } else if (hasColumns && title === "Education") {
      return (
        <>
          <div className={styles.container2}>
            <div className={styles.column}>
              <span className={styles.timeframe}>{timeframe}</span>
            </div>
            <div className={styles.column}>
              <span className={styles.organization}>{organization}</span>
              <span className={styles.position}>{position}</span>
              <p className={styles.textGrey}>{text}</p>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <p>{text}</p>
        </>
      );
    }
  };
  return (
    <div className={styles.aboutItem} id={id}>
      {/* <div className={styles.title}>
        <span>{title}</span>
      </div> */}
      {renderColumns()}
    </div>
  );
};

export default AboutItem;
