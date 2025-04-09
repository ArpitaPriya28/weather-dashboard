function WeatherCard({ weather }) {
  if (!weather) return null;

  const { name, main, weather: details, wind } = weather;
  const icon = `https://openweathermap.org/img/wn/${details[0].icon}@2x.png`;

  // Calculate "feels like" difference
  const feelsLikeDiff = Math.round(main.feels_like - main.temp);
  const feelsLikeText = feelsLikeDiff > 0 
    ? `Feels ${feelsLikeDiff}° warmer` 
    : feelsLikeDiff < 0 
      ? `Feels ${Math.abs(feelsLikeDiff)}° colder` 
      : 'Feels the same';

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:scale-102">
      <h2 className="text-2xl font-bold text-blue-700">{name}</h2>
      <div className="flex justify-center items-center">
        <img src={icon} alt={details[0].description} className="h-20 w-20" />
        <p className="text-4xl font-bold">{Math.round(main.temp)}°C</p>
      </div>
      <p className="text-xl capitalize mb-2">{details[0].description}</p>
      
      <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
        <div className="bg-blue-50 p-2 rounded">
          <p className="font-semibold">Feels Like</p>
          <p>{Math.round(main.feels_like)}°C</p>
          <p className="text-xs text-gray-500">{feelsLikeText}</p>
        </div>
        <div className="bg-blue-50 p-2 rounded">
          <p className="font-semibold">Humidity</p>
          <p>{main.humidity}%</p>
        </div>
        <div className="bg-blue-50 p-2 rounded">
          <p className="font-semibold">Wind</p>
          <p>{wind.speed} km/h</p>
        </div>
        <div className="bg-blue-50 p-2 rounded">
          <p className="font-semibold">Pressure</p>
          <p>{main.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;