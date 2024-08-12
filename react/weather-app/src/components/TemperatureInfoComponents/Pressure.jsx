import React from 'react';
import styled from 'styled-components';

const PressureContainer = styled.div`
    margin-bottom: 20px;
    border-radius: 15px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
`;

const Pressure = ({ pressure }) => (
  <PressureContainer>
     <p>Pressure: {pressure} hPa</p>
  </PressureContainer>
);

export default Pressure;