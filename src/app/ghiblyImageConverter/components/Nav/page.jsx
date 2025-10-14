import React from 'react'
import styles from "./Nav.module.scss"

function Nav() {
  return (
    <div className={styles.Nav}>
        <h2>Studio Ghibly Styled Image Converter</h2>
        <div className={styles.rightLinks}>
            <div className={styles.turingaLab}>TuringaLab</div>
            <div className={styles.GitHub}>GitHub</div>
        </div>
    </div>
  )
}

export default Nav