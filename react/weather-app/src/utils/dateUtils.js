export const getDayFromDateTime = (dateTime) => {
  return dateTime.split(" ")[0];
};

export const getWeekdayFromDateTime = (dateTime) => {
  const date = new Date(dateTime);
  return date.toLocaleDateString('en-US',
    {
      weekday:'short'
    }
  )
}

export const getTimeFromDateTime = (dateTime) => {
  return dateTime.split(" ")[1].slice(0, 5);
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
    const middayData = dayData.find((item) => item.dt_txt.includes("12:00"));
    return middayData ? middayData: dayData[0];
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

export const getMiddayTemperatureData = (list, date) => {
  return (
    list.find(
      (item) =>
        getDayFromDateTime(item.dt_txt) === date &&
        getTimeFromDateTime(item.dt_txt) === "12:00"
    ) || list.find((item) => getDayFromDateTime(item.dt_txt) === date)
  );
};
