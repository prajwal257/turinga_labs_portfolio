import React from 'react'
import styles from './Hersection.module.scss';
import Link from 'next/link';

function HeroSection() {
  return (
    <div className={styles.HeroSection}>
        <p>
            I engineer <span> intelligent agents that streamline operations, freeing teams to focus</span> on what matters.
        </p>
        <h1>
            Bridging
            <span><br />Artificial Intelligence</span> 
            <br />&<span> Automation</span>
            {/* <span className={styles.blinker}>_</span> */}
        </h1>
        <button className={styles.CTAButton}>
          <img src="/assets/LinkArrowIcon.png" alt="Linkedin image" />
          <h4>Prajwal Dwivedi</h4>
          <Link href="linkedin.com" className={styles.Linkedin}>Linkedin</Link>
        </button>
    </div>
  )
}

export default HeroSection