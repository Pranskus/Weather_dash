import React, { useState, useCallback } from "react";
import styled from "styled-components";
import WeatherForecast from "./WeatherForecast";
import CelestialInfo from "./CelestialInfo";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const ForecastContainer = styled.div`
  height: 300px;
`;

const CelestialContainer = styled.div`
  height: 200px;
`;

const WeatherDashboard = React.memo(({ currentWeather, forecast }) => {
  console.log(
    "WeatherDashboard rendering with data:",
    currentWeather,
    forecast
  );
  const [selectedDayData, setSelectedDayData] = useState(currentWeather);

  const handleDaySelect = useCallback(
    (index) => {
      const allDays = [currentWeather, ...forecast.slice(0, 7)];
      setSelectedDayData(allDays[index]);
    },
    [currentWeather, forecast]
  );

  return (
    <DashboardContainer data-testid="weather-dashboard">
      <ForecastContainer>
        <WeatherForecast
          currentWeather={currentWeather}
          forecast={forecast}
          onDaySelect={handleDaySelect}
        />
      </ForecastContainer>
      <CelestialContainer>
        <CelestialInfo data={selectedDayData} />
      </CelestialContainer>
    </DashboardContainer>
  );
});

export default WeatherDashboard;
