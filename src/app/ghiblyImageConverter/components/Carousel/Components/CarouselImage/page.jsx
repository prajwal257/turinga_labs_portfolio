import React from 'react'
import styles from './CarouselImage.module.scss'

function CarouselImage({index, imagePath, active}) {
    let isActive = true;
    return (
        <div className={styles.CarouselImage}>
            <div className={`${styles.CarouselImageContainer} ${isActive ? styles.Active : ''}`}>
                <img src='.\assets\Output_3.png' alt="project image" className={styles.Before} />
                <img src='.\assets\Output_3.png' alt="project image" className={styles.After} />
            </div>
        </div>
    )
}

export default CarouselImage