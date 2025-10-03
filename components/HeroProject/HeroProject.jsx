import React from 'react'
import styles from './HeroProject.module.scss'
import Link from 'next/link'

function HeroProject({title, tech, duration, description, index}) {
  return (
    <div className={styles.HeroProject}>
      <div className={styles.ProjectThumbnailContainer}>
        <img src={`assets/poster-${index+1}.png`} alt={title} />
      </div>
      <div className={styles.HeroProjectContent}>
            <h3>{title}</h3>
            <div className={styles.line2}>
              <h4>
                {/* {tech} */}
                {/* <img src={`assets/tech-icon-${index+1}.png`} alt={tech} /> */}
              </h4>
              <h6>{duration}</h6>
            </div>
            <div className={styles.line2}>
              <h5>{description}</h5>
              <Link href="/Projects" className={styles.ProjectReadMore}>Read More</Link>
            </div>
      </div>
        {/* <div className={styles.HeroProjectContent}>
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
        </div> */}
    </div>
  )
}

export default HeroProject