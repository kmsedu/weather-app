import fetchWeatherData from '../api/fetchWeatherData'
import WeatherData from '../api/WeatherData'
import updatePage from './updatePage'

const formSubmit = (event) => {
  const searchForm = document.forms.namedItem('search-form')
  const queryString = searchForm.querySelector('input').value

  fetchWeatherData(queryString)
    .then((data) => {
      console.log(data)
      const weatherData = new WeatherData(queryString, data, false)
      console.log(weatherData)
      updatePage(weatherData)
    })

  event.preventDefault()
}

export default formSubmit
