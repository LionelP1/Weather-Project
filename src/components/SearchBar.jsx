import React, { useState, useEffect } from 'react';
import {fetchWeatherWithCity, fetchWeatherWithCoords, LocationInfo} from '../Api.js'

const SearchBar = ({handleSubmit}) => {
  const [city, setCity] = useState('');
  const [locationSuggestions, setLocationSuggestions] = useState([]);

  // Handles search input changes
  const handleSearchInput = async (e) => {
    const input = e.target.value;
    setCity(input);
    
    const locations = await LocationInfo(input);
    setLocationSuggestions(locations);
  };

  //Handle user clicking on location
  const handleSelectLocation = async () => {
    
  };

  return (
    <div>
      <div className='searchBar'>
        <input 
            type="text" 
            value={city} 
            onChange={handleSearchInput} 
            placeholder="Enter in a City" 
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      <ul className="locationSuggestions">
        {locationSuggestions.map((location, index) => (
          <li className="suggestionElement" key={index} onClick={() => handleSelectLocation(location)}>
              {location.name}
              {location.state ? `, ${location.state}` : ''}
              , {location.country}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default SearchBar;
