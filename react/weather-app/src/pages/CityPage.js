import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainContainer from '../components/MainContainer';
import CityInfo from '../components/CityInfo';
import TemperatureInfo from '../components/TemperatureInfo';
import HourlyForecast from '../components/HourlyForecast';
import DailyForecast from '../components/DailyForecast';
import SunInfo from '../components/SunInfo';
import WindInfo from '../components/WindInfo';
import { getWeatherByCity } from '../services/weatherService';
//import WeatherInfo from '../components/WeatherInfo';
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
    console.log(weatherId);
    if (weatherId >= 200 && weatherId < 300) {
      setBackgroundImage('/assets/thunderstorm.jpg');
    } else if (weatherId >= 300 && weatherId < 600) {
      setBackgroundImage('/assets/rain.jpg');
    } else if (weatherId >= 600 && weatherId < 700) {
      setBackgroundImage('/assets/snow.jpg');
    } else if (weatherId >= 700 && weatherId < 800) {
      setBackgroundImage('/assets/atmosphere.jpg');
    } else if (weatherId === 800) {
      setBackgroundImage('/assets/clear.jpg');
    } else if (weatherId > 800 && weatherId < 900) {
      setBackgroundImage('/assets/clouds.jpg');
    } else {
      setBackgroundImage('/assets/default.jpg');
    }
  };

  return (
    <div className="city-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
    {/* {error && <p>{error}</p>}
    {weather && <WeatherInfo weather={weather} />} */}
  
    <MainContainer>
      {error && <p>{error}</p>}
      {weather && (
        <>
          <CityInfo city={weather.city.name} country={weather.city.country} />
          <TemperatureInfo
            temp={weather.list[0].main.temp}
            feels_like={weather.list[0].main.feels_like}
            temp_min={weather.list[0].main.temp_min}
            temp_max={weather.list[0].main.temp_max}
            pressure={weather.list[0].main.pressure}
            visibility={weather.list[0].visibility / 1000}
            humidity={weather.list[0].main.humidity}
          />
          <HourlyForecast hourlyData={weather.list.slice(0, 8).map((item) => ({
            time: item.dt_txt,
            temp: item.main.temp
          }))} />
          <DailyForecast dailyData={weather.list.slice(0, 5).map((item) => ({
            date: item.dt_txt.split(' ')[0],
            temp: item.main.temp
          }))} />
          <SunInfo sunrise={new Date(weather.city.sunrise * 1000).toLocaleTimeString()} sunset={new Date(weather.city.sunset * 1000).toLocaleTimeString()} />
          <WindInfo windSpeed={weather.list[0].wind.speed} windDirection={weather.list[0].wind.deg} />
        </>
      )}
    </MainContainer>
    </div>
  );
};

export default CityPage;
