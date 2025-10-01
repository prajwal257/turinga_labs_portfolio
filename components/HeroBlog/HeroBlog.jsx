import React from 'react'
import styles from "./HeroBlog.module.scss"
import Link from 'next/link'

function HeroBlog({index, title, description, link, date, readTime}) {
  return (
    <Link href={`/blogs/${index}`} className={styles.HeroBlog}>
        <div className="BlogThumbnail">
            <img src={`assets/logo-${index+1}.jpeg`} alt={title} />
        </div>
        <div className="BlogInner">
            <h5>{title}</h5>
            <h6>{description}</h6>
            {/* <p>{link}</p> */}
            <p>{date} | {readTime}</p>
        </div>
    </Link>
  )
}

export default HeroBlog