import React from 'react'
import "../Cards/InternationalCard.css"

const InternationalCard=(props)=> {
    return (
        <>
            <div className="international_card" style={{"max-width": "540px;"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={props.img_src}
                            alt={props.img_txt}
                            className="img-fluid rounded-start"
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default InternationalCard
