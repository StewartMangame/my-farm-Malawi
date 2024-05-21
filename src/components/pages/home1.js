import React from 'react'
import Slideshow from '../slider/slider'

import './home2.css'


export default function Home1() {
  return (
    <div>
      
      <div className='new'>
      <h1 className='news'>LATEST NEWS</h1>
      <p className='dic'>Stay informed about agriculture news article on global agriculture and case studies and insights on farmers around Africa,<br></br> the latest future price, livestock future, markets trends, weather forecast,
        availble loans and etc.<br></br> 
      </p>
      </div>
      <Slideshow/>
      <div className='button'>
      <button className='bt'><a href='https://times.mw/'> view more</a></button>
      </div>
    </div>
    
  )
}

