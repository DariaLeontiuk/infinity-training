import { useState, useEffect } from "react";
import { getBackgroundImageByWeatherId } from "../utils/backgroundUtils";
import { getBackgroundVideoByWeatherId } from "../utils/videoUtils";
import {
  getDayFromDateTime,
  getTemperatureForSelectedTime,
  getTimeFromDateTime,
  getMiddayTemperatureData,
  filterWeatherByDay,
} from "../utils/dateUtils";

export const useCityWeather = (weather) => {
  const [bgimage, setBackgroundImage] = useState("");
  const [videoSrc, setVideoSrc] = useState("");
  const [selectedHour, setSelectedHour] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    if (weather && weather.list && weather.list[0] && weather.list[0].weather) {
      setBackgroundImage(getBackgroundImageByWeatherId(weather.list[0].weather[0].id));
      setVideoSrc(getBackgroundVideoByWeatherId(weather.list[0].weather[0].id));
      setSelectedDay(getDayFromDateTime(weather.list[0].dt_txt));
    }
  }, [weather]);

  useEffect(() => {
    if (selectedDay && weather) {
      const dayData = filterWeatherByDay(weather.list, selectedDay);
      const selectedWeatherId = selectedHour
        ? dayData.find(
            (item) => getTimeFromDateTime(item.dt_txt) === selectedHour
          )?.weather[0].id
        : getMiddayTemperatureData(dayData, selectedDay)?.weather[0].id;

      if (selectedWeatherId) {
        setBackgroundImage(getBackgroundImageByWeatherId(selectedWeatherId));
        setVideoSrc(getBackgroundVideoByWeatherId(selectedWeatherId));
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

  return {
    bgimage,
    videoSrc,
    selectedDay,
    selectedHour,
    handleDayClick,
    handleHourClick,
    getTemperatureForSelectedTime: () =>
      getTemperatureForSelectedTime(weather, selectedDay, selectedHour),
  };
};