const createWeatherDiv = (data) => {
  const weatherSection = document.createElement('div');
  weatherSection.classList = 'weather-section';
  if (data.daysAway < 8) {
    const weatherBox = Client.createCurrentWeatherDiv(data)
    weatherSection.appendChild(weatherBox);
  } else {
    const boxes = Client.createForecastWeatherDiv(data);
    for (const box of boxes) {
      weatherSection.appendChild(box)
    }
  }
  return weatherSection;
}

export { createWeatherDiv }