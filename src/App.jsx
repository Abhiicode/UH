import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DetailPage from './Components/DetailPage/DetailPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './Components/Welcome/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
        <Routes>
        <Route exact path="/packages" element={<DetailPage/>} />
        <Route exact path="/" element={<Welcome/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
