"use client";
import Nav from "@/components/nav";
import PlaygroundItem from "@/components/playgroundItem";
import styles from "./page.module.css";
import playgroundData from "../playgroundData";
import Footer from "@/components/footer";
import Carousel3 from "@/components/carousel3";

export default function Playground() {
  return (
    <>
      <Nav isProjectPage={false} isAboutPage={false} isPlaygroundPage={true} />
      <div className="emptySpace"></div>
      <div className={styles.playgroundContainer}>
        {playgroundData.map((project, index) => (
          <PlaygroundItem
            key={project.id}
            project={project}
            process={index >= 2}
          />
        ))}
      </div>
    </>
  );
}
