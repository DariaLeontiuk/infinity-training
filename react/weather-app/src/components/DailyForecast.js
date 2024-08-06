import React from "react";
import '../styles/DailyForecast.css'

const DailyForecast = ({dailyData}) => {
    return (
        <div className="daily-forecast">
            {dailyData.map((day, index) => (
                <div key={index} className="daily-item">
                    <p>{day.date}</p>
                    <p>{day.temp} °C</p>
                </div>
            ))}
        </div>
    )
}

export default DailyForecast;