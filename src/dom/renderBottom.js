import convertTemperature from '../helpers/convertTemperature'
import getIconName from '../helpers/getIconName'
import getTempFormat from '../helpers/getTempFormat'

const renderBottom = (weatherData) => {
  const additionalSection = document.querySelector('.additional-info')
  const additionalItems = [...additionalSection.querySelectorAll('p')]
  const additionalData = [
    (convertTemperature(weatherData.current.feelsLike, weatherData.isFahrenheit) +
      getTempFormat(weatherData.isFahrenheit)),
    `${weatherData.current.humidity}%`,
    `${weatherData.current.windSpeed} ${weatherData.current.windDirection}`
  ]
  const forecastList = document.querySelector('.forecast-list')
  const forecastItems = [...forecastList.children]

  weatherData.forecast.forEach((weekDay, index) => {
    const dayDisplay = forecastItems[index].querySelector('.forecast-item-day')
    const tempDisplay = forecastItems[index].querySelector('.forecast-item-temp')
    const icon = forecastItems[index].querySelector('.forecast-item-icon')

    dayDisplay.innerText = weekDay.day
    tempDisplay.innerText = (
      convertTemperature(weekDay.max, weatherData.isFahrenheit) +
      getTempFormat(weatherData.isFahrenheit)
    )
    icon.innerText = getIconName(weekDay.description)
  })

  additionalData.forEach((dataEntry, index) => {
    additionalItems[index].innerText = dataEntry
  })
}

export default renderBottom
