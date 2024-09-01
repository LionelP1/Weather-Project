import React from 'react';
import SearchBar from './SearchBar';
import '../styles/Header.css';

const Header = ({ city, locationSuggestions, handleSearchInput, handleSearchSubmit, handleSelectLocation, setUnit }) => {
    const changeUnitCelsius = () => {
        setUnit('C');
    };
    
    const changeUnitFahrenheit = () => {
        setUnit('F');
    };

    return (
        <div className="header">
            <div className="logo-title-wrapper">
                <img className="logo" alt="Logo" />
                <h1 className="title">Weather Project</h1>
            </div>
            <SearchBar 
                city={city}
                locationSuggestions={locationSuggestions}
                handleSearchInput={handleSearchInput}
                handleSubmit={handleSearchSubmit}
                handleSelectLocation={handleSelectLocation}
            />
            <div className="unit-buttons">
                <button className="celsius-btn" onClick={changeUnitCelsius}>°C</button>
                <button className="fahrenheit-btn" onClick={changeUnitFahrenheit}>°F</button>
            </div>
        </div>
    );
};

export default Header;

