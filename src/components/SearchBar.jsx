import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ city, locationSuggestions, handleSubmit, handleSearchInput, handleSelectLocation }) => {
  
  const onInputChange = async (e) => {
    const input = e.target.value;
    handleSearchInput(input);
  };

  return (
    <div className="search-container">
      <div className="searchBar">
        <input 
          type="text" 
          value={city} 
          onChange={onInputChange} 
          placeholder="Enter a City" 
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {locationSuggestions.length > 0 && (
        <ul className="locationList">
          {locationSuggestions.map((location, index) => (
            <li 
              className="locationElement" 
              key={index} 
              onClick={() => handleSelectLocation(location)}
            >
              {location.name}
              {location.state ? `, ${location.state}` : ''}
              , {location.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;