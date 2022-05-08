import dailyForecast from './dailyForecast'
import currentWeather from './currentWeather'

export default class WeatherData {
  constructor (locationString, data, isFahrenheit) {
    this.location = locationString
    this.current = currentWeather(data, isFahrenheit)
    this.forecast = dailyForecast(data, isFahrenheit)
    this.isFahrenheit = isFahrenheit
  }
}
