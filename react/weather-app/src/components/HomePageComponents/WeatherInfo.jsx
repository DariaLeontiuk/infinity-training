import React from "react";
import styled from "styled-components";
import WeatherIcon from "../CityPageComponents/WeatherIcon";

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
      <h2>
        {weather.city.name}, {weather.city.country}
      </h2>
      <p>Temperature: {Math.round(weather.list[0].main.temp)}°C</p>
      <p>Feels like: {Math.round(weather.list[0].main.feels_like)}°C</p>
      <WeatherIcon icon={weather.list[0].weather[0].icon} size="100px" />
    </InfoContainer>
  );
};

export default WeatherInfo;
