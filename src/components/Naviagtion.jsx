import React from 'react'
import Button from './Button'
import {Container} from 'react-bootstrap';

const Naviagtion = () => {
  return (
    <div className="hero-cover">
    <Container className='nav'>
        <button className='burger'><i className="bi bi-list"></i></button>
        
        <Button message={"Login/Register"} active={"true"}/>
    </Container>
    </div>
  )
}

export default Naviagtion