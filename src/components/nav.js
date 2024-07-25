"use client";

// components/Menu.js
import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "../styles/nav.module.css"; // Import the CSS module
import HackerEffect from "./hackerEffect";

const Nav = ({ isProjectPage, isAboutPage }) => {
  const getLeftMenuItems = () => {
    if (isProjectPage) {
      return (
        <Link href="/">
          <div className={styles.menuItem}>
            <img src="/icons/bi_arrow-left.svg" alt="Back to Index" />
            {/* <span className="hacker-effect">Back to Index</span> */}
            <HackerEffect text="Back" />
          </div>
        </Link>
      );
    } else {
      return (
        <>
          <div className={styles.menuItem}>
            <Link href="/">
              <HackerEffect text="Adina Maratkyzy" />
            </Link>
          </div>
        </>
      );
    }
  };

  const getCenterMenuItems = () => {
    if (isAboutPage) {
      return <></>;
    } else {
      return (
        <>
          <div className={styles.menuItem}>
            <span className="hacker-effect">
              I am a product designer currently based in the UAE. My work spans
              across a number of fields, including UX/UI design, browser-based
              game development, graphic design, branding, and marketing.{" "}
            </span>
          </div>
        </>
      );
    }
  };

  const getRightMenuItems = () => {
    if (isAboutPage) {
      return (
        <>
          <div className={styles.menuItem}>
            <Link href="/about">
              <HackerEffect text="About" />
              <img src="/icons/bi_arrow-right.svg" alt="arrow" />
            </Link>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={styles.menuItem}>
            <Link href="https://drive.google.com/file/d/1ODBw1CXIABjKpHb79a9UNgAEIk79dcmN/view?usp=sharing">
              <HackerEffect text="Resume" />
            </Link>

            <span className={styles.comma}>,</span>

            <Link href="mailto:adina.renaidn@gmail.com">
              <HackerEffect text="Email" />
            </Link>
          </div>
          <div className={styles.menuItem}>
            <Link href="/about">
              <HackerEffect text={"About"} />
              <img src="/icons/bi_arrow-right.svg" alt="arrow" />
            </Link>
          </div>
        </>
      );
    }
  };

  return (
    <div
      className={`${styles.menu} ${isProjectPage ? styles.fixed : ""} margin`}
    >
      <div className={`${styles.submenu} ${styles.menuLeft}`}>
        {getLeftMenuItems()}
      </div>
      <div className={`${styles.submenu} ${styles.menuCenter}`}>
        {getCenterMenuItems()}
      </div>
      <div className={`${styles.submenu} ${styles.menuRight}`}>
        {getRightMenuItems()}
      </div>
    </div>
  );
};

export default Nav;
