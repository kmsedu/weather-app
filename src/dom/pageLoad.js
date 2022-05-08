import fetchWeatherData from '../api/fetchWeatherData'
import WeatherData from '../api/WeatherData'
import updatePage from './updatePage'
import formSubmit from './formSubmit'

const pageLoad = () => {
  const starterString = 'Melbourne, VIC, AU'
  const form = document.forms.namedItem('search-form')

  fetchWeatherData(starterString)
    .then((data) => {
      const weatherData = new WeatherData(starterString, data, false)
      updatePage(weatherData)

      form.addEventListener('submit', formSubmit)
    })
}

export default pageLoad
