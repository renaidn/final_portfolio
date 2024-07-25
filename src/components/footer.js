import React from "react";
import Link from "next/link";
import styles from "../styles/footer.module.css";
import style2 from "../styles/nav.module.css";
import HackerEffect from "./hackerEffect";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.subfooter}>
        <Link href="mailto:adina.renaidn@gmail.com" passHref>
          <div className={`${style2.menuItem}`}>
            <HackerEffect text="Email" />
          </div>
        </Link>
        <span>,</span>
        <Link
          href="https://www.linkedin.com/in/adina-maratkyzy-0b6b8b1a5/"
          passHref
        >
          <div className={`${style2.menuItem}`}>
            <HackerEffect text="Linkedin" />
          </div>
        </Link>
        <span>,</span>
        <Link
          href="https://drive.google.com/file/d/1ODBw1CXIABjKpHb79a9UNgAEIk79dcmN/view?usp=sharing"
          passHref
        >
          <div className={`${style2.menuItem}`}>
            <HackerEffect text="Read CV" />
          </div>
        </Link>
        <span>,</span>
        <Link href="https://www.instagram.com/renaidn/" passHref>
          <div className={`${style2.menuItem}`}>
            <HackerEffect text="Instagram" />
          </div>
        </Link>
        <span>,</span>
        <Link href="https://t.me/renaidn" passHref>
          <div className={`${style2.menuItem}`}>
            <HackerEffect text="Telegram" />
          </div>
        </Link>
      </div>
      <div className={styles.subfooter}>
        <p>Designed and developed by Adina Maratkyzy</p>
      </div>
    </div>
  );
};

export default Footer;
