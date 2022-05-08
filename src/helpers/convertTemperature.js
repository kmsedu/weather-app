import kelvinToCelcius from './kelvinToCelcius'
import kelvinToFahrenheit from './kelvinToFarenheit'

const convertTemperature = (temp, isFahrenheit) => {
  if (!isFahrenheit) return kelvinToCelcius(temp)

  return kelvinToFahrenheit(temp)
}

export default convertTemperature
