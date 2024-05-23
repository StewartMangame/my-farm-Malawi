import React from 'react'
import Slideshow from '../slider/slider'


export default function Home1() {
  return (
    <div className="font-Roboto text-center">
      
      <div className='@apply bg-[rgb(226,214,214)]'>
      <h1 className=' @apply text-[green] font-bold text-4xl m-0 p-0'>LATEST NEWS</h1>
      <p className='@apply m-0 pb-[2%] pt-[2%] text-2xl text-center p-0'>Stay informed about agriculture news article on global agriculture, <br></br> case studies and insights on farmers around Africa,<br></br> the latest future price, livestock future, markets trends, weather forecast,
        availble loans and etc.<br></br> 
      </p>
      </div>
      <Slideshow/>
      <div className='@apply bg-[rgb(226,214,214)] pt-[2%] pb-[2%]'>
      <button className=' @apply bg-[orange] font-bold w-[15%] h-[30%] text-[medium] rounded-[10%]'><a href='https://times.mw/'> view more</a></button>
      </div>
    </div>
    
  )
}

