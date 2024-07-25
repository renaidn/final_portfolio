import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/hackerEffect.module.css"; // Create a CSS module for styles

const letters = "_";

const HackerEffect = ({ text }) => {
  const textRef = useRef(null);
  // const [done, setDone] = useState(false);

  useEffect(() => {
    const target = textRef.current;
    let interval = null;
    let iteration = 0;
    let done = false;

    const animate = () => {
      clearInterval(interval);

      if (done) return;
      interval = setInterval(() => {
        target.innerHTML = text
          .split("")
          .map((correctLetter, index) => {
            if (index < iteration) {
              return `<span ">${correctLetter}</span>`;
            } else if (index === iteration) {
              const randomLetter =
                letters[Math.floor(Math.random() * letters.length)];
              return `<span >${randomLetter}</span>`;
            } else {
              return `<span style="color: transparent;">${correctLetter}</span>`;
            }
          })
          .join("");

        if (iteration > text.length) {
          clearInterval(interval);
          // done = false;
        } else {
          iteration++;
        }
      }, 250 / text.length);
      if (iteration > text.length) {
        clearInterval(interval);
        // done = false;
        done = true;
      }
      // setDone(true);
    };

    target.addEventListener("mouseover", animate);
    target.addEventListener("mouseleave", () => {
      clearInterval(interval);
      iteration = 0;
      // setDone(false);
      done = false;
      target.innerHTML = text;
    });

    return () => {
      clearInterval(interval);
      target.removeEventListener("mouseover", animate);
    };
  }, [textRef, text]);

  return (
    <span
      ref={textRef}
      className={styles.hackerEffect}
      style={{ minWidth: text == "About" ? "3rem" : "0" }}
    >
      {text}
    </span>
  );
};

export default HackerEffect;
