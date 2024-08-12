import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useWeather } from "../redux/useWeather";
import { getBackgroundImageByWeatherId } from "../utils/backgroundUtils";
import {
  getDayFromDateTime,
  getTemperatureForSelectedTime,
  getTimeFromDateTime,
  getDailyData,
} from "../utils/dateUtils";
import styled from "styled-components";
import MainContainer from "../components/MainContainer";
import CityInfo from "../components/CityInfo";
import TemperatureInfo from "../components/TemperatureInfo";
import HourlyForecast from "../components/HourlyForecast";
import DailyForecast from "../components/DailyForecast";
import SunInfo from "../components/SunInfo";
import WindInfo from "../components/WindInfo";

const CityPageContainer = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.$bgimage});
  height: 100vh;
`;

const CityPage = () => {
  const { cityName } = useParams();
  const { weather, status, error } = useWeather(cityName);
  const [bgimage, setBackgroundImage] = useState("");
  const [selectedHour, setSelectedHour] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    if (weather && weather.list && weather.list[0] && weather.list[0].weather) {
      setBackgroundImage(
        getBackgroundImageByWeatherId(weather.list[0].weather[0].id)
      );
      setSelectedDay(getDayFromDateTime(weather.list[0].dt_txt));
    }
  }, [weather]);

  useEffect(() => {
    if (selectedDay) {
      const dayData = weather.list.filter(
        (item) => getDayFromDateTime(item.dt_txt) === selectedDay
      );
      const selectedWeatherId = selectedHour
        ? dayData.find(
            (item) => getTimeFromDateTime(item.dt_txt) === selectedHour
          )?.weather[0].id
        : dayData[0]?.weather[0].id;

      if (selectedWeatherId) {
        setBackgroundImage(getBackgroundImageByWeatherId(selectedWeatherId));
      }
    }
  }, [selectedDay, selectedHour, weather]);

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setSelectedHour(null);
  };

  const handleHourClick = (hour) => {
    setSelectedHour(hour);
  };

  return (
    <CityPageContainer $bgimage={bgimage}>
      <MainContainer>
        {status === "loading" && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {weather && (
          <>
            <CityInfo city={weather.city.name} country={weather.country} />
            <TemperatureInfo
              temp={
                getTemperatureForSelectedTime(
                  weather,
                  selectedDay,
                  selectedHour
                )?.main.temp
              }
              feels_like={
                getTemperatureForSelectedTime(
                  weather,
                  selectedDay,
                  selectedHour
                )?.main.feels_like
              }
              temp_min={
                getTemperatureForSelectedTime(
                  weather,
                  selectedDay,
                  selectedHour
                )?.main.temp_min
              }
              temp_max={
                getTemperatureForSelectedTime(
                  weather,
                  selectedDay,
                  selectedHour
                )?.main.temp_max
              }
              pressure={
                getTemperatureForSelectedTime(
                  weather,
                  selectedDay,
                  selectedHour
                )?.main.pressure
              }
              visibility={
                getTemperatureForSelectedTime(
                  weather,
                  selectedDay,
                  selectedHour
                )?.visibility / 1000
              }
              humidity={
                getTemperatureForSelectedTime(
                  weather,
                  selectedDay,
                  selectedHour
                )?.main.humidity
              }
              description={
                getTemperatureForSelectedTime(
                  weather,
                  selectedDay,
                  selectedHour
                )?.weather[0].description
              }
            />
            <DailyForecast
              dailyData={getDailyData(weather.list).map((item) => ({
                date: getDayFromDateTime(item.dt_txt),
                temp: item.main.temp,
              }))}
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
                  temp: item.main.temp,
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
              windSpeed={weather.list[0].wind.speed}
              windDirection={weather.list[0].wind.deg}
            />
          </>
        )}
      </MainContainer>
    </CityPageContainer>
  );
};

export default CityPage;
