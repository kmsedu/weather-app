import getWindDirection from '../helpers/getWindDirection'

const currentWeather = (data) => {
  const currentData = data.current

  return {
    temp: currentData.temp,
    feelsLike: currentData.feels_like,
    humidity: currentData.humidity,
    description: currentData.weather[0].main,
    // Convert m/sec to km/h
    windSpeed: `${(currentData.wind_speed * 3.6).toFixed(1)}km/h`,
    windDirection: getWindDirection(currentData.wind_deg)
  }
}

export default currentWeather
