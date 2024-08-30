import React from 'react';
import styled from 'styled-components';
import { MdOutlineVisibility } from "react-icons/md";



const VisibilityContainer = styled.div`
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
const Visibility = ({ visibility }) => (
  <VisibilityContainer>
     <p><MdOutlineVisibility style={{ marginRight: "15px" }} />Visibility:</p>
     <DataContainer>{visibility} km</DataContainer>
  </VisibilityContainer>
);

export default Visibility;