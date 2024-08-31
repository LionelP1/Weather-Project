import React, { useState, useEffect } from 'react';
import {fetchWeatherWithCity, fetchWeatherWithCoords, LocationInfo} from '../Api.js'

const WeatherSearch = (handleSubmit) => {
  const [city, setCity] = useState('');
  const [locationSuggestions, setLocationSuggestions] = useState([]);

  const handleSearchInput = async () => {

  };

  const handleSelectLocation = async () => {

  };

  return (
    <div>
      <div className='searchBar'>
        <input 
            type="text" 
            value={city} 
            onChange={handleSearchInput} 
            placeholder="Enter Location (City, [State/Province], Country Code)" 
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      <ul className="locationSuggestions">
        {locationSuggestions.map((location, index) => (
          <li className="suggestionElement" key={index} onClick={() => handleSelectLocation(location)}>
            {location.name}, {location.state}, {location.country}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default WeatherSearch;
