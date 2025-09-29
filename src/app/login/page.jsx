import React from 'react'
import styles from './page.module.scss'


function Page() {
  return (
    <div className={styles.loginPage}>
        <input type="text" className={styles.textArea} name="userInput" id="userInput" />
    </div>
  )
}

export default Page