import React from "react";
import styles from "../styles/card.module.css";

const Card = ({ title, subtitle, image, gridColumn, gridRow }) => {
    return (
      <div
        className={styles.card}
        style={{
          gridColumn: gridColumn || "span 1",
          gridRow: gridRow || "span 1",
        }}
      >
        <div
          className={styles.cardImage}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className={styles.cardContent}>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

export default Card;
