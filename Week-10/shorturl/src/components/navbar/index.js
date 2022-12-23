import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles['navbar']}>
      <a href='/' className={styles['nabar__brand']}>
        Shorturl
      </a>
      <ul className={styles['navbar__links']}>
        <li>
          <a href='#'>Features</a>
        </li>
        <li>
          <a href='#'>Pricing</a>
        </li>
        <li>
          <a href='#'>Resources</a>
        </li>
        <li>
          <a href='#'>Login</a>
        </li>
        <li>
          <a href='#'>Sign Up</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
