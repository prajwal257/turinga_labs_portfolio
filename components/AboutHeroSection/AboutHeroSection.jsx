import React from 'react'
import styles from './AboutHeroSection.module.scss'

function AboutHeroSection() {
  return (
    <div className={styles.AboutHeroSection}>
      <h1>About Me.</h1>
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

export default AboutHeroSection