import React from 'react';
import styled from 'styled-components';

const TemperatureInfoContainer = styled.div`
    margin-bottom: 20px;
    border-radius: 15px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
`;

const TemperatureInfo = ({ temp, feels_like, temp_min, temp_max, pressure, visibility, humidity }) => (
  <TemperatureInfoContainer>
    <h2>{temp}°C</h2>
    <p>Feels like: {feels_like}°C</p>
    <p>Min: {temp_min}°C, Max: {temp_max}°C</p>
    <p>Pressure: {pressure} hPa</p>
    <p>Visibility: {visibility} km</p>
    <p>Humidity: {humidity}%</p>
  </TemperatureInfoContainer>
);

export default TemperatureInfo;