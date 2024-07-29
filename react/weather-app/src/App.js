import React, {useState, Profiler} from 'react';
import axios from 'axios';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = '580a4a986266bac40755b6a887d3ab17';

  const getWeatherByCity = async () => {

    try {
      const geoResponse = await axios.get(`https://api.openweathermap.org/geo/1.0/direct`, {
        params: {
          q: city,
          limit: 1,
          appid: API_KEY
        }
      });

      if (geoResponse.data.length === 0) {
        throw new Error('City not found');
      }

      const { lat, lon } = geoResponse.data[0];

      const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
        params: {
          lat: lat,
          lon: lon,
          exclude: 'hourly,daily',
          units: 'metric',
          appid: API_KEY
        }
      });

      setWeather(weatherResponse.data);
      setError(null);
    } catch (err) {
      console.error('Error details:', err.response ? err.response.data : err.message);
      if (err.response && err.response.status === 401) {
        setError('Invalid API key');
      } else {
        setError('City not found or unable to fetch weather data');
      }
      setWeather(null);
    }
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
    console.log(`Interactions:`, interactions);
  };

  return (
    <div className="App">
      <Profiler id="WeatherApp" onRender={onRenderCallback}>
      <h1>Weather App</h1>
      <div>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button onClick={getWeatherByCity}>Get Weather</button>
      </div>
      {error && <p>{error}</p>}
      {weather && (
        <div>
          <h2>Weather Information for {city}</h2>
          {weather.list && weather.list.length > 0 && (
            <>
              <p>Temperature: {weather.list[0].main.temp}°C</p>
              <p>Feels like: {weather.list[0].main.feels_like}°C</p>
              <p>Weather: {weather.list[0].weather[0].description}</p>
              <p>Wind speed: {weather.list[0].wind.speed} m/s</p>
            </>
          )}
        </div>
      )}
      </Profiler>
    </div>
  );
};

export default App;
