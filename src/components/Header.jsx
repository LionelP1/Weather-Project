import React from 'react';
import SearchBar from './SearchBar';

const Header = ({ city, locationSuggestions, handleSearchInput, handleSearchSubmit, handleSelectLocation }) => {
    const empty = () => {
    };

    return (
        <div className="header">
            <img className="logo" alt="Logo"/>
            <SearchBar 
                city={city}
                locationSuggestions={locationSuggestions}
                handleSearchInput={handleSearchInput}
                handleSubmit={handleSearchSubmit}
                handleSelectLocation={handleSelectLocation}
            />
            <button className="celsiusBtn" onClick={empty}>°C</button>
            <button className="fahrenheiBtn" onClick={empty}>°F</button>
        </div>
    );
};

export default Header;

