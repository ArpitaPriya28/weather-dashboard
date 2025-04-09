import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'; // Import components
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const handleSearch = async (searchCity) => {
    if (!searchCity) {
      setError('Please enter a city name.');
      return;
    }

    setLoading(true);
    setError('');
    setCity(searchCity);

    try {
      // Fetch current weather data
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=metric`
      );
      if (!weatherRes.ok) throw new Error('City not found');
      const weatherData = await weatherRes.json();
      
      // Fetch forecast data
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${apiKey}&units=metric`
      );
      if (!forecastRes.ok) throw new Error('Forecast not available');
      const forecastData = await forecastRes.json();
      
      setWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setWeather(null);
      setForecast(null);
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  // Get user's location on initial load
  useEffect(() => {
    const getLocationWeather = () => {
      if (navigator.geolocation) {
        setLoading(true);
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude: lat, longitude: lon } = position.coords;
          
          try {
            // Fetch weather by coordinates
            const weatherRes = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
            );
            if (!weatherRes.ok) throw new Error('Weather data not available');
            const weatherData = await weatherRes.json();
            
            // Fetch forecast by coordinates
            const forecastRes = await fetch(
              `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
            );
            if (!forecastRes.ok) throw new Error('Forecast not available');
            const forecastData = await forecastRes.json();
            
            setWeather(weatherData);
            setForecast(forecastData);
            setCity(weatherData.name);
          } catch (err) {
            console.error('Error fetching weather by location:', err);
          } finally {
            setLoading(false);
          }
        }, () => {
          setLoading(false);
        });
      }
    };

    getLocationWeather();
  }, [apiKey]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-blue-500 text-gray-800 px-4">
      <h1 className="text-4xl font-bold mb-6">🌤️ Weather Dashboard</h1>

      {/* Use the SearchBar component */}
      <SearchBar onSearch={handleSearch} loading={loading} />

      {error && <p className="text-red-600 font-semibold">{error}</p>}

      {loading && !weather && (
        <div className="text-lg">Loading...</div>
      )}

      {weather && (
        <div className="w-full max-w-md">
          <WeatherCard weather={weather} />
          {/* Use the Forecast component */}
          {forecast && <Forecast forecastData={forecast} />}
        </div>
      )}
    </div>
  );
}

export default App;