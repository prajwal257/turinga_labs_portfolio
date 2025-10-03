import React from 'react'
import styles from './Hersection.module.scss';
import Link from 'next/link';

function HeroSection() {
  return (
    <div className={styles.HeroSection}>
        <p>
            I craft systems that think, <br />
            learn, and accelerate workflows.
        </p>
        <h1>Bridging
            <span><br />Artificial Intelligence</span> 
            <span><br />& Automation.</span>
        </h1>
        <button className={styles.CTAButton}>
          <img src="/assets/ibm-logo.png" alt="Linkedin image" />
          <h4>Authors Name</h4>
          <Link href="linkedin.com" className={styles.Linkedin}>Linkedin</Link>
        </button>
    </div>
  )
}

export default HeroSection