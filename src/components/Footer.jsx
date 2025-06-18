import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='footerCover'>
        <Container className="footer">
            <div className="footerDownload">
                <div className="textDownload">
                    <h4>Download our mobile app ⚡</h4>
                    <p>Get exclusive access to car rentals with our mobile app. Download <br /> now and experience convenience on the go.</p>
                </div>
                <div className="downloadBtncover">
                    <div className="downloadBtn">
                        <button className='a'>
                       <i class="bi bi-apple fs-4"></i> 
                       <div className="store">
                        <span style={{fontSize:10}}>DOWNLOAD ON THE</span>
                        <span>App Store</span>
                       </div>
                    </button>
                    <button className='a'>
                        <i class="bi bi-google-play fs-4"></i>
                        <div className="store">
                        <span style={{fontSize:10}}>GET IT ON</span>
                        <span class="fw-3">Google Play</span>
                       </div>
                    </button>
                    </div>
                </div>
            </div>
            <div className="footerNav">
                <span className='logo'>LUXEDRIVE</span>
                <div className="footerNavlink">
                    <a href="">Rent</a>
                    <a href="">Share</a>
                    <a href="">About us</a>
                    <a href="">Contact</a>
                </div>
                <div className="navSocials">
                    <a href="">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <a href="">
                        <i class="bi bi-reddit"></i>
                    </a>
                    <a href="">
                        <i class="bi bi-twitter"></i>
                    </a>
                    <a href="">
                        <i class="bi bi-youtube"></i>
                    </a>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer