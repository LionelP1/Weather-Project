import React from 'react';
import '../styles/OtherInfo.css';

const OtherInfo = ({ weatherData }) => {
  const { wind, main, visibility } = weatherData;

  function getWindDirection(degree) {
    if (degree >= 337.5 || degree < 22.5) return "N";
    if (degree >= 22.5 && degree < 67.5) return "NE";
    if (degree >= 67.5 && degree < 112.5) return "E";
    if (degree >= 112.5 && degree < 157.5) return "SE";
    if (degree >= 157.5 && degree < 202.5) return "S";
    if (degree >= 202.5 && degree < 247.5) return "SW";
    if (degree >= 247.5 && degree < 292.5) return "W";
    if (degree >= 292.5 && degree < 337.5) return "NW";
  }

  return (
    <div className="info-container">
      <div className="wind-info">
        <h3 className="info-title">Wind</h3>
        <p className="info"> {(wind.speed * 3.6).toFixed(1)} km/h {getWindDirection(wind.deg)}</p> 
      </div>
      <div className="pressure-info">
        <h3 className="info-title">Pressure</h3>
        <p className="info">{(0.1 * main.pressure).toFixed(1)} kPa</p> {/* Pressure in hectopascals */}
      </div>
      <div className="humidity-info">
        <h3 className="info-title">Humidity</h3>
        <p className="info">{main.humidity} %</p>
      </div>
      <div className="visibility-info">
        <h3 className="info-title">Visibility</h3>
        <p className="info">{(visibility / 1000).toFixed(1)} km</p> {/* Convert meters to kilometers */}
      </div>
    </div>
  );
};

export default OtherInfo;