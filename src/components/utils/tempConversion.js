export function convertKToCelsius(num) {
  return (num - 273).toFixed(2);
}

export function convertKToFahrenheit(num) {
  return (((num - 273) * (9 / 5)) + 32).toFixed(2);
}
