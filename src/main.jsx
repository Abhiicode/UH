import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navbar from './Components/Navbar/Navbar'
import Slider from './Components/Slider/Slider'
import Package from './Components/Packages/Package'
import About from './Components/About/About'
import International from './Components/International/International'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Slider/> 
    <Package/>
    <About/>
    <International/>
  </React.StrictMode>,
)
