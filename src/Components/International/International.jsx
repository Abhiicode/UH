import React from 'react'
import InternationalCard from '../Cards/InternationalCard'
import "./International.css"

export default function International() {
    return (
        <>
            <div className="international_body">
                <h1>Top International Tour Packages</h1>
                <div className="international_container">
                    <InternationalCard img_src="./images/bali_1.jpg" title="Bali Tour Packages" desc="Bali Indonesia. Land of the Gods. Also known as the Land of the Gods, Bali appeals through its sheer natural beauty of looming volcanoes and lush terraced rice fields that exude peace and serenity." />
                    <InternationalCard img_src="./images/maldives_1.jpg" title="Malvies Tour Packages" desc="The Maldives is irresistible with its white beaches, turquoise sea, blue lagoons, colourful marine life and many palm trees. With a temperature of around 30C all days of the year, the Maldives is a dream come true at any time." />
                </div>
            </div>
        </>
    )
}
