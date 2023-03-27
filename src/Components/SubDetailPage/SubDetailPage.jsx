import React from 'react'
import Navbar from '../Navbar/Navbar'
import Slider from '../Slider/Slider'
import DetailPackageBox from '../DetailPackageBox/DetailPackageBox';
import './SubDetailPage.css'
import Footer from '../Footer/Footer'
import { useState } from 'react';

const SubDetailPage = (props) => {

    const [showParagraph, setShowParagraph] = useState(false);
    const [subParaSign, setsubParaSign] = useState("+");
    const handleClick = () => {
        setTimeout(() => {
          setShowParagraph(!showParagraph);
          if(subParaSign == "+") {
              setsubParaSign("-");
          }else{
            setsubParaSign("+"); 
          }
        }, 100); // delay for 1 second (1000 milliseconds)
      };
     
  return (
    <>
      <Slider/>
      <h1>{props.tourName}</h1>
      <br />
      <p>
       {props.tourParaOne}
      </p>
      {showParagraph && <p>{props.tourParaTwo}</p>}
      <button type="button" onClick={handleClick} className="btn btn-outline-warning">[{subParaSign}] Read More</button>
      <h1 style={{marginTop:"30px"}}>{props.tourPackage}</h1>
      <div className="packages_container">
        {props.packageList.map((element,index) => {
            return <DetailPackageBox name = {element.name} duration = {element.duration} destinations = {element.destinations} description = {element.description} />
          })
        }
      </div>
      <Footer/>
    </>
  )
}

export default SubDetailPage
