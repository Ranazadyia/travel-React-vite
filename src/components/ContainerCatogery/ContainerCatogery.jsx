import React from 'react'
import './ContainerCatogeryStyle.css'

const ContainerCatogery= ({imag ,title ,desc}) => {
  return (
    <div className='ContainerCatogery'>
        <img src={imag}/>
        <h1>{title}</h1>
        <p>{desc}</p>
    </div>
  )
}

export default ContainerCatogery