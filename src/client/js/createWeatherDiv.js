const createWeatherDiv = (data) => {
  const weatherSection = document.createElement('div');
  weatherSection.classList = 'weather-section-forecast';
  weatherSection.id = `weather-${data.tripNum}`;

  /*
  const weatherHeader = document.createElement('h3');
  weatherHeader.classList = 'weather-header';
  weatherHeader.innerHTML = 'Extended Forecast';
  weatherSection.appendChild(weatherHeader);
  */

  const weatherBoxes = document.createElement('div');
  weatherBoxes.classList = 'weather-boxes';
  const boxes = Client.createForecastArray(data);
  for (const box of boxes) {
    weatherBoxes.appendChild(box)
  }
  weatherSection.appendChild(weatherBoxes);
  weatherSection.style.display = 'none';

  return weatherSection;
}

export { createWeatherDiv }