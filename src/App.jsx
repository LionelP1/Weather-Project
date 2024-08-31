import { useState } from 'react'
import { fetchWeather, fetch7DayForecast, fetchHourlyForecastNext5Hours } from './api';

function App() {
  console.log(fetchWeather('Toronto'));
  console.log(fetch7DayForecast(43.7,79.42));
  console.log(fetchHourlyForecastNext5Hours(43.7,79.42));
 return(
    <h1>Hello</h1>
 );
}

export default App
