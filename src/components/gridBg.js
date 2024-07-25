"use client";

import React, { useEffect, useState } from 'react';
import styles from '../styles/gridBg.module.css';

const GridBackground = () => {
    const [isWide, setIsWide] = useState(false);

    useEffect(() => {
        const checkWidth = () => {
            const screenWidth = window.innerWidth;
            const gridWidth = 75 * 12;
            setIsWide(screenWidth > gridWidth);
        };

        checkWidth(); // Check on mount
        window.addEventListener('resize', checkWidth); // Check on resize

        return () => {
            window.removeEventListener('resize', checkWidth);
        };
    }, []);

    return (
        <div className={isWide ? styles.gridContainer : styles.fullWidthBackground} />
    );
};

export default GridBackground;
