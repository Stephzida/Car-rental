import React from 'react'
import { useState } from 'react';
import Button from './Button'
import {Container} from 'react-bootstrap';

const Naviagtion = () => {
      const [showLinks,setShowlinks] = useState(false)

      const handleActive = () =>{
       setShowlinks(!showLinks)
      }
  return (
    <div className="hero-cover">
    <Container className='nav'>
        <div className='burgerBtn'>
          <button className={`burger`} onClick={handleActive}><i className="bi bi-list"></i></button>
        <div className="headerNavBlock">
          {showLinks ?   <div className="headerNavlink">
            <a href="">Rent</a>
                    <a href="">Share</a>
                    <a href="">About us</a>
                    <a href="">Contact</a>
          </div> : "" }
           
        </div>
        </div>

        <span className='logo'>LUXEDRIVE</span>
        <Button message={"Login/Register"} active={"true"}/>
        
    </Container>
    </div>
  )
}

export default Naviagtion