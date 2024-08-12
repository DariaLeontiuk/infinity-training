import React from "react";
import styled from "styled-components";
import WeatherIcon from "./WeatherIcon";

const DailyForecastContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  grid-column: 2 / 4;
  grid-row: 1 / 5;
  gap: 10px;
`;

const DayContainer = styled.div`
  flex: 1;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  background-color: ${({ $isSelected }) =>
    $isSelected ? "#d3d3d350" : "transparent"};
`;

const DailyForecast = ({ dailyData, onDayClick, selectedDay }) => {
  console.log(dailyData);
  return (
    <DailyForecastContainer>
      {dailyData.map((day) => (
        <DayContainer
          key={day.date}
          $isSelected={selectedDay === day.date}
          onClick={() => onDayClick(day.date)}
        >
          <p>{day.weekday}</p>
          <p>{day.date}</p>
          <p>{day.temp}°C</p>
          <WeatherIcon icon={day.icon} size="100px" />
        </DayContainer>
      ))}
    </DailyForecastContainer>
  );
};

export default DailyForecast;
