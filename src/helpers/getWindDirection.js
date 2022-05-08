const getWindDirection = (degrees) => {
  const DIRECTIONS = {
    NNE: [11.25, 33.75],
    NE: [33.75, 56.25],
    ENE: [56.25, 78.75],
    E: [78.75, 101.25],
    ESE: [101.25, 123.75],
    SE: [123.75, 146.25],
    SSE: [146.25, 168.75],
    S: [168.75, 191.25],
    SSW: [191.25, 213.75],
    SW: [213.75, 236, 25],
    WSW: [236.25, 258.75],
    W: [258.75, 281.25],
    WNW: [281.25, 303.75],
    NW: [303.75, 326.25],
    NNW: [326.25, 348.75]
  }

  // Get opposite angle
  const windAngle = (degrees + 180) % 360

  for (const [key, value] of Object.entries(DIRECTIONS)) {
    if (windAngle > 348.75 || windAngle < 11.25) return 'N'
    if (windAngle > value[0] && windAngle < value[1]) return key
  }
}

export default getWindDirection
