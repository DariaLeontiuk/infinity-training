import React from "react";
import styled from "styled-components";
import { GiSunrise } from "react-icons/gi";
import { GiSunset } from "react-icons/gi";

const SunInfoContainer = styled.div`
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
  grid-column: 2 / 3;
  grid-row: 11 / 13;
  background: rgba(0, 0, 0, 0.5);
  font-size: 40px;
`;

const SunInfo = ({ sunrise, sunset }) => {
  return (
    <SunInfoContainer>
      <p><GiSunrise style={{ marginRight: "20px" }}/> Sunrise: {sunrise}</p>
      <p><GiSunset style={{ marginRight: "20px" }}/> Sunset: {sunset}</p>
    </SunInfoContainer>
  );
};

export default SunInfo;
