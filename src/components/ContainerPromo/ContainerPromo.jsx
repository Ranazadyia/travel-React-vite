import React from 'react'
import './ContainerPromo.css'

const ContainerPromo = ({imag,subtitle,title,butt}) => {
  return (
    <div className='ContainerPromo'>

        <div className='images'>
        <img src={imag} />
        </div>
       
        <div className='paragraph'> 
        <h3>{subtitle}</h3>
        <h1>{title}</h1>
        <button>{butt}</button>
        </div>

    </div>
  )
}

export default ContainerPromo