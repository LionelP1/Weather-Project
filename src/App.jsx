import { useState } from 'react'
import { fetchWeatherWithCity, fetchWeatherWithCoords, LocationInfo } from './api';
import SearchBar from './components/SearchBar.jsx'
function App() {
   const handleSubmit = () => {

   };
 return(
   <div>
      <h1>Hello</h1>
      <SearchBar handelSubmit={handleSubmit}></SearchBar>
   </div>

 );
}

export default App
