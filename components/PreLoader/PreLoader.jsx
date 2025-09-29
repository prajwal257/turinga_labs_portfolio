import React, { useEffect, useState } from 'react';
import styles from './PreLoader.module.scss';

function PreLoader() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate asset loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulated 3-second load

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.PreLoader} ${isLoading ? styles.open : styles.closed}`}>
      <div className={styles.loader}></div>
      <div className={styles.loader}></div>
      <div className={styles.loader}></div>
      <div className={styles.loader}></div>
    </div>
  );
}

export default PreLoader;
