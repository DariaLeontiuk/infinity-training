import React from 'react';
import styled from 'styled-components';

const SunInfoContainer = styled.div `
    border-radius: 15px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    margin-bottom: 20px
`;

const SunInfo = ({ sunrise, sunset }) => {
  return (
    <SunInfoContainer>
      <p>Sunrise: {sunrise}</p>
      <p>Sunset: {sunset}</p>
    </SunInfoContainer>
  );
};

export default SunInfo;