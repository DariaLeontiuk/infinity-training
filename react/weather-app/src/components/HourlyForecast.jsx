import React from 'react';
import styled from 'styled-components';

const HourlyForecastContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const HourlyItem = styled.div`
  flex: 1;
  padding: 10px;
`;

const HourlyForecast = ({ hourlyData }) => (
  <HourlyForecastContainer>
    {hourlyData.map((hour, index) => (
      <HourlyItem key={index}>
        <p>{hour.time}</p>
        <p>{hour.temp}°C</p>
      </HourlyItem>
    ))}
  </HourlyForecastContainer>
);

export default HourlyForecast;