import React from 'react'
import styles from './HeroExperience.module.scss'

function HeroExperience({firmName, title, time, copy, skills, index}) {
    return (
        <div className={styles.Experience} id={`Experience-${index+1}`}>
          <div className={styles.ExperienceInner}>
            <div className={styles.ExperienceContent}>
              <h3>{firmName}</h3>
              <h2>{title}</h2>
              <p className={styles.copy}>{copy}</p>
              <p className={styles.time}>{time}</p>
              {/* <p className={styles.skills}>{skills}</p> */}
            </div>
            <div className={styles.ExperienceImage}>
              <div className={styles.ExperienceImageLogo}>
                <img src={`assets/logo-${index+1}.jpeg`} alt={title} />
                <img src={`assets/logo-${index+1}.jpeg`} alt={title} />
              </div>
              <div className={styles.ExperienceImageRole}>
                <img src={`assets/logo-${index+1}.jpeg`} alt={title} />
                <img src={`assets/logo-${index+1}.jpeg`} alt={title} />
              </div>
            </div>
          </div>
        </div>
    )
}

export default HeroExperience