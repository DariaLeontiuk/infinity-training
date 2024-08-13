import React from "react";
import styled from "styled-components";
import FeelsLike from "./FeelsLike";
import Humidity from "./Humidity";
import Visibility from "./Visibility";
import Pressure from "./Pressure";

const TempContainer = styled.div`
  padding: 60px;
`;

const ElemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const TemperatureInfoContainer = styled.div`
  margin-bottom: 20px;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  grid-column: 1 / 2;
  grid-row: 2 / 13;
  background-image: url(${(props) => props.$bgimage}),
    linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
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
  bgimage,
}) => {
  console.log(bgimage);
  console.log("max", temp_max);
  console.log("min", temp_min);
  return (
    <TemperatureInfoContainer $bgimage={bgimage}>
      <TempContainer>
        <h2>{temp}°C</h2>
        <h3>{description}</h3>
        <p>
          Min: {temp_min}°C, Max: {temp_max}°C
        </p>
      </TempContainer>
      <ElemContainer>
        <FeelsLike feels_like={feels_like} />
        <Pressure pressure={pressure} />
        <Visibility visibility={visibility} />
        <Humidity humidity={humidity} />
      </ElemContainer>
    </TemperatureInfoContainer>
  );
};

export default TemperatureInfo;
