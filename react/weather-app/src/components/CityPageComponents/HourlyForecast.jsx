import React from "react";
import styled from "styled-components";
import WeatherIcon from "./WeatherIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

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

const HourlyForecastContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  grid-column: 2 / 4;
  grid-row: 1 / 5;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  padding: 10px;
  gap: 10px;
`;

const HoursContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
      <HeaderText>
        <FontAwesomeIcon icon={faClock} style={{ marginRight: "8px" }} />
        HOURLY FORECAST
      </HeaderText>
      <Separator />
      <HoursContainer>
        {hourlyData.map((hour) => (
          <HourContainer
            key={hour.time}
            $isSelected={selectedHour === hour.time}
            onClick={() => onHourClick(hour.time)}
          >
            <p>{hour.time}</p>
            <p>{hour.temp}°C</p>
            <WeatherIcon icon={hour.icon} size="100px" />
          </HourContainer>
        ))}
      </HoursContainer>
    </HourlyForecastContainer>
  );
};

export default HourlyForecast;
