import React from "react";
import Link from "next/link";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerTop}>
        <span className={styles.footerTopSpan}>Let's work together</span>
        <Link href="mailto:adina.renaidn@gmail.com" passHref>
          <span>adina.renaidn@gmail.com</span>
        </Link>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.subfooter}>
          <Link href="mailto:adina.renaidn@gmail.com" passHref>
            <span>Email</span>
          </Link>
          <Link href="https://www.linkedin.com/in/adina-maratkyzy-0b6b8b1a5/" passHref target="_blank">
            <span>Linkedin</span>
          </Link>
          <Link href="https://drive.google.com/file/d/1ODBw1CXIABjKpHb79a9UNgAEIk79dcmN/view?usp=sharing" passHref target="_blank">
            <span>Read CV</span>
          </Link>
          <Link href="https://t.me/renaidn" passHref target="_blank">
            <span>Telegram</span>
          </Link>
        </div>
        <div className={styles.subfooter}>
          <Link href="https://github.com/renaidn" passHref target="_blank">
            <span>Designed and developed by Adina Maratkyzy</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
