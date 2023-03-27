import React from 'react'
import Navbar from '../Navbar/Navbar'
import Slider from '../Slider/Slider'
import Package from '../Packages/Package'
import About from '../About/About'
import International from '../International/International'
import Footer from '../Footer/Footer'
import WhatsAppFloat from '../WhatsAppFloat/WhatsAppFloat'
const Welcome = () => {
  return (
    <>
            
            <Slider/> 
            <Package/>
            <About/>
            <International/>
            <Footer/>
            <WhatsAppFloat/>
    </>
  )
}

export default Welcome
