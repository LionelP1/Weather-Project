const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const URL = 'https://api.openweathermap.org/data/2.5';

// Fetch current weather
const fetchWeather = async (city) => {
  try {
    const url = `${URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Error fetching weather data');
    }

    return await response.json();

  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};


export { fetchWeather };
