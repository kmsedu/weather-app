const formatLocation = function (locationString) {
  if (!locationString.split('').includes(',')) return locationString

  const firstNonLetterIndex = locationString.indexOf(',')
  const firstLetterUpperCase = locationString[0].toUpperCase()
  const stringEndLowerCase = locationString.slice(1, firstNonLetterIndex).toLowerCase()

  return firstLetterUpperCase + stringEndLowerCase
}

export default formatLocation
