import React from 'react';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.Footer}>
        <img src="assets/NeuronIcon.png" alt="companyLogo" />
        <div className={styles.FooterLinksRow1}>
            <ul>About</ul>
            <ul>Projects</ul>
            <ul>Work</ul>
        </div>
        <div className={styles.FooterLinksRow2}>
            <ul>About</ul>
            <ul>Projects</ul>
            <ul>Work</ul>
        </div>
    </div>
  )
}

export default Footer