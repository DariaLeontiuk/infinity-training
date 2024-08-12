import React from "react";
import styled from "styled-components";

const WindInfoContainer = styled.div`
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
  grid-column: 3 / 4;
  grid-row: 11 / 13;
`;

const WindInfo = ({ windSpeed, windDirection }) => {
  return (
    <WindInfoContainer>
      <p>Wind Speed: {windSpeed} m/s</p>
      <p>Direction: {windDirection}°</p>
    </WindInfoContainer>
  );
};

export default WindInfo;
