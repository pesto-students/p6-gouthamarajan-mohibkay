import React from 'react';
import styles from './hero-section.module.css';

const Hero = () => {
  return (
    <header className={styles['hero']}>
      <div>
        <h1 className={styles['hero__heading']}>
          More than just shorter links
        </h1>
        <p className={styles['hero__subheading']}>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
      </div>
      <img src='hero.svg' alt='person working' width='450px' />
    </header>
  );
};

export default Hero;
