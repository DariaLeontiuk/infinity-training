import React from 'react';
import '../styles/WindInfo.css'

const WindInfo = ({ windSpeed, windDirection }) => {
  return (
    <div className="wind-info">
      <p>Wind Speed: {windSpeed} m/s</p>
      <p>Direction: {windDirection}°</p>
    </div>
  );
};

export default WindInfo;