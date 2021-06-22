const createWeatherDiv = (data) => {
  const weatherSection = document.createElement('div');
  if (data.daysAway < 8) {
    const weatherBox = Client.createCurrentWeatherDiv(data);
    weatherSection.classList = 'weather-section';
    weatherSection.appendChild(weatherBox);
  } else {
    weatherSection.classList = 'weather-section-forecast';
    const weatherHeader = document.createElement('h3');
    weatherHeader.classList = 'weather-header';
    weatherHeader.innerHTML = 'Extended Forecast';
    weatherSection.appendChild(weatherHeader);

    const weatherBoxes = document.createElement('div');
    weatherBoxes.classList = 'weather-boxes';
    const boxes = Client.createForecastWeatherDiv(data);
    for (const box of boxes) {
      weatherBoxes.appendChild(box)
    }
    weatherSection.appendChild(weatherBoxes);
  }
  return weatherSection;
}

export { createWeatherDiv }