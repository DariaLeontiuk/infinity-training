import React from "react";
import styled from "styled-components";
import WeatherIcon from "./WeatherIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const HeaderText = styled.h2`
  font-size: 20px;
  color: #ffffff;
  margin: 0;
  padding-right: 10px;
`;

const Separator = styled.div`
  flex-grow: 1;
  height: 2px;
  background-color: #ffffff30;
`;

const DailyForecastContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  grid-column: 2 / 4;
  grid-row: 5 / 11;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  padding: 10px;
  gap: 10px;
`;

const DaysContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
      <HeaderText>
        <FontAwesomeIcon icon={faCalendar} style={{ marginRight: "8px" }} />
        5-DAY FORECAST
      </HeaderText>
      <Separator />
      <DaysContainer>
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
      </DaysContainer>
    </DailyForecastContainer>
  );
};

export default DailyForecast;
