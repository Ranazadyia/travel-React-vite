import React from 'react'
import './FooterStyle.css'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='list'>
          <div className='media'>
            <img src='./src/assets/img/footer_logo.png' />
            <p>Travel helps companies manage payments easily.</p>
            <div className='social'>
              <img src="./src/assets/img/linkedin.png" alt="in" />
              <img src="./src/assets/img/messenger.png" alt="ms" />
              <img src="./src/assets/img/twitter.png" alt="X" />
              <img src="./src/assets/img/Vector.png" alt="" />
            </div>
          </div>
          <div className='Company'>
            <h2>Company</h2>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className='Destinations'>
            <h2>Destinations</h2>
            <ul>
              <li>Maldives</li>
              <li>Los Angeles</li>
              <li>Las Vegas</li>
              <li>Toronto</li>
            </ul>
          </div>
        </div>
      </div>
      <p className='footer-bottom'>Copyright @ Xpro 2023 All Rights Reserved.</p>
    </div>
  )
}

export default Footer