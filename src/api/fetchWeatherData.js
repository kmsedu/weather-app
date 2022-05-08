const fetchWeatherData = async function (queryString) {
  try {
    const geoCodePromise = await window.fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${queryString}&limit=1&appid=708eb6ce695774d5cc0dd5b02e654c48`)
    const geoCode = await geoCodePromise.json()
    const dataPromise = await window.fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${geoCode[0].lat}&lon=${geoCode[0].lon}&appid=708eb6ce695774d5cc0dd5b02e654c48`)

    return await dataPromise.json()
  } catch {
    const error = `No results found for '${queryString}', please try again.`

    throw error
  }
}

export default fetchWeatherData
