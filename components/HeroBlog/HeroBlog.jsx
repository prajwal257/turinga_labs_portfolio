import React from 'react'
import styles from "./HeroBlog.module.scss"

function HeroBlog({index, title, description, link, date, readTime}) {
  return (
    <div className={styles.HeroBlog}>
        <div className="BlogThumbnail">
            <img src={`turinga_labs_portfolio/assets/logo-${index+1}.jpeg`} alt={title} />
        </div>
        <div className="BlogInner">
            <h5>{title}</h5>
            <h6>{description}</h6>
            {/* <p>{link}</p> */}
            <p>{date} | {readTime}</p>
        </div>
    </div>
  )
}

export default HeroBlog