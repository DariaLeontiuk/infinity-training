export const getDayFromDateTime = (dateTime) => {
  return dateTime.split(" ")[0];
};

export const getTimeFromDateTime = (dateTime) => {
  return dateTime.split(" ")[1].slice(0, 8);
};

export const filterWeatherByDay = (weatherList, selectedDay) => {
  return weatherList.filter((item) => item.dt_txt.includes(selectedDay));
};

export const getTemperatureForSelectedTime = (
  weather,
  selectedDay,
  selectedHour
) => {
  if (!weather || !selectedDay) return null;

  const dayData = filterWeatherByDay(weather.list, selectedDay);

  if (selectedHour) {
    const hourData = dayData.find((item) => item.dt_txt.includes(selectedHour));
    return hourData ? hourData : dayData[0];
  } else {
    return dayData[0];
  }
};

export const getDailyData = (list) => {
  const dailyData = [];
  const seenDates = new Set();

  list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];
    if (!seenDates.has(date)) {
      dailyData.push(item);
      seenDates.add(date);
    }
  });

  return dailyData.slice(0, 5);
};
