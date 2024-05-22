import React from 'react'
import Slideshow from '../slider/slider'


export default function Home1() {
  return (
    <div className="font-Roboto">
      
      <div className='@apply bg-[rgb(226,214,214)]'>
      <h1 className=' @apply text-[green] font-bold text-[large] m-0 p-0'>LATEST NEWS</h1>
      <p className='@apply m-0 pb-[2%] p-0'>Stay informed about agriculture news article on global agriculture and case studies and insights on farmers around Africa,<br></br> the latest future price, livestock future, markets trends, weather forecast,
        availble loans and etc.<br></br> 
      </p>
      </div>
      <Slideshow/>
      <div className='@apply bg-[rgb(226,214,214)] pt-[2%] pb-[1%]'>
      <button className=' @apply bg-[orange] font-bold w-[15%] h-[30%] text-[medium] rounded-[40%]'><a href='https://times.mw/'> view more</a></button>
      </div>
    </div>
    
  )
}

