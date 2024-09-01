import React from 'react'
import './ContainerPromoAbout.css'

const ContainerPromoAbout = ({ subtitle, title, paragraph, image, butt, showButton = true, reverse = false }) => {
  return (

    <div className='ContainerPromoAbout' style={{ flexDirection: (reverse) ? "row-reverse" : "row" }}>

      <div className='text'>
        <h3>{subtitle}</h3>
        <h1>{title}</h1>
        <p>{paragraph}</p>
        {showButton && <button> {butt}</button>}

        {/*  <button>{butt}</button> */}

      </div>

      <div className='image'>
        <img src={image} />

      </div>



    </div>
  )
}

export default ContainerPromoAbout