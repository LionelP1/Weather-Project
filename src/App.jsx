import React, { useState } from 'react';
import SearchBar from './SearchBar';
import TodayWeather from './TodayWeather';
import OtherInfo from './OtherInfo';
import Header from './Header';

import { fetchWeatherWithCity, LocationInfo } from '../Api.js';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [locationSuggestions, setLocationSuggestions] = useState([]);

  const handleCityChange = async (newCity) => {
    setCity(newCity);
    try {
      const data = await fetchWeatherWithCity(newCity);
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSearchSubmit = async () => {
    if (city) {
      try {
        const data = await fetchWeatherWithCity(city);
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  };

  const handleSearchInput = async (input) => {
    setCity(input);
    try {
      const locations = await LocationInfo(input);
      setLocationSuggestions(locations);
    } catch (error) {
      console.error('Error fetching location data:', error);
    }
  };

  const handleSelectLocation = async (location) => {
    setCity(location.name);
    try {
      const data = await fetchWeatherWithCity(location.name);
      setWeatherData(data);
      setLocationSuggestions([]);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
    </div>
  );
};

export default App;
