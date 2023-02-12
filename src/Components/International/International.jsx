import React from 'react'
import InternationalCard from '../Cards/InternationalCard'
import "./International.css"

export default function International() {
    return (
        <>
            <div className="international_body mt-5">
                <h1>Top International Tour Packages</h1>
                <div className="international_container">
                    <InternationalCard img_src="./images/rajasthan-tour.jpg" title="Rajasthan Tour Packages" desc="Given a chance to time travel and relish the magical expanse of Royal Rajasthan..." />
                    <InternationalCard img_src="./images/jal-mahla.png" title="Golden Triangle Tour" desc="Get mesmerized by the beauty of the most fascinating Indian cities (Delhi-Agra-Jaipur)" />
                    <InternationalCard img_src="./images/kashmir-tour.jpg" title="Kerala Tour Packages" desc="Planning for a Kerala trip? Here are our most popular and trending Kerala tour packages!" />
                    <InternationalCard img_src="./images/himachal-tour.jpg" title="Himachal Tour Packages" desc="India is famed for its rich and abundant wilderness, and wildlife sighting is a must when on a trip..." />
                </div>
            </div>
        </>
    )
}
