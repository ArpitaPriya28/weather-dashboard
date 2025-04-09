function Forecast({ forecastData }) {
  if (!forecastData) return null;

  // Filter forecast for noon time (12:00) of each day to get daily forecasts
  const dailyForecast = forecastData.list.filter(
    item => item.dt_txt.includes('12:00:00')
  ).slice(0, 5); // Only show 5 days
  
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">5-Day Forecast</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {dailyForecast.map((day, index) => (
          <div key={index} className="bg-white bg-opacity-90 rounded p-3 shadow-sm">
            <p className="font-medium">{new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</p>
            <img 
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} 
              alt={day.weather[0].description}
              className="mx-auto w-12 h-12"
            />
            <p className="text-lg font-semibold">{Math.round(day.main.temp)}°C</p>
            <p className="text-xs text-gray-600">{day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;