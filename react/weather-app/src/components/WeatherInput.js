import React from 'react';
import PropTypes from 'prop-types';

const WeatherInput = ({ city, setCity, getWeatherByCity }) => {
  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={getWeatherByCity}>Get Weather</button>
    </div>
  );
};

WeatherInput.propTypes = {
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
  getWeatherByCity: PropTypes.func.isRequired
};

export default WeatherInput;