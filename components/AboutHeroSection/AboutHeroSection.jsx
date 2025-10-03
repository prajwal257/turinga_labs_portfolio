import React from 'react'
import styles from './AboutHeroSection.module.scss'

function AboutHeroSection() {
  return (
    <div className={styles.AboutHeroSection}>
      {/* <h1>About Me.</h1> */}
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illum deleniti, et quibusdam omnis aliquid?</h1>
        <div className={styles.HeroImageContainer}>
          <img src="./assets/HeroImage.jpg" alt="Author Image" />
        </div>
        {/* <div className={styles.background}>
            <div className={styles.gradient}></div>
        </div> */}
    </div>
  )
}

export default AboutHeroSection