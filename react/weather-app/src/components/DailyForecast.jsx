import React from 'react';
import styled from 'styled-components';

const DailyForecastContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const DailyItem = styled.div`
  flex: 1;
  padding: 10px;
`;

const DailyForecast = ({ dailyData }) => (
  <DailyForecastContainer>
    {dailyData.map((day, index) => (
      <DailyItem key={index}>
        <p>{day.date}</p>
        <p>{day.temp} °C</p>
      </DailyItem>
    ))}
  </DailyForecastContainer>
);

export default DailyForecast;