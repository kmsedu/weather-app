import renderBottom from './renderBottom'
import renderTop from './renderTop'
import getTempFormat from '../helpers/getTempFormat'

const switchTempDisplay = (weatherData) => {
  if (!weatherData.isFahrenheit) {
    weatherData.isFahrenheit = true
  } else {
    weatherData.isFahrenheit = false
  }
  renderTop(weatherData, weatherData.isFahrenheit)
  renderBottom(weatherData, weatherData.isFahrenheit)

  return getTempFormat(weatherData.isFahrenheit)
}

export default switchTempDisplay
