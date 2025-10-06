import React from 'react'
import styles from './AboutEducation.module.scss'

function AboutEducation() {
  return (
    <div className={styles.AboutEducation}>
        <h3>Education:</h3>
        <div className={styles.EducationContainer}>
            <div className={styles.Education}>
              <img src="./assets/college-logo-1.png" alt="college-logo" />
              <h2>Masters of Computer Applications, Artificial Intelligence & Machine Learning</h2>
              <h3>Chandigarh University, Mohali</h3>
              <p>Jul 2021 - Aug 2023</p>
            </div>
            <div className={styles.Education}>
              <img src="./assets/college-logo-2.png" alt="college-logo" />
              <h2>Bachelors of Computer Applications</h2>
              <h3>Virendra Swarup Insitude of Computer Studies, Kanpur</h3>
              <p>Jul 2018 - Apr 2021</p>
            </div>
        </div>
    </div>
  )
}

export default AboutEducation