import React from 'react'
import Hero from './components/Hero/page'
import Nav from './components/Nav/page'
import Footer from './components/Footer/page'
import Carousel from './components/Carousel/page'

function page() {
  return (
    <div>
        <Nav />
        <Hero />
        <Carousel />
        <Footer />
    </div>
  )
}

export default page