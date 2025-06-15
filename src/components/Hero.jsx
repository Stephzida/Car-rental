import React from 'react'
import Background from '../image/image.png'
import { Container } from 'react-bootstrap'


const Hero = () => {

  return (
    <div className="hero-cover">
    <Container className='hero'>
        <h1>Discover the world on wheels <br /> with our car rental services</h1>
        <img src={Background} alt="" className='img-fluid img' />
    </Container>
    </div>
  )
}

export default Hero