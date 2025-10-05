import React from 'react'
import styles from './HeroCertifications.module.scss'
import Link from 'next/link'

function HeroCertifications() {
const Certifications = [
    {
      "title": "Pharmaceuticals Industry Foundations",
      "provider": "Primerli",
      "Date": "Aug 2025"
    },
    {
      "title": "Data Science Foundations",
      "provider": "IBM L&K",
      "Date": "Apr 2025"
    },
    {
      "title": "Data Science Tools",
      "provider": "Cognitive Class",
      "Date": "Apr 2025"
    },
    {
      "title": "Machine Learning in Production",
      "provider": "Deeplearning.AI",
      "Date": "Jan 2025"
    },
    {
      "title": "Data Science Methodlogy",
      "provider": "Cognitive Class",
      "Date": "Apr 2025"
    }
  ]
  return (
    <div className={styles.HeroCertifications}>
      <h3>Certificates:</h3>
      <div className={styles.CertificatesContainer}>
        {Certifications.map((Certificate, index)=> (
          <Link href="https://www.linkedin.com/in/prajwaldwivedi257/details/certifications/" key={index} className={styles.Certificate}>
            <img src={`assets/certificate-logo-${index+1}.png`} alt={Certificate.provider+" Logo"} />
            <h3>{Certificate.title}</h3>
            <h4>{Certificate.provider}</h4>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HeroCertifications