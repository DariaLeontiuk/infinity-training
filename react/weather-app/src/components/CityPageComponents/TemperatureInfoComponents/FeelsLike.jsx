import React from 'react';
import styled from 'styled-components';

const FeelsLikeContainer = styled.div`
    margin-bottom: 20px;
    border-radius: 15px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    width: 40%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2; 
`;

const FeelsLike = ({ feels_like }) => (
  <FeelsLikeContainer>
     <p>Feels like:</p>
     <p>{feels_like}°C</p>
  </FeelsLikeContainer>
);

export default FeelsLike;