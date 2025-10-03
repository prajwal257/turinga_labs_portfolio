import React from 'react'
import styles from './HeroBusinessImpact.module.scss'

function HeroBusinessImpact() {
  const Achievements = [
    {
      "title": "Business Hours Saved",
      "value": "6500+"
    },
    {
      "title": "Business Piplines Automated",
      "value": "15"
    },
    {
      "title": "New clients signed",
      "value": "4"
    },
  ]
  return (
    <div className={styles.HeroBusinessImpact}>
      <h3>Business Impacts:</h3>
      <div className={styles.AchievementsContainer}>
        {Achievements.map((Achievement, index)=> (
          <div key={index} className={styles.Achievement}>
            <h3>{Achievement.value}</h3>
            <h4>{Achievement.title}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeroBusinessImpact