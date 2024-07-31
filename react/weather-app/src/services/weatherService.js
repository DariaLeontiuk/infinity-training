import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export const getWeatherByCity = async (city, setWeather, setError) => {
  try {
    const geoResponse = await axios.get('https://api.openweathermap.org/geo/1.0/direct', {
      params: {
        q: city,
        limit: 1,
        appid: API_KEY
      }
    });

    if (geoResponse.data.length === 0) {
      throw new Error('City not found');
    }

    const { lat, lon, country } = geoResponse.data[0];

    const weatherResponse = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
      params: {
        lat: lat,
        lon: lon,
        units: 'metric',
        appid: API_KEY
      }
    });

    setWeather({ ...weatherResponse.data, country });
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

export const getWeatherByLocation = async (lat, lon, setWeather, setError) => {
  try {
    const weatherResponse = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
      params: {
        lat: lat,
        lon: lon,
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
      setError('Unable to fetch weather data for your location');
    }
    setWeather(null);
  }
};