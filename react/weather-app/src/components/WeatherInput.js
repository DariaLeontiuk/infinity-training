import React, { useState }from 'react';

const WeatherInput = ({ onCitySearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if(city.trim() !== ''){
      onCitySearch(city);
    }
  }
  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={handleSearch}>Get Weather</button>
    </div>
  );
};

export default WeatherInput;