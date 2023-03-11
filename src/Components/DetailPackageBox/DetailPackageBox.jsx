import React from 'react'

const DetailPackageBox = () => {
  return (
    <>  
        <div className="card" style={{width: "18rem"}}>
            {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
            <div className="card-body">
                <h3 className="card-title">Rajasthan Cultural Tour</h3>
                <p className="card-text"><span>Duration</span> 08 Nights / 09 Days</p>
                <p className="card-text"> <span>Destinations</span> 2N Jaipur, 1N Jodhpur, 2N Mount Abu, 2N Udaipur, 1N Pushkar</p>
                <button type="button" class="btn btn-outline-danger">View Details</button>
            </div>
        </div>
    </>
  )
}

export default DetailPackageBox
