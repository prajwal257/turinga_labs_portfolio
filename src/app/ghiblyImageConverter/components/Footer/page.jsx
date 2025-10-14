import React from 'react'
import styles from './Footer.module.scss'
import Link from 'next/link'

function Footer() {
  return (
    <div className={styles.Footer}>
        <h2>© 2025 Ghibli Image Converter — built with 🌸 by Prajwal Dwivedi</h2>
        <div className={styles.rightLinks}>
            <Link href="/" className={styles.FooterLink}>GitHub</Link>
            <Link href="/" className={styles.FooterLink}>Privacy</Link>
            <Link href="/"  className={styles.FooterLink}>Terms</Link>
        </div>
    </div>
  )
}

export default Footer