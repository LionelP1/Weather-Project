const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const URL = 'https://api.openweathermap.org/data/2.5';

// Fetch current weather
const fetchWeatherWithCity = async (city) => {
  try {
    const url = `${URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;
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

const fetchWeatherWithCoords = async (lat,lon) => {
  try {
    const url = `${URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
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

const GEOCODING_URL = 'https://api.openweathermap.org/geo/1.0/direct';

// LocationInfo function to get 5 possible cities and their location data
// Returns array of location objects for the city
const LocationInfo = async (city) => {
  try {
    const url = `${GEOCODING_URL}?q=${encodeURIComponent(city)}&limit=5&appid=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Error fetching location data');
    }

    const locations = await response.json();

    // Format all matches
    const locationResults = locations.map(location => ({
      name: location.name,
      state: location.state,
      country: location.country,
      latitude: location.lat,
      longitude: location.lon,
    }));
    
    return locationResults;

  } catch (error) {
    console.error('Error fetching location data:', error);
    throw error;
  }
};



export { fetchWeatherWithCity, fetchWeatherWithCoords, LocationInfo };
