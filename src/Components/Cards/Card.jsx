import React from 'react'
import "./Card.css"
import { Router } from 'react-router-dom';
import { useNavigate } from 'react-router';


const Card = (props) => {
    
    const navigate = useNavigate(); 

    function handleClick(value) {
        //console.log(`/my-route/:state?${value}`);
        //navigate('',{state:{place:`${value}`}});
        window.location.href = `${value}`;
        // Replace '/my-route' with the actual route you want to redirect to
        // navigate('/my-route', { state: { optionalParam: 'rajasthan' } });
    }

    return (
        <>
            <div className='tour_card' style={{"width": "23rem"}}>
                <img className="card-img-top" src= {props.img_url} alt="Card image cap"/>
                    <div className="card-body">
                        <h3>{props.img_heading}</h3>
                        <p className="card-text">{props.img_desc}</p>
                        <button type="button" onClick={()=>handleClick(props.url)} className="btn btn-info">View Details</button>
                    </div>
            </div>
        </>
    )
}

export default Card
