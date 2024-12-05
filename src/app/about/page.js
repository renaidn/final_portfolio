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
import Link from "next/link";
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
    <section className={styles.aboutSection}>
      <Head>
        <title>Adina Maratkyzy</title>
        <script src="/scripts.js"></script>
      </Head>
      <GridBackground />
      <Nav isProjectPage={false} isAboutPage={true} />
      <div className="emptySpace"></div>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <img
            src="/images/IMG_1854.JPG"
            alt="headshot"
            className={styles.headshot}
          />
          <div className={styles.contactContainer} id={styles.contacts}>
            <Link href="https://www.instagram.com/adina.maratkyzy/" target="_blank" className={styles.link}>
              <span>adina.renaidn@gmail.com</span>
              <img src="/icons/arrow-link.svg" alt="cooking" />
            </Link>
            <Link href="https://drive.google.com/file/d/1ODBw1CXIABjKpHb79a9UNgAEIk79dcmN/view?usp=sharing" target="_blank" className={styles.link}>
              <span>CV</span>
              <img src="/icons/arrow-link.svg" alt="cooking" />
            </Link>
            <Link href="https://www.linkedin.com/in/adina-maratkyzy-0b6b8b1a5/" target="_blank" className={styles.link}>
              <span>Linkedin</span>
              <img src="/icons/arrow-link.svg" alt="cooking" />
            </Link>
            <Link href="https://t.me/adina_maratkyzy" target="_blank" className={styles.link}>
              <span>Telegram</span>
              <img src="/icons/arrow-link.svg" alt="cooking" />
            </Link>
          </div>
        </div>
        <div className={`${styles.gridItem} ${styles.greeting}`}>
          <div className={styles.container}>
            <span className={styles.greetingText}>Hello!</span>
            <p>
              I'm a UAE-based product designer specializing in UX/UI, web
              experiences, and graphic design.
            </p>
            <p>
              I’ve developed gamified platforms for research, crafted
              user-centered designs for websites and apps, led social media
              campaigns, and produced engaging visual content for digital
              platforms, always with a focus on improving user experience and
              engagement.
            </p>
            <p>
              I'm currently seeking opportunities to craft practical designs that
              enhance daily interactions!
            </p>
            <span className={styles.greetingText}>
            Want to get to know me a bit better? Here are some random facts!            </span>
          </div>
        </div>
        <div className={`${styles.gridItem} ${styles.gridItemEmpty}`} id={styles.empty1}>
          
        </div>
        {/* <div className={styles.gridItem} id={styles.contacts}>
          <Link href="https://www.instagram.com/adina.maratkyzy/" target="_blank" className={styles.link}>
            <span>adina.renaidn@gmail.com</span>
            <img src="/icons/arrow-link.svg" alt="cooking" />
          </Link>
          <Link href="https://drive.google.com/file/d/1ODBw1CXIABjKpHb79a9UNgAEIk79dcmN/view?usp=sharing" target="_blank" className={styles.link}>
            <span>CV</span>
            <img src="/icons/arrow-link.svg" alt="cooking" />
          </Link>
          <Link href="https://www.linkedin.com/in/adina-maratkyzy-0b6b8b1a5/" target="_blank" className={styles.link}>
            <span>Linkedin</span>
            <img src="/icons/arrow-link.svg" alt="cooking" />
          </Link>
          <Link href="https://t.me/adina_maratkyzy" target="_blank" className={styles.link}>
            <span>Telegram</span>
            <img src="/icons/arrow-link.svg" alt="cooking" />
          </Link>
        </div> */}
        <div className={`${styles.gridItem} ${styles.gridItemEmpty}`} id={styles.empty2}>
          
          </div>
        <div className={styles.gridItem}>
          <div className={styles.container}>
            
            <p>In my free time, I enjoy trying out new recipes I find online and sharing them with friends. I love hosting casual get-togethers where everyone can dig into something homemade.</p>
            <p>I also love to read. While I don’t have a single favorite book, <i>The Kite Runner</i>, <i>Master and Margarita</i>, and <i>A Little Life</i> have left the strongest impressions on me. These days, I’m into contemporary fiction and am trying to make it a habit to write reviews on the books I finish.</p>
            <p>When I’m not cooking or reading, my activity of choice is hiking, yoga, or swimming.</p>
            <p>Looking ahead, I have a list of five hobbies I’d love to try (and hopefully pick up) before I turn 25: surfing, sewing, playing the violin, archery, and dancing.</p>
            <p>I’m always up for a good conversation, so feel free to reach out!</p>
          </div>
        </div>
        <div className={`${styles.gridItem} ${styles.gridItemEmpty}`} id={styles.empty3}>
          
          </div>
        <div className={styles.gridItem}>
          <img src="/images/recipes/hummus.png" alt="hummus" id={styles.cookingImg}/>
          <Link href="/cookbook" className={styles.link} id={styles.cookbookLink}>
            <span>Checkout my online cookbook</span>
            <img src="/icons/arrow-link.svg" alt="cooking" />
          </Link>
        </div>
        {/* <div className={styles.column}>
          <div className={styles.container}>
            <div className={styles.heading + " " + styles.education}>
              Education
            </div>
            <AboutItem
              title="Education"
              hasColumns={true}
              organization="New York University Abu Dhabi"
              timeframe="2020 - 2024"
              position="Bachelor of Arts in Interactive Media"
              text="Minors in Psychology and Design"
            />
          </div>
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
          <div className={styles.container}>
            <div className={styles.heading}>Skills</div>
            <div className={styles.skills}>
              <div className={styles.skillsCategory}>Prototyping</div>
              <div className={styles.skillsList}>
                <span>Figma</span>
                <span>Adobe XD</span>
              </div>
            </div>
            <div className={styles.skills}>
              <div className={styles.skillsCategory}>Graphic Design</div>
              <div className={styles.skillsList}>
                <span>Photoshop</span>
                <span>Illustrator</span>
                <span>After Effects</span>
              </div>
            </div>
            <div className={styles.skills}>
              <div className={styles.skillsCategory}>Frontend</div>
              <div className={styles.skillsList}>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Next.js</span>
                <span>p5.js</span>
              </div>
            </div>
            <div className={styles.skills}>
              <div className={styles.skillsCategory}>Multimedia</div>
              <div className={styles.skillsList}>
                <span>Premiere Pro</span>
                <span>Pro Tools</span>
                <span>Audacity</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <Tooltip
        content={tooltip.content}
        position={tooltip.position}
        visible={tooltip.visible}
      />
    </section>
  );
}
