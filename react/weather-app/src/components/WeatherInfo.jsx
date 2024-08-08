import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  color: white;
`;

const WeatherInfo = ({ weather }) => {
  return (
    <InfoContainer>
      <h2>{weather.city.name}, {weather.city.country}</h2>
      <p>Temperature: {weather.list[0].main.temp}°C</p>
      <p>Feels like: {weather.list[0].main.feels_like}°C</p>
    </InfoContainer>
  );
};

export default WeatherInfo;