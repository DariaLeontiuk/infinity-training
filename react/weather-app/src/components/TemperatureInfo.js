import React from "react";
import '../styles/TemperatureInfo.css'

const TemperatureInfo = ({temp, feels_like, temp_min, temp_max, pressure, 
    visibility, humidity}) => {
    return (
        <div className="temperature-info">
          <p>Temperature: {temp}°C (Feels like: {feels_like}°C)</p>
          <p>Min Temperature: {temp_min}°C, Max Temperature: {temp_max}°C</p>
          <p>Pressure: {pressure} hPa, Humidity: {humidity}%</p>
          <p>Visibility: {visibility} km</p>
        </div>
    )
}

export default TemperatureInfo;