import React from 'react';
import styled from 'styled-components';
import { FaTemperatureLow } from "react-icons/fa";

const FeelsLikeContainer = styled.div`
    margin-bottom: 20px;
    border-radius: 15px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    width: 40%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2; 
`;

const DataContainer = styled.p `
  font-size: 50px;
  margin-top: 30px;
  font-weight: bold;
`

const FeelsLike = ({ feels_like }) => (
  <FeelsLikeContainer>
     <p><FaTemperatureLow style={{ marginRight: "15px" }} />Feels like:</p>
     <DataContainer>{feels_like}°C</DataContainer>
  </FeelsLikeContainer>
);

export default FeelsLike;