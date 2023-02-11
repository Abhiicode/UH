import React from 'react'
import "./Card.css"
const Card = (props) => {
    return (
        <>
            <div className='tour_card' style={{"width": "23rem"}}>
                <img className="card-img-top" src= {props.img_url} alt="Card image cap"/>
                    <div className="card-body">
                        <h3>{props.img_heading}</h3>
                        <p className="card-text">{props.img_desc}</p>
                    </div>
            </div>
        </>
    )
}

export default Card
