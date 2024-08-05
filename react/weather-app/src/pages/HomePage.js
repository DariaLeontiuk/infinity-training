import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WeatherInfo from '../components/WeatherInfo';
import WeatherInput from '../components/WeatherInput';
import { getWeatherByLocation } from '../services/weatherService';

const HomePage = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getWeatherByLocation(latitude, longitude, setWeather, setError);
        },
        (error) => {
          console.error('Error getting location:', error);
          setError('Unable to retrieve your location');
        }
      );
    } else {
      setError('Geolocation is not supported by this browser');
    }
  }, []);

  const handleCitySearch = (city) => {
    navigate(`/city/${city}`);
  };

  return (
    <div>
      <WeatherInput onCitySearch={handleCitySearch} />
      {error && <p>{error}</p>}
      {weather && <WeatherInfo weather={weather} />}
    </div>
  );
};

export default HomePage;