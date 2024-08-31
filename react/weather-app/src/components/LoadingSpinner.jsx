import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 8px solid rgba(255, 255, 255, 0.3); /* Light grey */
  border-top: 8px solid white; /* Blue */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
  margin: 20px auto;
`;

const LoadingText = styled.div`
  color: white;
  font-size: 24px;
  margin-top: 10px;
  text-align: center;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Занимает весь экран */
`;

const LoadingSpinner = () => (
  <LoadingContainer>
    <Spinner />
    <LoadingText>Loading...</LoadingText>
  </LoadingContainer>
);

export default LoadingSpinner;