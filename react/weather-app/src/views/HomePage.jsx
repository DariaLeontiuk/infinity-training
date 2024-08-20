import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useWeatherByLocation from "../hooks/useWeatherByLocation";
import WeatherInfo from "../components/HomePageComponents/WeatherInfo";
import WeatherInput from "../components/HomePageComponents/WeatherInput";
import SeeMoreButton from "../components/HomePageComponents/SeeMoreButton";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative;
  top: 30vh;
`;

const HomePage = () => {
  const { weather, error, status } = useWeatherByLocation();
  const navigate = useNavigate();

  const handleCitySearch = (city) => {
    navigate(`/city/${city}`);
  };

  return (
    <HomeContainer>
      <WeatherInput onCitySearch={handleCitySearch} />
      {status === "loading" && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weather && (
        <>
          <WeatherInfo weather={weather} />
          <SeeMoreButton cityName={weather.city.name} />
        </>
      )}
    </HomeContainer>
  );
};

export default HomePage;