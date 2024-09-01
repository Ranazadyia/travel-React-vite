import React from 'react'
import './HeroStyle.css'

const Hero = ({ image, title }) => {
  return (
    <div className='hero' style={{ backgroundImage: `url(${image})` }}>
      <div>
        <p className='title-hero'>{title}</p>
      </div>
    </div>
  )
}

export default Hero  