import React, { useEffect, useState } from 'react';
import styles from './register.module.css';
import Navbar from '../../components/navbar/navbar.jsx';

const images = [
  '/triumph1.png',
  '/triumph2.png',
  '/s1k1.png',
  '/s1k2.png',
  '/s1k3.png',
  '/ducati1.png',
  '/ducati2.png',
  '/rsv41.png',
];

const Register = () => {
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
      <div className={styles.navcontainer}>
        <Navbar />
      </div>
      <div className={styles.registerForm}>
        <h1>Register</h1>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="fullName">Full Name:</label>
            <input type="text" id="fullName" name="fullName" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
            />
          </div>
          <button type="submit" className={styles.registerButton}>
            Sign Up
          </button>
        </form>
        <p className={styles.alreadyRegisteredText}>Already registered?</p>
        <button
          className={styles.loginButton}
          onClick={() => (window.location.href = '/')}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;
