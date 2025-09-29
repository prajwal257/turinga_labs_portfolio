import React from 'react'
import styles from "./HeroBlogs.module.scss"
import HeroBlog from '../HeroBlog/HeroBlog'

function Blogs() {
  const Blogs = [
    {
      "title": "Blog Title",
      "description": "This is some random discription about this blog.",
      "link": "This will be used as the link address.",
      "date": "May 2025",
      "readTime": "2 min"
    },
    {
      "title": "Blog Title",
      "description": "This is some random discription about this blog.",
      "link": "This will be used as the link address.",
      "date": "May 2025",
      "readTime": "2 min"
    }
  ]
  return (
    <div className={styles.HeroBlogs}>
      <h3>Blogs</h3>
      <div className={styles.BlogsContent}>
        {Blogs.map((blog, index) => (
            <HeroBlog key={index} {...blog} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Blogs