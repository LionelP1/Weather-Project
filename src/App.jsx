import { useState } from 'react';
import { fetchWeatherWithCity, fetchWeatherWithCoords, LocationInfo } from './api';
import SearchBar from './components/SearchBar.jsx';
import TodayWeather from './components/TodayWeather.jsx';
import OtherInfo from './components/OtherInfo.jsx';
function App() {
  const handleSubmit = () => {
    // handle submit logic
  };

  // Parse the JSON string into a JavaScript object
  const data = JSON.parse('{"coord":{"lon":-79.9496,"lat":43.2334},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":25.08,"feels_like":25.13,"temp_min":25.08,"temp_max":26.05,"pressure":1012,"humidity":57,"sea_level":1012,"grnd_level":989},"visibility":10000,"wind":{"speed":3.09,"deg":260},"clouds":{"all":75},"dt":1725147670,"sys":{"type":1,"id":818,"country":"CA","sunrise":1725101015,"sunset":1725148607},"timezone":-14400,"id":5969785,"name":"Hamilton","cod":200}');

  return (
    <div>
      <h1>Hello</h1>
      <SearchBar handleSubmit={handleSubmit} />
      <TodayWeather weatherData={data} />
      <OtherInfo weatherData={data} />
    </div>
  );
}

export default App;

