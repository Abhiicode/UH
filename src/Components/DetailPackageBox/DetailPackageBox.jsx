import React from 'react'
import "./DetailPackageBox.css"
import { useState , useEffect} from 'react';

const DetailPackageBox = (props) => {

  const [showParagraph, setShowParagraph] = useState(false);
  const [subParaSign, setsubParaSign] = useState("+");
  const handleClick = () => {
    setTimeout(() => {
      setShowParagraph(!showParagraph);
      if(subParaSign == "-") {
          setsubParaSign("+");
      }else{
        setsubParaSign("-"); 
      }
    }, 100); // delay for 1 second (1000 milliseconds)
  };
  return (
    <>  
        <div className="package_card">
            <div className="card-body">
                <h3 className="card-title">{props.name}</h3>
                <p className="card-text"><span>{props.duration}</span></p>
                <p className="card-text"> <span>{props.destinations}</span></p>
                {showParagraph && <p>{props.description}</p>}
                <button type="button" onClick={handleClick} className="btn btn-outline-warning">[{subParaSign}] View Details</button>
            </div>
        </div>
    </>
  )
}

export default DetailPackageBox
