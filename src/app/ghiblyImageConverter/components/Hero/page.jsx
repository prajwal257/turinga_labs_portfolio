import React from 'react'
import styles from './Hero.module.scss'

function Hero() {
  return (
    <div className={styles.Hero}>
        <h1>Turn Your Photos Into Studio Ghibli Magic</h1>
        <h3>Transform ordinary images into cinematic anime scenes using the power of DreamShaper XXL and a custom Ghibli LoRA — right in your browser.</h3>
        <div className={styles.CTAContainer}>
            <button>START NOW</button>
            <button>READ MORE</button>
        </div>
        <h5>No signup. Runs locally or via our server — your image stays private.</h5>
    </div>
  )
}

export default Hero