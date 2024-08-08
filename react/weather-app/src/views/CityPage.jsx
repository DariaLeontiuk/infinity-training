import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherByCity } from '../redux/weatherSlice';
import styled from 'styled-components';
import MainContainer from '../components/MainContainer';
import CityInfo from '../components/CityInfo';
import TemperatureInfo from '../components/TemperatureInfo';
import HourlyForecast from '../components/HourlyForecast';
import DailyForecast from '../components/DailyForecast';
import SunInfo from '../components/SunInfo';
import WindInfo from '../components/WindInfo';

const CityPageContainer = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  height: 100vh;
`;

const CityPage = () => {
  const { cityName } = useParams();
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather.data);
  const status = useSelector((state) => state.weather.status);
  const error = useSelector((state) => state.weather.error);
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    if (cityName) {
      dispatch(fetchWeatherByCity(cityName));
    }
  }, [cityName, dispatch]);

  useEffect(() => {
    if (weather && weather.list && weather.list[0] && weather.list[0].weather) {
      updateBackgroundImage(weather.list[0].weather[0].id);
    }
  }, [weather]);

  const updateBackgroundImage = (weatherId) => {
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
    <CityPageContainer style={{backgroundImage: `url(${backgroundImage})`}}>
      <MainContainer>
        {status === 'loading' && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {weather && (
          <>
            <CityInfo city={weather.city.name} country={weather.country} />
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
              temp: item.main.temp,
            }))} />
            <DailyForecast dailyData={weather.list.slice(0, 5).map((item) => ({
              date: item.dt_txt.split(' ')[0],
              temp: item.main.temp,
            }))} />
            <SunInfo sunrise={new Date(weather.city.sunrise * 1000).toLocaleTimeString()} sunset={new Date(weather.city.sunset * 1000).toLocaleTimeString()} />
            <WindInfo windSpeed={weather.list[0].wind.speed} windDirection={weather.list[0].wind.deg} />
          </>
        )}
      </MainContainer>
    </CityPageContainer>
  );
};

export default CityPage;