import React from 'react'
import './ContainerStates.css'

const ContainerStates = ({ image, date, people, title, text, cost, Evaluation }) => {
  return (
    <div className='ContainerStates'>
      <div className='coverimg'>
        <img className='' src={image} />
        <div className='top_states'>
          <span>{date}</span>
          <span>{people}</span>
        </div>

      </div>
      <div className='content-states'>

        <h2>{title}</h2>
        <p>{text}</p>
        <div>
          <div className='bottom-states'>
            <span>{cost}</span>
            <div className='star'>
              <img src='./src/assets/img/starCard.png' />
              <span>{Evaluation}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ContainerStates