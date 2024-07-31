import React from 'react';
import PropTypes from 'prop-types';
import WeatherForecast from './WeatherForecast';
import { convertUnixTimestamp } from '../utils/dateUtils';

const WeatherInfo = ({ weather }) => {
  return (
    <div>
      <h2>Weather Information for {weather.city.name}, {weather.city.country}</h2>
      <div>
        <h3>City Information</h3>
        <p>Coordinates: Latitude {weather.city.coord.lat}, Longitude {weather.city.coord.lon}</p>
        <p>Sunrise: {convertUnixTimestamp(weather.city.sunrise)}</p>
        <p>Sunset: {convertUnixTimestamp(weather.city.sunset)}</p>
      </div>
      <WeatherForecast list={weather.list} />
    </div>
  );
};

WeatherInfo.propTypes = {
  weather: PropTypes.object.isRequired
};

export default WeatherInfo;