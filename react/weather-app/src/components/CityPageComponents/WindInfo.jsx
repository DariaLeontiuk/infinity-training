import React from "react";
import styled from "styled-components";
import { GiWindSlap } from "react-icons/gi";
import { GiWindsock } from "react-icons/gi";

const WindInfoContainer = styled.div`
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
  grid-column: 3 / 4;
  grid-row: 11 / 13;
  background: rgba(0, 0, 0, 0.5);
    font-size: 40px;
`;

const WindInfo = ({ windSpeed, windDirection }) => {
  return (
    <WindInfoContainer>
      <p><GiWindSlap style={{ marginRight: "20px" }}/> Wind Speed: {windSpeed} m/s</p>
      <p><GiWindsock style={{ marginRight: "20px" }}/> Direction: {windDirection}°</p>
    </WindInfoContainer>
  );
};

export default WindInfo;
