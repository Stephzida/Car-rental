import React from 'react'
import { Container } from 'react-bootstrap'
import Wagon from '../assets/image.png'

const Guid = () => {
  return (
    <div >
        <div className='guidBody'>
        <Container className='guidCover'>
            <h3>How it works</h3>
            <p>Renting a luxury car has never been easier. Our streamlined process makes it simple for you <br /> to book and confirm your vehicle of choice online</p>
            <div className='guidGrid'>
                <div className="guideItem">
                    <div className="itemContent">
                        <div className="icon">
                            <i class="bi bi-search"></i>
                        </div>
                        <div className="text">
                            <h4>Browse and select</h4>
                            <p>Choose from our wide range of premium cars, select the pickup and return dates and location that suits you best.</p>
                        </div>
                    </div>
                    <div className="itemContent">
                        <div className="icon">
                            <i class="bi bi-calendar-check"></i>
                        </div>
                        <div className="text">
                            <h4>Book and confirm</h4>
                            <p>Book your desired car with just a few clicks and receive an instant confirmation via email or SMS.</p>
                        </div>
                    </div>
                    <div className="itemContent">
                        <div className="icon">
                            <i class="bi bi-emoji-smile-fill"></i>
                        </div>
                        <div className="text">
                            <h4>Enjoy your ride</h4>
                            <p>Pick up your car at the designated location and enjoy your premium driving experience with our top-quality services</p>
                        </div>
                    </div>
                    
                </div>
                <div className="guideImage">
                    <img src={Wagon} alt="" className='img-fluid' />
                </div>
            </div>
        </Container>
    </div>
        <div className='guidBody-md'>
        <Container className='guidCover-md'>
            <h3>How it works</h3>
            <p>Renting a luxury car has never been easier. Our streamlined process makes it simple for you to book and confirm your vehicle of choice online</p>
            <div className='guidflex' style={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center"}}>
                <div className="guideItem">
                    <div className="itemContent">
                        <div className="icon">
                            <i class="bi bi-search"></i>
                        </div>
                        <div className="text">
                            <h4>Browse and select</h4>
                            <p>Choose from our wide range of premium cars, select the pickup and return dates and location that suits you best.</p>
                        </div>
                    </div>
                    <div className="itemContent">
                        <div className="icon">
                            <i class="bi bi-calendar-check"></i>
                        </div>
                        <div className="text">
                            <h4>Book and confirm</h4>
                            <p>Book your desired car with just a few clicks and receive an  instant confirmation via email or SMS.</p>
                        </div>
                    </div>
                    <div className="itemContent">
                        <div className="icon">
                            <i class="bi bi-emoji-smile-fill"></i>
                        </div>
                        <div className="text">
                            <h4>Enjoy your ride</h4>
                            <p>Pick up your car at the designated location and enjoy your premium driving experience with our top-quality services</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Container>
    </div>
    </div>



  )
}

export default Guid