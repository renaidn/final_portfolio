import React, { useEffect, useRef } from "react";
import styles from "../styles/gradient.module.css";

const GradientBackground = ({ children }) => {
  const interactiveRef = useRef(null);

  useEffect(() => {
    const interBubble = interactiveRef.current;
    let curX = 0,
      curY = 0,
      tgX = 0,
      tgY = 0;

    const move = () => {
      if (!interBubble) return;
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(move);
    };

    const handleMouseMove = (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.gradientBg}>
      {/* All your gradient divs like .g1, .g2, etc., with their refs and styles */}
      <div className={styles.g1} />
      <div className={styles.g2} />
      <div className={styles.g3} />
      <div className={styles.g4} />
      <div className={styles.g5} />
      <div className={styles.interactive} ref={interactiveRef} />
      {children}
    </div>
  );
};

export default GradientBackground;
