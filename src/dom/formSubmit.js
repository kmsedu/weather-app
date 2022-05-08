import fetchWeatherData from '../api/fetchWeatherData'
import WeatherData from '../api/WeatherData'
import updatePage from './updatePage'

const formSubmit = (event) => {
  const searchForm = document.forms.namedItem('search-form')
  const queryString = searchForm.querySelector('input').value
  const tempSwitch = document.querySelector('.temp-format-switch')
  const isFahrenheit = tempSwitch.innerText === 'f'

  fetchWeatherData(queryString)
    .then((data) => {
      const weatherData = new WeatherData(queryString, data, isFahrenheit)
      updatePage(weatherData)
    })

  event.preventDefault()
}

export default formSubmit
