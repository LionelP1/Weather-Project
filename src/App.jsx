import { useState, useEffect } from 'react';
import { fetchWeatherWithCity, fetchWeatherWithCoords, LocationInfo } from './api';
import TodayWeather from './components/TodayWeather.jsx';
import OtherInfo from './components/OtherInfo.jsx';
import Header from './components/Header.jsx';
import './styles/App.css';

const App = () => {
  const defaultCity = 'New York';
  const [city, setCity] = useState(defaultCity);
  const [weatherData, setWeatherData] = useState(null);
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [unit, setUnit] = useState('C');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await fetchWeatherWithCity(defaultCity);
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, []);

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
      const data = await fetchWeatherWithCoords(location.latitude, location.longitude);
      setWeatherData(data);
      setLocationSuggestions([]);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div id="app">
      <Header
        city={city}
        locationSuggestions={locationSuggestions}
        handleSearchInput={handleSearchInput}
        handleSearchSubmit={handleSearchSubmit}
        handleSelectLocation={handleSelectLocation}
        setUnit={setUnit}
      />
      {weatherData && (
      <>
        <TodayWeather weatherData={weatherData} unit={unit}/>
        <OtherInfo weatherData={weatherData} />
      </>

      )}

    </div>
  );
};

export default App;


