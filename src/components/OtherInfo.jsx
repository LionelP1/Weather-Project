import React from 'react';

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
    <div className="infoContainer">
      <div className="windInfo">
        <h3 className="infoTitle">Wind</h3>
        <p className="info"> {(wind.speed * 3.6).toFixed(1)} km/h {getWindDirection(wind.deg)}</p> 
      </div>
      <div className="pressureInfo">
        <h3 className="infoTitle">Pressure</h3>
        <p className="info">{(0.1 * main.pressure).toFixed(1)} kPa</p> {/* Pressure in hectopascals */}
      </div>
      <div className="humidityInfo">
        <h3 className="infoTitle">Humidity</h3>
        <p className="info">{main.humidity} %</p>
      </div>
      <div className="visibilityInfo">
        <h3 className="infoTitle">Visibility</h3>
        <p className="info">{(visibility / 1000).toFixed(1)} km</p> {/* Convert meters to kilometers */}
      </div>
    </div>
  );
};

export default OtherInfo;