import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #61dafb;
  color: #282c34;
`;

const SeeMoreButton = ({ cityName }) => {
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate(`/city/${cityName}`);
  };

  return <Button onClick={handleSeeMore}>See More</Button>;
};

export default SeeMoreButton;