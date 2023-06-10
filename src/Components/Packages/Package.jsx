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
                    <PackageCard img_url="./images/rajasthan-tour.jpg" img_heading="Rajasthan Tour Packages" img_desc="Given a chance to time travel and relish the magical expanse of Royal Rajasthan..." place="RJ" url="/rajasthan-tour-package"/>
                    <PackageCard img_url="./images/jal-mahla.png" img_heading="Golden Triangle Tour" img_desc="Get mesmerized by the beauty of the most fascinating Indian cities (Delhi-Agra-Jaipur)" place="TJ" url="/golden-tour-package"/>
                    <PackageCard img_url="./images/kashmir-tour.jpg" img_heading="Kerala Tour Packages" img_desc="Planning for a Kerala trip? Here are our most popular and trending Kerala tour packages!" place ="KR" url="/kerla-tour-package"/>
                    <PackageCard img_url="./images/himachal-tour.jpg" img_heading="Himachal Tour Packages" img_desc="India is famed for its rich and abundant wilderness, and wildlife sighting is a must when on a trip..." place="HP" url="/himachal-tour-package" />
                    <PackageCard img_url="./images/kashmir-tour.jpg" img_heading="Jammu And Kashmir Tour" img_desc="Are you delighted for your honeymoon vacation? This is one such escape you will treasure..." place ="JK" url="/jammu-tour-package"/>
                    <PackageCard img_url="./images/goa-tour.jpg" img_heading="Goa Tour Packages" img_desc="Goa, state of India, comprising a mainland district on the country’s southwestern coast and an offshore island..." place="GA" url="/goa-tour-package" />
                </div>
            </div>
        </>
    )
}

export default Package
