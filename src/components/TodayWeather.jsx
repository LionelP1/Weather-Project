import React from 'react';
import '../styles/TodayWeather.css';

const TodayWeather = ({ weatherData, unit }) => {
  const {
    weather,
    main: { temp, feels_like },
    sys: { country },
    name
  } = weatherData;

  const convertTemp = (celsiusTemp, toUnit) => {
    if (toUnit === 'F') {
      return (celsiusTemp * 9/5) + 32;
    } else {
      return celsiusTemp;
    }
  };

  const tempInUnit = convertTemp(temp, unit).toFixed(1);
  const feelsLikeInUnit = convertTemp(feels_like, unit).toFixed(1);


  const now = new Date();
  const date = now.toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });
  
  const time = now.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  return (
    <div className="weather-container">
      <img className="weather-img" 
        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather[0].description}
      />

      <p className="temperature">{tempInUnit}°{unit}</p>
      <p className="feels-temp">Feels like: {feelsLikeInUnit}°{unit}</p>
      <p className="location">{name}, {country}</p>
      <p className="date">{date}</p>
      <p className="time">{time}</p>
    </div>
  );
};

export default TodayWeather;