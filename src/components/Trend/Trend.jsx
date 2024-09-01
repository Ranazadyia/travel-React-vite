import React from 'react'
import './Trend.css'


const Trend = () => {
  return (
    <div className='Trend'>
      <div className='trend-group'>

        <div className='imageTrend'>
          <img src='./src/assets/img/aboutUs.png' />
        </div>
        <div className='TextTrend'>
          <div className='text'>
          <h3>TREND</h3>
          <h1>Our Popular Tour Plans</h1>
          <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium.</p>
          <div className='infoGroup'>
        <div className='infoItem'>
          <h6 className='infoTitle'>78 <span>%</span></h6>
          <h6 className='infoDetail'>Vacations</h6>
        </div>
        <div className='infoItem'>
          <h6 className='infoTitle'>55 <span>%</span></h6>
          <h6 className='infoDetail'>Honeymoon</h6>
        </div>
      </div>
          </div>
          
        </div>
       
      </div>

     

    </div>
  )
}

export default Trend
