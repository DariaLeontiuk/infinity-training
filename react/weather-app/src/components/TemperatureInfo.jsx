import React from "react";
import styled from "styled-components";
import FeelsLike from "./TemperatureInfoComponents/FeelsLike";
import Humidity from "./TemperatureInfoComponents/Humidity";
import Visibility from "./TemperatureInfoComponents/Visibility";
import Pressure from "./TemperatureInfoComponents/Pressure";

const TemperatureInfoContainer = styled.div`
  margin-bottom: 20px;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  grid-column: 1 / 2;
  grid-row: 2 / 13;
`;

const TemperatureInfo = ({
  temp,
  feels_like,
  temp_min,
  temp_max,
  pressure,
  visibility,
  humidity,
  description,
}) => (
  <TemperatureInfoContainer>
    <h2>{temp}°C</h2>
    <h3>{description}</h3>
    <p>
      Min: {temp_min}°C, Max: {temp_max}°C
    </p>
    <FeelsLike feels_like={feels_like} />
    <Pressure pressure={pressure} />
    <Visibility visibility={visibility} />
    <Humidity humidity={humidity} />
  </TemperatureInfoContainer>
);

export default TemperatureInfo;
