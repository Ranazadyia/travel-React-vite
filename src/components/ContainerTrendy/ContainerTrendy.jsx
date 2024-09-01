import React from 'react'
import './ContainerTrendy.css'

const ContainerTrendy = ({image , flag, text,title}) => {
  return (
    <div className='ContainerTrendy'>
      <div className='imges'>
      <img className='MainImage' src={image} alt="Main Image" />
      <img className='subImage' src={flag} alt="Flag" />
      </div>
      <div className='content'>
      <div className='top'>
       <div className='day'> 
       <img className='svgTop' src='./src/assets/img/calender.png' alt="Calendar" />
        <label>8 days</label>
       </div>
       <div className='people'> 
       <img className='svgTop' src='./src/assets/img/user.png' alt="User" />
        <label>{text}</label>
       </div>
       </div>
       <div className='title'>
       <h2>{title}</h2>
       <img src='./src/assets/img/stars.png' alt="Stars" />
       </div>
        <p>Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.</p>
        <button>Explore Now</button>
      </div>

    </div>
  )
}

export default ContainerTrendy