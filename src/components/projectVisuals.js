import styles from "../styles/projectVisuals.module.css";

const ProjectVisuals = () => {
  return (
    <>
      <div class={styles.container}>
        <div class={styles.containerRow}>
          <div class={styles.rowItem}>
            <div class={styles.heading}>Logo</div>
            <div class={styles.logoContainer}>
              <div class={`${styles.logoItem} ${styles.logoBw}`}>
                <img src="/images/projects/tranzitka/borodach.png" />
              </div>
              <div class={`${styles.logoItem} ${styles.logoColor}`}>
                <img src="/images/projects/tranzitka/borodachzhel2 2.png" />
              </div>
            </div>
          </div>
          <div class={`${styles.rowItem}`}>
            <div class={styles.heading}>Typography</div>
            <img src="/images/projects/tranzitka/font.png" />
          </div>
        </div>
        <div class={styles.subsectionRow}>
          <div class={styles.rowItem}>
            <div class={styles.heading}>Colors</div>
            <div class={styles.colorContainer}>
              <div class={`${styles.colorItem} ${styles.color1}`}></div>
              <div class={`${styles.colorItem} ${styles.color2}`}></div>
              <div class={`${styles.colorItem} ${styles.color3}`}></div>
              <div class={`${styles.colorItem} ${styles.color4}`}></div>
              <div class={`${styles.colorItem} ${styles.color5}`}></div>
            </div>
          </div>
          <div class={`${styles.rowItem}`}>
            <div class={styles.heading}>Icons</div>
            <img src="/images/projects/tranzitka/icons.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectVisuals;
