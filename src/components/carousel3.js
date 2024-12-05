import React from 'react';
import styles from '../styles/carousel3.module.css';

const Carousel3 = ({ slides }) => {
  return (
    <div className={styles.slider}>
        <div className={styles.slideTrack}>
            {slides.map((slide, index) => (
                <div key={slide.url + index} className={styles.slide}>
                    <img src={slide.url} alt={slide.alt} />
                </div>
            ))}
        </div>
    </div>
  );
};

export default Carousel3;
