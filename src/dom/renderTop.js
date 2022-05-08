import getIconName from '../helpers/getIconName'
import convertTemperature from '../helpers/convertTemperature'
import { format } from 'date-fns'
import getTempFormat from '../helpers/getTempFormat'

const renderTop = (weatherData) => {
  const icon = document.querySelector('.current-weather-icon')
  const tempDisplay = document.querySelector('.current-weather-temp-display')
  const dateDisplay = document.querySelector('.current-weather-date')
  const location = document.querySelector('.location')

  icon.innerText = getIconName(weatherData.current.description)
  tempDisplay.innerText = (
    convertTemperature(weatherData.current.temp, weatherData.isFahrenheit) +
    getTempFormat(weatherData.isFahrenheit)
  )
  dateDisplay.innerText = format(new Date(), "E',' do MMM yy")
  location.innerText = weatherData.location
}

export default renderTop
