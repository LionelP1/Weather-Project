import React from 'react';

const TodayWeather = ({ weatherData }) => {
  const {
    weather,
    main: { temp, feels_like },
  } = weatherData;

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
      <div className="weatherIcon">
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt={weather[0].description}
        />
      </div>

      <p className="temperature">{temp.toFixed(1)}</p>
      <p className="feelsTemp">Feels like: {feels_like.toFixed(1)}</p>
      <p className="date">{date}</p>
      <p className="time">{time}</p>
    </div>
  );
};

export default TodayWeather;