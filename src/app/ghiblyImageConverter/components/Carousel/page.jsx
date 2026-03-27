import React from 'react'
import styles from './Carousel.module.scss'
import CarouselImage from './Components/CarouselImage/page'
import ghiblyOutputs from '../../../../data/ghiblyoutput'

function Carousel() {
  return (
    <div className={styles.Carousel}>
      {ghiblyOutputs.map((output, index) => (
          <CarouselImage key={index} {...output} index={index}/>
      ))}
    </div>
  )
}

export default Carousel