import React from "react";
import styles from "../styles/modal.module.css";

const Modal = ({ recipe, onClose }) => {
  if (!recipe) return null; // Do not render if no recipe is selected

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalControls}>            
            <button className={styles.modalClose} onClick={onClose}>
                <img src="/icons/close.svg" alt="close" />
            </button>
        </div>
        <div className={styles.modalBody} >
            <div className={styles.modalSection} id={styles.bodyLeft}>
                <div className={styles.bodyLeftTop}>
                <div className={`${styles.recipeTitle} ${styles.headerSection}`}>                
                    <h1>{recipe.name}</h1>
                    <span>{recipe.description}</span>
                </div>
                <div className={`${styles.headerSection} ${styles.recipeImage}`}>
                    <img src="/images/IMG_1271.JPG" alt={recipe.name} />
                </div>
            </div>
            <div className={styles.bodyLeftBottom}>
                <div className={styles.modalDirections}>
                    <div className={styles.modalContainer} id={styles.titleContainer}>
                        <div className={styles.modalTitle}>
                        <span>Instructions</span>
                    </div> 
                    </div>

                    <ol>
                        {recipe.directions.map((direction, index) => (
                            <li key={index} >
                                <div className={styles.directionStep}>{direction.step}</div>
                                 <ul>
                                {direction.subSteps.map((subStep, subIndex) => (
                                    <li key={subIndex}>{subStep}</li>
                                ))}
                                </ul>
                            </li>
                          ))}
                    </ol>
                </div>
            </div>
            </div>
            <div className={styles.modalSection} id={styles.bodyRight}>
            <div className={`${styles.ingredientsBox} ${styles.headerSection}`}>
                                <div className={styles.modalContainer} id={styles.titleContainer}>
                                    <span className={styles.modalTitle}>Ingredients</span>          
                                    <span className={styles.modalServings}>Servings: {recipe.servings}</span>
                                </div>
                                <div className={styles.modalContainer}>
                                    {recipe.measurement.map((group, index) => (
                                        <div className={styles.ingredientsContainer} key={index}>
                                            <h4 className={styles.ingredientGroupTitle}>{group.title}</h4>
                                            <ul>
                                            {group.items.map((item, idx) => (
                                                <li className={styles.lineBox} key={idx}>
                                                    <span className={styles.lineBoxLeft}>{item.name}</span>
                                                    <span className={styles.lineBoxRight}>{item.quantity}</span>
                                                </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.modalContainer} id={styles.timeContainer}>
                                    <div className={styles.lineBox}>
                                        <span className={styles.lineBoxLeft}>Prep time </span>
                                        <span className={styles.lineBoxRight}>{recipe.prepTime}</span>
                                    </div>
                                    <div className={styles.lineBox}>
                                        <span className={styles.lineBoxLeft}>Cook time </span>
                                        <span className={styles.lineBoxRight}>{recipe.cookTime}</span>
                                    </div>
                                    <div className={styles.lineBox} id={styles.totalTimeContainer}>
                                        <span className={styles.lineBoxLeft}>Total time </span>
                                        <span className={styles.lineBoxRight} id={styles.totalTime}>{recipe.totalTime}</span>
                                    </div>
                                </div>
            </div>
            </div>    
        </div>
      </div>
    </div>
  );
};

export default Modal;
