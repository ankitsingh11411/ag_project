import React from 'react';
import styles from './sidebar.module.css';

const Sidebar = ({ isVisible }) => {
  return (
    <div className={`${styles.sidebar} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.navbuttons}>
        <button>Profile</button>
        <button>Settings</button>
        <button>Home</button>
      </div>
      <div className={styles.aboutus}>
        <button>About Us</button>
      </div>
    </div>
  );
};

export default Sidebar;
