import React from 'react';

const SearchBar = ({ city, locationSuggestions, handleSubmit, handleSearchInput, handleSelectLocation }) => {
  
  const onInputChange = async (e) => {
    const input = e.target.value;
    handleSearchInput(input);
  };

  return (
    <div>
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













// import React, { useState, useEffect } from 'react';
// import {fetchWeatherWithCity, fetchWeatherWithCoords, LocationInfo} from '../Api.js'

// const SearchBar = ({handleSubmit}) => {
//   const [city, setCity] = useState('');
//   const [locationSuggestions, setLocationSuggestions] = useState([]);

//   // Handles search input changes
//   const handleSearchInput = async (e) => {
//     const input = e.target.value;
//     setCity(input);
    
//     const locations = await LocationInfo(input);
//     setLocationSuggestions(locations);
//   };

//   //Handle user clicking on location
//   const handleSelectLocation = async () => {
    
//   };

//   return (
//     <div>
//       <div className='searchBar'>
//         <input 
//             type="text" 
//             value={city} 
//             onChange={handleSearchInput} 
//             placeholder="Enter in a City" 
//         />
//         <button onClick={handleSubmit}>Search</button>
//       </div>
//       <ul className="locationSuggestions">
//         {locationSuggestions.map((location, index) => (
//           <li className="suggestionElement" key={index} onClick={() => handleSelectLocation(location)}>
//               {location.name}
//               {location.state ? `, ${location.state}` : ''}
//               , {location.country}
//           </li>
//         ))}
//       </ul>

//     </div>
//   );
// };

// export default SearchBar;
