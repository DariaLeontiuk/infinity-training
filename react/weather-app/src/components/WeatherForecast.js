import React from 'react';
import PropTypes from 'prop-types';
import { convertVisibilityToKilometers } from '../utils/conversionUtils';

const WeatherForecast = ({ list }) => {
  return (
    <div>
      <h3>Forecast</h3>
      {list.map((forecast, index) => (
        <div key={index}>
          <h4>{forecast.dt_txt}</h4>
          <p>Temperature: {forecast.main.temp}°C (Feels like: {forecast.main.feels_like}°C)</p>
          <p>Min Temperature: {forecast.main.temp_min}°C, Max Temperature: {forecast.main.temp_max}°C</p>
          <p>Pressure: {forecast.main.pressure} hPa, Humidity: {forecast.main.humidity}%</p>
          <p>Weather: {forecast.weather[0].description}</p>
          <p>Cloudiness: {forecast.clouds.all}%</p>
          <p>Wind: {forecast.wind.speed} m/s, Direction: {forecast.wind.deg}°</p>
          <p>Visibility: {convertVisibilityToKilometers(forecast.visibility)} km</p>
        </div>
      ))}
    </div>
  );
};

WeatherForecast.propTypes = {
  list: PropTypes.array.isRequired
};

export default WeatherForecast;