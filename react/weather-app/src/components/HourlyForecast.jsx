import React from "react";
import styled from "styled-components";
import WeatherIcon from "./WeatherIcon";

const HourlyForecastContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  grid-column: 2 / 4;
  grid-row: 5 / 11;
  gap: 10px;
`;

const HourContainer = styled.div`
  flex: 1;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  background-color: ${({ $isSelected }) =>
    $isSelected ? "#d3d3d350" : "transparent"};
`;

const HourlyForecast = ({ hourlyData, onHourClick, selectedHour }) => {
  console.log(hourlyData);
  return (
    <HourlyForecastContainer>
      {hourlyData.map((hour) => (
        <HourContainer
          key={hour.time}
          $isSelected={selectedHour === hour.time}
          onClick={() => onHourClick(hour.time)}
        >
          <p>{hour.time}</p>
          <p>{hour.temp}°C</p>
          <WeatherIcon icon={hour.icon} size="100px"/>
        </HourContainer>
      ))}
    </HourlyForecastContainer>
  );
};

export default HourlyForecast;
