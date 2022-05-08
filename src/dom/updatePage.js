import renderTop from './renderTop'
import renderBottom from './renderBottom'
import switchTempDisplay from './switchTempDisplay'

const updatePage = (weatherData) => {
  const tempSwitchButton = document.querySelector('.temp-format-switch')
  renderTop(weatherData)
  renderBottom(weatherData)
  tempSwitchButton.addEventListener('click', () => {
    tempSwitchButton.innerText = switchTempDisplay(weatherData)
  })
}

export default updatePage
