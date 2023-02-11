import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navbar from './Components/Navbar/Navbar'
import Slider from './Components/Slider/Slider'
import Package from './Components/Packages/Package'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Slider/> 
    <Package/>
    
  </React.StrictMode>,
)
