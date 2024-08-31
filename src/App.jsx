import { useState } from 'react';
import { fetchWeatherWithCity, fetchWeatherWithCoords, LocationInfo } from './api';
import SearchBar from './components/SearchBar.jsx';
import TodayWeather from './components/TodayWeather.jsx';

function App() {
  const handleSubmit = () => {
    // handle submit logic
  };

  // Parse the JSON string into a JavaScript object
  const data = JSON.parse('{"coord":{"lon":-79.9496,"lat":43.2334},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":27.44,"feels_like":28,"temp_min":26.05,"temp_max":28.27,"pressure":1013,"humidity":52,"sea_level":1013,"grnd_level":989},"visibility":10000,"wind":{"speed":4.12,"deg":270},"clouds":{"all":75},"dt":1725139209,"sys":{"type":2,"id":2083429,"country":"CA","sunrise":1725101015,"sunset":1725148607},"timezone":-14400,"id":5969785,"name":"Hamilton","cod":200}');

  return (
    <div>
      <h1>Hello</h1>
      <SearchBar handleSubmit={handleSubmit} />
      <TodayWeather weatherData={data} />
    </div>
  );
}

export default App;

