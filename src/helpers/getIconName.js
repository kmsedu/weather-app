const getIconName = (weatherCondition) => {
  switch (weatherCondition) {
    case 'Clear':
      return 'wb_sunny'
    case 'Clouds':
      return 'cloudy'
    case 'Rain':
      return 'rainy'
    case 'Drizzle':
      return 'rainy'
    case 'Thunderstorm':
      return 'thunderstorm'
    case 'Snow':
      return 'cloudy_snowing'
    default: return 'wb_sunny'
  }
}

export default getIconName
