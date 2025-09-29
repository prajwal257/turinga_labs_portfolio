import React from 'react'
import styles from './HeroContact.module.scss';

function HeroContact() {
  return (
    <div className={styles.HeroContact}>
        <div className={styles.contactForm}>
            <h4>Feel free to say Hi:</h4>
            <div className={styles.form}>
                <div className={styles.mailInput}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className={styles.messageInput}>
                    <label htmlFor="message">Mesaage:</label>
                    <input type="text" name="message" id="message" />
                </div>
                <input type="submit" value="Submit" className={styles.SubmitButton} />                
            </div>
        </div>
    </div>
  )
}

export default HeroContact