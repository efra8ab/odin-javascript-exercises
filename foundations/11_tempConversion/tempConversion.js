const convertToCelsius = (deg) => {
  let cel = (deg - 32) * (5 / 9)
  return Math.round(cel * 10) / 10
};

const convertToFahrenheit = (deg) => {
  let far = (deg * (9 / 5) + 32)
  return Math.round(far * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
