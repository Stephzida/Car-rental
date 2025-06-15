import React from 'react'
import { Container } from 'react-bootstrap'

const Service = () => {
  return (
    <div className='serviceCover'>
        <Container className='service'>
        <h3>Our Services & Benefits</h3>
        <p>To make renting easy and hassle-free, we provide a variety of services and advantages. <br /> We have you covered with a  varitey of vehicels and flexible rental terms.</p>
        <div className="directions">
            <div className="directionItem">
                <div className="direct-icon"><i class="bi bi-stars fs-3 text-dark"></i></div>
                <h4>Quality Choice</h4>
                <p>We offer a wide range of high-quality vehicles to choose from, including luxury cars, SUVs, Vans, and more </p>
            </div>
            <div className="directionItem">
                <div className="direct-icon"><i class="bi bi-cash-coin fs-3 text-dark"></i></div>
                <h4>Affordable Prices</h4>
                <p>Our rental rates are highly competitive and  affordable, allowing our customers to enjoy their trips without breaking the bank </p>
            </div>
            <div className="directionItem">
                <div className="direct-icon"><i class="bi bi-patch-check fs-3 text-dark"></i></div>
                <h4>Convenient Online Booking </h4>
                <p>With our easy-to-use online booking system, customers can quickly and conveniently reserve their rental car from anywhere, anytime.</p>
            </div>
        </div>
        </Container>
    </div>
  )
}

export default Service