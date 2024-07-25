"use client";

// components/Tooltip.js
import React from "react";
import styles from "../styles/tooltip.module.css";

const Tooltip = ({ content, visible, position }) => {
  const style = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    opacity: visible ? 1 : 0,
    // cursor: "pointer",
    position: "fixed", // Use fixed to position relative to the viewport
    pointerEvents: "none", 

    zIndex: 1000, // Ensure it's above other elements
  };

  return (
    <div className={styles.tooltip} style={style}>
      {content}
    </div>
  );
};

export default Tooltip;
