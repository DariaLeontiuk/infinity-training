import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useWeather } from "../hooks/useWeather";
import { useCityWeather } from "../hooks/useCityWeather";
import useWeatherByLocation from "../hooks/useWeatherByLocation";
import {
  getDayFromDateTime,
  getWeekdayFromDateTime,
  getTimeFromDateTime,
  getDailyData,
  getMiddayTemperatureData,
} from "../utils/dateUtils";
import styled from "styled-components";
import MainContainer from "../components/CityPageComponents/MainContainer";
import CityInfo from "../components/CityPageComponents/CityInfo";
import TemperatureInfo from "../components/CityPageComponents/TemperatureInfoComponents/TemperatureInfo";
import HourlyForecast from "../components/CityPageComponents/HourlyForecast";
import DailyForecast from "../components/CityPageComponents/DailyForecast";
import SunInfo from "../components/CityPageComponents/SunInfo";
import WindInfo from "../components/CityPageComponents/WindInfo";
import Header from "../components/Header";

const CityPageContainer = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.$bgimage});
  height: 100vh;
  overflow: auto;
`;

const CityPage = () => {
  const { cityName } = useParams();
  const location = useLocation();

  const { weather: weatherByCity, status: statusByCity, error: errorByCity } = useWeather(cityName);
  const {
    weather: weatherByLocation,
    status: locationStatus,
    error: locationError,
    reloadWeatherByLocation, 
  } = useWeatherByLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      reloadWeatherByLocation();
    }
  }, [location.pathname, reloadWeatherByLocation]);

  const weather = cityName ? weatherByCity : weatherByLocation;
  const status = cityName ? statusByCity : locationStatus;
  const error = cityName ? errorByCity : locationError;


  const {
    bgimage,
    videoSrc,
    selectedDay,
    selectedHour,
    handleDayClick,
    handleHourClick,
    getTemperatureForSelectedTime,
  } = useCityWeather(weather);

  return (
    <CityPageContainer $bgimage={bgimage}>
      <Header />
      {(status === "loading" || locationStatus === "loading") && (
        <p>Loading...</p>
      )}
      {(error || locationError) && <p>{error || locationError}</p>}
      <MainContainer>
        {weather && (
          <>
            <CityInfo city={weather.city.name} country={weather.country} />
            <TemperatureInfo
              temp={Math.round(getTemperatureForSelectedTime()?.main.temp)}
              feels_like={Math.round(
                getTemperatureForSelectedTime()?.main.feels_like
              )}
              temp_min={Math.round(
                getTemperatureForSelectedTime()?.main.temp_min
              )}
              temp_max={Math.round(
                getTemperatureForSelectedTime()?.main.temp_max
              )}
              pressure={getTemperatureForSelectedTime()?.main.pressure}
              visibility={getTemperatureForSelectedTime()?.visibility / 1000}
              humidity={getTemperatureForSelectedTime()?.main.humidity}
              description={
                getTemperatureForSelectedTime()?.weather[0].description
              }
              videoSrc={videoSrc}
            />
            <DailyForecast
              dailyData={getDailyData(weather.list).map((item) => {
                const middayData = getMiddayTemperatureData(
                  weather.list,
                  getDayFromDateTime(item.dt_txt)
                );
                return {
                  weekday: getWeekdayFromDateTime(middayData.dt_txt),
                  date: getDayFromDateTime(middayData.dt_txt),
                  temp: Math.round(middayData.main.temp),
                  icon: middayData.weather[0].icon,
                };
              })}
              onDayClick={handleDayClick}
              selectedDay={selectedDay}
            />
            <HourlyForecast
              hourlyData={weather.list
                .filter(
                  (item) => getDayFromDateTime(item.dt_txt) === selectedDay
                )
                .map((item) => ({
                  time: getTimeFromDateTime(item.dt_txt),
                  temp: Math.round(item.main.temp),
                  icon: item.weather[0].icon,
                }))}
              onHourClick={handleHourClick}
              selectedHour={selectedHour}
            />
            <SunInfo
              sunrise={new Date(
                weather.city.sunrise * 1000
              ).toLocaleTimeString()}
              sunset={new Date(weather.city.sunset * 1000).toLocaleTimeString()}
            />
            <WindInfo
              windSpeed={getTemperatureForSelectedTime()?.wind.speed}
              windDirection={getTemperatureForSelectedTime()?.wind.deg}
            />
          </>
        )}
      </MainContainer>
    </CityPageContainer>
  );
};

export default CityPage;
