"use client";

import React from "react";
import styles from "../styles/menu.module.css";
import Link from "next/link";
import Modal from "./modal";
import { useState } from "react";
const Menu = ({ data, section }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null); // Tracks the selected recipe

  const handleOpenModal = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };
  const sectionData = data.find((item) => item.section === section);

  if (!sectionData) return null;

  return (
    <div className={styles.menuSection}>
      <h1 className={styles.menuTitle}>{sectionData.section}</h1>
      <hr className={styles.menuDivider} />
      <div className={styles.menuItems}>
        {sectionData.items.map((item) => (
          <div key={item.id} className={styles.menuItem} onClick={() => handleOpenModal(item)}>
            <div className={styles.menuItemDetails}>
              <h2 className={styles.menuItemName}>{item.name}</h2>
              <p className={styles.menuItemIngredients}>{item.ingredients}</p>
              <Link href="#" className={styles.viewRecipe}>
                View full recipe
                <img src="/icons/arrow-link.svg" alt="arrow" />
              </Link>
            </div>
            <div className={styles.menuItemTime}>{item.totalTime}</div>
          </div>
        ))}
      </div>
      <Modal recipe={selectedRecipe} onClose={handleCloseModal} />
    </div>
  );
};

export default Menu;
