import React from 'react';
import '../styles/SunInfo.css'

const SunInfo = ({ sunrise, sunset }) => {
  return (
    <div className="sun-info">
      <p>Sunrise: {sunrise}</p>
      <p>Sunset: {sunset}</p>
    </div>
  );
};

export default SunInfo;