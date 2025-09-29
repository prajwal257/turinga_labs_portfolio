import React from 'react'
import styles from './HeroProject.module.scss'

function HeroProject({title, tech, duration, description, index}) {
  return (
    <div className={styles.HeroProject}>
        <div className={styles.HeroProjectContent}>
            <h4>{tech}</h4>
            <h3>{title}</h3>
            <h5>{description}</h5>
            <h6>{duration}</h6>
        </div>
        <div className={styles.ProjectThumbnails}>
          <div className={styles.ProjectThumbnails1}>
            <img src={`assets/logo-${index+1}.jpeg`} alt={title} />
            <img src={`assets/logo-${index+1}.jpeg`} alt={title} />
          </div>
          <div className={styles.ProjectThumbnails2}>
            <img src={`assets/logo-${index+1}.jpeg`} alt={title} />
            <img src={`assets/logo-${index+1}.jpeg`} alt={title} />
          </div>
        </div>
    </div>
  )
}

export default HeroProject