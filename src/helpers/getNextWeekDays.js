const getNextWeekDays = (dayNumber) => {
  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  return weekDays.slice(dayNumber).concat(weekDays.slice(0, dayNumber))
}

export default getNextWeekDays
