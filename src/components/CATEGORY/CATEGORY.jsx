import React from 'react'
import './CATEGORYStyle.css'

const CATEGORY = (props) => {
  return (
    <div className='CATEGORY'>
       <div className='title'>
        <h3>CATEGORY</h3>
        <h1>We Offer Best Services</h1>
        </div>
        <div className='child'>
        {props.children}
         </div>
    </div>
  )
}

export default CATEGORY