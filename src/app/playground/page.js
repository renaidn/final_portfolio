"use client";
import Nav from "@/components/nav";
import PlaygroundItem from "@/components/playgroundItem";
import styles from "./page.module.css";
import playgroundData from "../playgroundData";
import Footer from "@/components/footer";
import Card from "@/components/card";

export default function Playground() {
  return (
    <>
      <Nav isProjectPage={false} isAboutPage={false} isPlaygroundPage={true} />
      <div className="emptySpace"></div>
      <div className={styles.gallery}>
      {playgroundData.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          image={item.image}
          gridColumn={item.gridColumn}
          gridRow={item.gridRow}
        />
      ))}
      </div>
    </>
  );
}
