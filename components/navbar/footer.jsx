import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoCont}>
        <img src="/lambo.png" alt="Autoglimpse Logo" className={styles.logo} />
      </div>

      <div className={styles.iconCont}>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
