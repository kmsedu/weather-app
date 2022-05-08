const getTempFormat = (isFahrenheit) => {
  return !isFahrenheit ? 'c' : 'f'
}

export default getTempFormat
