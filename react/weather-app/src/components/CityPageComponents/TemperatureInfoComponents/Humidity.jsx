import React from 'react';
import styled from 'styled-components';
import { WiHumidity } from "react-icons/wi";

const HumidityContainer = styled.div`
    margin-bottom: 20px;
    border-radius: 15px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    width: 40%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2; 
`;

const DataContainer = styled.p `
  font-size: 45px;
  margin-top: 30px;
  font-weight: bold;
`

const Humidity = ({ humidity }) => (
  <HumidityContainer>
     <p><WiHumidity style={{ marginRight: "15px" }} />Humidity:</p>
     <DataContainer>{humidity}%</DataContainer>
  </HumidityContainer>
);

export default Humidity;