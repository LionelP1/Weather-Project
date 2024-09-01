import React from 'react';
import SearchBar from './SearchBar';

const Header = () => {
    const empty = () => {

    };

  return (
    <div className="header">
      <img className="logo">IMAGE HERE</img>
      <SearchBar></SearchBar>
      <button className="celsiusBtn" onClick={empty}></button>
      <button className="fahrenheiBtn" onClick={empty}></button>
    </div>
  );
};

export default Header;