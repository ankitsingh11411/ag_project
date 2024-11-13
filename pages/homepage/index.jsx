import Navbar from '../../components/navbar/navbar.jsx';
import Sidebar from '../../components/navbar/sidebar.jsx';
import { useState, useEffect } from 'react';
import styles from './homepage.module.css';

const Homepage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX } = e;
      if (clientX < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.appcontainer}>
      <Sidebar isVisible={isVisible} />
      <Navbar />
    </div>
  );
};

export default Homepage;
