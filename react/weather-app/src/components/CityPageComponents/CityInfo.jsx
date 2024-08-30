import React from "react";
import styled from "styled-components";
import { FaLocationDot } from "react-icons/fa6";

const CityInfoContainer = styled.div`
  margin-bottom: 20px;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  background: rgba(0, 0, 0, 0.5);
  font-size: 25px;
`;

const CityInfo = ({ city, country }) => (
  <CityInfoContainer> 
    <h1> <FaLocationDot style={{ marginRight: "15px" }}/>
       {city}, {country}
    </h1>
  </CityInfoContainer>
);

export default CityInfo;
