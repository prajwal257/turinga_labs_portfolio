import React from 'react';
import styles from './Footer.module.scss';
// import Logo from '../Logo/Logo';

function Footer() {
  return (
    <div className={styles.Footer}>
        <svg width={480} height={270} viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.Logo}>
            <g id="NeuronIcon">
                <g id="Layer1">
                    <circle id="Neuron1Layer1" cx="30" cy="30" r="30" fill="#D9D9D9"/>
                    <circle id="Neuron2Layer1" cx="30" cy="150" r="30" fill="#D9D9D9"/>
                </g>
                <g id="Layer2">
                    <circle id="Neuron1Layer2" cx="90" cy="30" r="30" fill="#D9D9D9"/>
                    <circle id="Neuron2Layer2" cx="90" cy="90" r="30" fill="#D9D9D9"/>
                    <circle id="Neuron3Layer2" cx="90" cy="150" r="30" fill="#D9D9D9"/>
                </g>
                <circle id="Neuron1Layer3" cx="210" cy="90" r="90" fill="#D9D9D9"/>
            </g>
        </svg>
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