import React, { useEffect, useState } from 'react';
import styles from './login.module.css';
import Navbar from '../../components/navbar/navbar.jsx';

const images = [
  '/zx101.png',
  '/zx102.png',
  '/fireblade1.png',
  '/group1.png',
  '/group2.png',
  '/group3.png',
  '/group4.png',
];

const Login = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false);
      }, 500);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.fade} ${isFading ? styles.visible : ''}`}
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      />
      <Navbar />
      <div className={styles.loginForm}>
        <h1>Login</h1>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className={styles.loginButton}>
            Log In
          </button>
        </form>
        <p className={styles.notRegisteredText}>Not registered yet?</p>
        <button
          className={styles.registerButton}
          onClick={() => (window.location.href = '/register')}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Login;
