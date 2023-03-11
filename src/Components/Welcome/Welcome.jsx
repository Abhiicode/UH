import React from 'react'
import Navbar from '../Navbar/Navbar'
import Slider from '../Slider/Slider'
import Package from '../Packages/Package'
import About from '../About/About'
import International from '../International/International'
const Welcome = () => {
  return (
    <>
            <Navbar/>
            <Slider/> 
            <Package/>
            <About/>
            <International/> 
    </>
  )
}

export default Welcome
