"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Nav from "../../components/nav";
import ProjectItem from "../../components/projectItem";
import projectsData from "./../projectsData";
import Footer from "../../components/footer";
import Head from "next/head";
import { useState } from "react";
import Tooltip from "../../components/tooltip";
import GradientBackground from "../../components/gradientBg";
import AboutItem from "../../components/aboutItem";
import experienceData from "./../experienceData";
import GridBackground from "../../components/gridBg";

// import Tooltip from "../components/tooltip.client";

export default function Home() {
  const [tooltip, setTooltip] = useState({
    content: "",
    visible: false,
    position: { x: 0, y: 0 },
  });

  const showTooltip = (content, position) => {
    setTooltip({ content, visible: true, position });
  };

  const hideTooltip = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  return (
    <>
      <Head>
        <title>Adina Maratkyzy</title>
        <script src="/scripts.js"></script>
      </Head>
      <GridBackground />
      <Nav isProjectPage={false} isAboutPage={true} />
      <div className={styles.about}>
        <div className={styles.column3}>
          <img
            src="/images/headshot2.jpg"
            alt="headshot"
            width={300}
            height={300}
            className={styles.headshot}
          />
          <div
            className={styles.contact}
            onClick={() =>
              window.open("mailto:adina.renaidn@gmail.com", "_blank")
            }
          >
            <span>adina.renaidn@gmail.com</span>
            <img src="/icons/arrow-link.svg" alt="email" />
          </div>
          <div
            className={styles.contact}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1ODBw1CXIABjKpHb79a9UNgAEIk79dcmN/view?usp=sharing",
                "_blank"
              )
            }
          >
            <span>CV</span>
            <img src="/icons/arrow-link.svg" alt="cv" />
          </div>
          <div
            className={styles.contact}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/adina-maratkyzy-0b6b8b1a5/",
                "_blank"
              )
            }
          >
            <span>Linkedin</span>
            <img src="/icons/arrow-link.svg" alt="linkedin" />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.container}>
            <div className={styles.heading}>About</div>
            <p>
              I'm a product designer currently based in the UAE, specializing in
              UX/UI design, browser-based game development, graphic design, and
              branding.
              </p>
              <p>
              Recently, I collaborated with a university psychology lab to
              design and gamify an online platform for psychology experiments.
              This project involved enhancing user interaction and data
              collection through engaging game mechanics, creating a more
              interactive and effective research tool.
              </p>
              <p>
              Currently, I am interested in:
              <ul className={styles.list}>
                <li>
                Crafting practical designs that improve daily interactions.
                </li>
                <li>
                Exploring gamification strategies to increase user involvement and loyalty.
                </li>
              </ul>
            </p>
          </div>
          <div className={styles.container}>
            <div className={styles.heading}>Education</div>
            <AboutItem
              title="Education"
              hasColumns={true}
              organization="New York University Abu Dhabi"
              timeframe="2020 - 2024"
              position="Bachelor of Arts in Interactive Media"
              text="Minors in Psychology and Design"
            />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.container}>
            <div className={styles.heading}>Experience</div>
            {experienceData.map((experience, ind) => (
              <AboutItem
                key={experience.id}
                title="Experience"
                hasColumns={true}
                organization={experience.organization}
                timeframe={experience.timeframe}
                position={experience.position}
                text={experience.text}
              />
            ))}
          </div>
        </div>
      </div>

      <Tooltip
        content={tooltip.content}
        position={tooltip.position}
        visible={tooltip.visible}
      />
    </>
  );
}
