import getNextWeekDays from '../helpers/getNextWeekDays'

const dailyForecast = (data) => {
  const dailyData = data.daily
  const nextWeekDays = getNextWeekDays(new Date().getDay())
  let dayCounter = 0

  const forecast = dailyData.slice(1).map((day) => {
    return {
      max: day.temp.max,
      min: day.temp.min,
      day: nextWeekDays[dayCounter++],
      description: day.weather[0].main
    }
  })

  return forecast
}

export default dailyForecast
