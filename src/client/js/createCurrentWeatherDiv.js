const createCurrentWeatherDiv = (data) => {
  const weatherBox = document.createElement('div');
  weatherBox.classList = 'weather-current';

  const date = document.createElement('div');
  date.innerHTML = 'Current \n Weather';
  date.classList = 'weather-date';
  weatherBox.appendChild(date);

  const temp = document.createElement('div');
  temp.innerHTML = `${data.weather[0].temp} °F`;
  temp.classList = 'weather-temp';
  weatherBox.appendChild(temp);

  const sky = document.createElement('div');
  sky.innerHTML = data.weather[0].sky;
  sky.classList = 'weather-sky';
  weatherBox.appendChild(sky);

  const icon = document.createElement('img');
  icon.src = `../media/weather-icons/${data.weather[0].icon}.png`;
  icon.alt = data.weather[0].sky;
  weatherBox.appendChild(icon);
  return weatherBox;
}

export { createCurrentWeatherDiv }