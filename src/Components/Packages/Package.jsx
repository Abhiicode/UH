import React from 'react'
import PackageCard from "../Cards/Card"
import "./Package.css"
const Package = () => {
    return (
        <>
            <div className="package_body mt-5">
                <h1>Popular Tour Destination In India</h1>
                <p>Packages for Best-Selling Destinations in India </p>
                <div className="packages_container">
                    <PackageCard img_url="../../../public/images/rajasthan-tour.jpg" img_heading="Rajasthan Tour Packages" img_desc="Given a chance to time travel and relish the magical expanse of Royal Rajasthan..." />
                    <PackageCard img_url="../../../public/images/jal-mahla.png" img_heading="Golden Triangle Tour" img_desc="Get mesmerized by the beauty of the most fascinating Indian cities (Delhi-Agra-Jaipur)" />
                    <PackageCard img_url="../../../public/images/kashmir-tour.jpg" img_heading="Kerala Tour Packages" img_desc="Planning for a Kerala trip? Here are our most popular and trending Kerala tour packages!" />
                    <PackageCard img_url="../../../public/images/himachal-tour.jpg" img_heading="Himachal Tour Packages" img_desc="India is famed for its rich and abundant wilderness, and wildlife sighting is a must when on a trip..." />
                    <PackageCard img_url="../../../public/images/kashmir-tour.jpg" img_heading="Jammu And Kashmir Tour" img_desc="Are you delighted for your honeymoon vacation? This is one such escape you will treasure..." />
                    <PackageCard img_url="../../../public/images/gujrat-tour.jpg" img_heading="Gujarat Tour Packages" img_desc="Gujarat is one of the most adorable state on the western coast of India is the sixth largest state..." />
                </div>
            </div>
        </>
    )
}

export default Package
