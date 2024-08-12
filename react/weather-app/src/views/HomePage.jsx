import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { fetchWeatherByLocation } from "../redux/weatherSlice";
import WeatherInfo from "../components/WeatherInfo";
import WeatherInput from "../components/WeatherInput";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative;
  top: 30vh;
`;

const SeeMoreButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #61dafb;
  color: #282c34;
`;

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const weather = useSelector((state) => state.weather.data);
  const error = useSelector((state) => state.weather.error);
  const status = useSelector((state) => state.weather.status);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(fetchWeatherByLocation({ latitude, longitude }));
        },
        (error) => {
          console.error("Error getting location:", error);
          dispatch({
            type: "weather/fetchWeatherByLocation/rejected",
            error: "Unable to retrieve your location",
          });
        }
      );
    } else {
      dispatch({
        type: "weather/fetchWeatherByLocation/rejected",
        error: "Geolocation is not supported by this browser",
      });
    }
  }, [dispatch]);

  const handleCitySearch = (city) => {
    navigate(`/city/${city}`);
  };

  const handleSeeMore = () => {
    navigate(`/city/${weather.city.name}`);
  };

  return (
    <Container>
      <WeatherInput onCitySearch={handleCitySearch} />
      {status === "loading" && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weather && (
        <>
          <WeatherInfo weather={weather} />
          <SeeMoreButton onClick={handleSeeMore}>See More</SeeMoreButton>
        </>
      )}
    </Container>
  );
};

export default HomePage;
