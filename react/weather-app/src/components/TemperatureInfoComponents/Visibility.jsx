import React from 'react';
import styled from 'styled-components';

const VisibilityContainer = styled.div`
    margin-bottom: 20px;
    border-radius: 15px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
`;

const Visibility = ({ visibility }) => (
  <VisibilityContainer>
     <p>Visibility: {visibility} km</p>
  </VisibilityContainer>
);

export default Visibility;