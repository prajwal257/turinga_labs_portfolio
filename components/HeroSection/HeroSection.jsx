import React from 'react'
import styles from './Hersection.module.scss';

function HeroSection() {
  return (
    <div className={styles.HeroSection}>
        <h1>Bridging
            <br />Artificial Intelligence 
            <br />& Automation.
        </h1>
        <p>
            I craft systems that think, <br />
            learn, and accelerate workflows.
        </p>
        {/* <div className={styles.background}>
            <div className={styles.gradient}></div>
        </div> */}
    </div>
  )
}

export default HeroSection