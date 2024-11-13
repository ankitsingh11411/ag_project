import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoCont}>
        <img src="/lambo.png" alt="Autoglimpse Logo" className={styles.logo} />
      </div>

      <h1 className={styles.navbarTitle}>Autoglimpse Arena</h1>
    </nav>
  );
};

export default Navbar;
