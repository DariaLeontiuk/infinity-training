import React, { useState, useEffect, Profiler } from 'react';
import WeatherInput from './components/WeatherInput';
import WeatherInfo from './components/WeatherInfo';
import { getWeatherByCity, getWeatherByLocation } from './services/weatherService';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getWeatherByLocation(latitude, longitude, setWeather, setError);
        },
        (error) => {
          console.error('Error getting location:', error);
          setError('Unable to retrieve your location');
        }
      );
    } else {
      setError('Geolocation is not supported by this browser');
    }
  }, []);

  const handleGetWeatherByCity = () => {
    getWeatherByCity(city, setWeather, setError);
  };

  const onRenderCallback = (
    id, 
    phase,
    actualDuration,
    baseDuration, 
    startTime, 
    commitTime, 
    interactions
  ) => {
    console.log(`Profiling ${id}: ${phase}`);
    console.log(`Actual duration: ${actualDuration}`);
    console.log(`Base duration: ${baseDuration}`);
    console.log(`Start time: ${startTime}`);
    console.log(`Commit time: ${commitTime}`);
    console.log('Interactions:', interactions);
  };

  return (
    <div className="App">
      <Profiler id="WeatherApp" onRender={onRenderCallback}>
        <h1>Weather App</h1>
        <WeatherInput
          city={city}
          setCity={setCity}
          getWeatherByCity
={handleGetWeatherByCity}
        />
        {error && <p>{error}</p>}
        {weather && (
          <WeatherInfo weather={weather} />
        )}
      </Profiler>
    </div>
  );
};

export default App;
