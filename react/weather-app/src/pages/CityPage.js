import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import WeatherInfo from '../components/WeatherInfo';
import { getWeatherByCity } from '../services/weatherService';
import '../styles/CityPage.css';

const CityPage = () => {
  const { cityName } = useParams();
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    getWeatherByCity(cityName, (data) => {
      console.log('API Response:', data);
      if (data && data.list && data.list[0] && data.list[0].weather) {
        setWeather(data);
        updateBackgroundImage(data.list[0].weather[0].id);
      } else {
        setError('Weather data is unavailable');
      }
    }, setError);
  }, [cityName]);

  const updateBackgroundImage = (weatherId) => {
    // if (weatherId >= 200 && weatherId < 300) {
    //   setBackgroundImage('/assets/thunderstorm.jpg');
    // } else if (weatherId >= 300 && weatherId < 400) {
    //   setBackgroundImage('/assets/drizzle.jpg');
    // } else if (weatherId >= 500 && weatherId < 600) {
    //   setBackgroundImage('/assets/rain.jpg');
    // } else if (weatherId >= 600 && weatherId < 700) {
    //   setBackgroundImage('/assets/snow.jpg');
    // } else if (weatherId >= 700 && weatherId < 800) {
    //   setBackgroundImage('/assets/atmosphere.jpg');
    // } else if (weatherId === 800) {
    //   setBackgroundImage('/assets/clear.jpg');
    // } else if (weatherId === 801 || weatherId === 802) {
    //   setBackgroundImage('/assets/few-clouds.jpg');
    // } else if (weatherId > 800 && weatherId < 900) {
    //   setBackgroundImage('/assets/clouds.jpg');
    // } else {
    //   setBackgroundImage('/assets/default.jpg');
    // }
    setBackgroundImage('/assets/thunderstorm.jpg');
  };

  return (
    <div className="city-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {error && <p>{error}</p>}
      {weather && <WeatherInfo weather={weather} />}
    </div>
  );
};

export default CityPage;
