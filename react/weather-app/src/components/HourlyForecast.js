import React from "react";
import '../styles/HourlyForecast.css'

const HourlyForecast = ({hourlyData}) => {
    return (
        <div className="hourly-forecast">
            {hourlyData.map((hour, index) => (
                <div key={index} className="hourly-item">
                    <p>{hour.time}</p>
                    <p>{hour.temp}°C</p>
                </div>
            ))}
        </div>
    )
}

export default HourlyForecast;