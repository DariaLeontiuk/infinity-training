import React from "react";
import '../styles/CityInfo.css'

const CityInfo = ({city, country}) => {
    return (
        <div className="city-info">
            <h1>{city}, {country}</h1>
        </div>
    
    )
}

export default CityInfo;