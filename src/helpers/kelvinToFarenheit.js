import kelvinToCelcius from './kelvinToCelcius'

const kelvinToFahrenheit = function (kelvinValue) {
  return (kelvinToCelcius(kelvinValue) * 9 / 5 + 32).toFixed(1)
}

export default kelvinToFahrenheit
