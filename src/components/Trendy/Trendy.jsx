import React from 'react'
import './TrendyStyle.css'

const Trendy = (props) => {
  return (
    <div className='Trendy'>
        <h3>TRENDY</h3>
        <h1>Our Trending Tour Packages</h1>
        <div className='child'>
        {props.children}
        </div>
        
        
    </div>
  )
}

export default Trendy