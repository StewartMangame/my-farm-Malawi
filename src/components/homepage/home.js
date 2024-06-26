import React from 'react'
import Header from '../homepage/header'
import About from '../about/about'
import AboutD from '../slider/aboutD'
import Home1 from '../pages/home1'
import Footer from './footer'

export default function Home() {
  return (
    <div className="font-Roboto">
      <Header/>
      <About/>
      <AboutD/>
      <Home1/>
      <Footer/>
    </div>
  );
}
