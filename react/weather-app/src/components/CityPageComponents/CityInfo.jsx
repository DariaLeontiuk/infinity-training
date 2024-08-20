import React from "react";
import styled from "styled-components";

const CityInfoContainer = styled.div`
  margin-bottom: 20px;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  background: rgba(0, 0, 0, 0.5);
`;

const CityInfo = ({ city, country }) => (
  <CityInfoContainer> 
    <h1>
       {city}, {country}
    </h1>
  </CityInfoContainer>
);

export default CityInfo;
