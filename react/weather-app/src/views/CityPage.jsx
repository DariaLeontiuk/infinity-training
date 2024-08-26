import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useWeather } from "../hooks/useWeather";
import { getBackgroundImageByWeatherId } from "../utils/backgroundUtils";
import { getBackgroundVideoByWeatherId } from "../utils/videoUtils";
import {
  getDayFromDateTime,
  getWeekdayFromDateTime,
  getTemperatureForSelectedTime,
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
  const { weather, status, error } = useWeather(cityName);
  const [bgimage, setBackgroundImage] = useState("");
  const [videoSrc, setVideoScr] = useState("");
  const [selectedHour, setSelectedHour] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    if (weather && weather.list && weather.list[0] && weather.list[0].weather) {
      setBackgroundImage(
        getBackgroundImageByWeatherId(weather.list[0].weather[0].id)
      );
      setVideoScr(
        getBackgroundVideoByWeatherId(weather.list[0].weather[0].id)
      )
      setSelectedDay(getDayFromDateTime(weather.list[0].dt_txt));
    }
  }, [weather]);

  useEffect(() => {
    if (selectedDay && weather) {
      const dayData = weather.list.filter(
        (item) => getDayFromDateTime(item.dt_txt) === selectedDay
      );
      const selectedWeatherId = selectedHour
        ? dayData.find(
            (item) => getTimeFromDateTime(item.dt_txt) === selectedHour
          )?.weather[0].id
        : getMiddayTemperatureData(dayData, selectedDay)?.weather[0].id;

      if (selectedWeatherId) {
        setBackgroundImage(getBackgroundImageByWeatherId(selectedWeatherId));
        setVideoScr(getBackgroundVideoByWeatherId(selectedWeatherId));
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
      {status === "loading" && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <MainContainer>
        {weather && (
          <>
            <CityInfo city={weather.city.name} country={weather.country} />
            <TemperatureInfo
              temp={Math.round(
                getTemperatureForSelectedTime(
                  weather,
                  selectedDay,
                  selectedHour
                )?.main.temp
              )}
              feels_like={Math.round(
                getTemperatureForSelectedTime(
                  weather,
                  selectedDay,
                  selectedHour
                )?.main.feels_like
              )}
              temp_min={Math.round(
                getTemperatureForSelectedTime(
                  weather,
                  selectedDay,
                  selectedHour
                )?.main.temp_min
              )}
              temp_max={Math.round(
                getTemperatureForSelectedTime(
                  weather,
                  selectedDay,
                  selectedHour
                )?.main.temp_max
              )}
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
              windSpeed={
                getTemperatureForSelectedTime(
                  weather,
                  selectedDay,
                  selectedHour
                )?.wind.speed
              }
              windDirection={
                getTemperatureForSelectedTime(
                  weather,
                  selectedDay,
                  selectedHour
                )?.wind.deg
              }
            />
          </>
        )}
      </MainContainer>
    </CityPageContainer>
  );
};

export default CityPage;
