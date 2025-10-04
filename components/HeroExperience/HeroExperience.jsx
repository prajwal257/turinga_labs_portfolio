import React from 'react'
import styles from './HeroExperience.module.scss'

function HeroExperience({firmName, title, time, location, copy, copyLong, skills, index}) {
    return (
        <div className={styles.Experience} id={`Experience-${index+1}`}>
          <div className={styles.ExperienceImageContainer}>
            {/* <img src={`assets/IDCover.png`} className={styles.IDCover} alt="Employer ID Card" /> */}
            <img src={`assets/logo-${index+1}.png`} alt={title} />
          </div>
          <div className={styles.ExperienceContent}>
              <h2>{title}</h2>
              <div className={styles.line2}>
                <h3>{firmName}</h3>
                <p className={styles.time}>{time}</p>
              </div>
              <div className={styles.copyDesc}>
                <p className={styles.copy}>{copy}</p>

                <p className={styles.copyLong}>{copyLong}</p>
              </div>
              {/* <p className={styles.skills}>{skills}</p> */}
            </div>
          {/* <div className={styles.ExperienceInner}>
            <div className={styles.ExperienceContent}>
              <h3>{firmName}</h3>
              <h2>{title}</h2>
              <div className={styles.copyDesc}>
                <p className={styles.copy}>{copy}</p>
                <p className={styles.copyLong}>{copyLong}</p>
              </div>
              <p className={styles.time}>{time}</p>
              <p className={styles.skills}>{skills}</p>
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
          </div> */}
        </div>
    )
}

export default HeroExperience