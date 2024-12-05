"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "../styles/nav.module.css";

const Nav = ({ isProjectPage, isAboutPage, isPlaygroundPage }) => {
  const [isCenterVisible, setIsCenterVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide if scrolled down more than 60px, show if at the very top
      setIsCenterVisible(window.scrollY <= 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLeftMenuItems = () => {
    if (isProjectPage) {
      return (
        <div className={styles.menuItem}>
        <Link href="/">
            <img src="/icons/bi_arrow-left.svg" alt="Back to Index" />
            <span>Back to Index</span>
          </Link>
        </div>
      );
    } else {
      return (
        <div className={styles.menuItem}>
          <Link href="/">
            <span>Adina Maratkyzy</span>
          </Link>
        </div>
      );
    }
  };

  const getCenterMenuItems = () => {
    if (!isCenterVisible) return null; // Hide the center section when scrolled down
    if (isAboutPage) {
      return <></>;
    } else if (isPlaygroundPage) {
      return (
        <div className={styles.menuItem}>
          <span>
            Playground is a home for my experiments, past projects, and side quests - featuring 3D creations, soundscapes, games, sculptures, drawings, and more. Dive in and explore my creative mix!
          </span>
        </div>
      );
    } else {
      return (
        <div className={styles.menuItem}>
          <span className="hacker-effect">
            I am a product designer currently based in the UAE. My work spans across a number of fields, including UX/UI design, browser-based game development, graphic design, branding, and marketing.
          </span>
        </div>
      );
    }
  };

  const getRightMenuItems = () => {
        
  };

  return (
    <div className={`${styles.menu} ${isProjectPage ? styles.fixed : ""} margin`}>
      <div className={`${styles.submenu} ${styles.menuLeft}`}>
        {getLeftMenuItems()}
      </div>
      <div className={`${styles.submenu} ${styles.menuCenter}`}>
        {getCenterMenuItems()}
      </div>
      <div className={`${styles.submenu} ${styles.menuRight}`}>
        <div className={styles.menuItem}>
          <Link href="https://drive.google.com/file/d/1ODBw1CXIABjKpHb79a9UNgAEIk79dcmN/view?usp=sharing" target="_blank">
            <span>Read CV</span>
          </Link>
          <Link href="mailto:adina.renaidn@gmail.com" target="_blank">
            <span>Email</span>
          </Link>
          {/* <Link href="/playground">
            <span>Playground</span>
            <img src="/icons/bi_arrow-right.svg" alt="arrow" />
          </Link> */}
          <Link href="/about">
            <span>About</span>
            <img src="/icons/bi_arrow-right.svg" alt="arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;