const createCurrentWeatherDiv = (data) => {
  const weatherBox = document.createElement('div');
  weatherBox.classList = 'weather-current';

  const date = document.createElement('h3');
  date.innerHTML = `Current Weather`;
  date.classList = 'weather-date';
  weatherBox.appendChild(date);

  const weatherInfo = document.createElement('div');
  weatherInfo.classList = 'weather-info';

  const temp = document.createElement('div');
  temp.innerHTML = `${data.weather[0].temp} °F`;
  temp.classList = 'weather-temp';
  weatherInfo.appendChild(temp);

  const sky = document.createElement('div');
  sky.innerHTML = data.weather[0].sky;
  sky.classList = 'weather-sky';
  weatherInfo.appendChild(sky);
  weatherBox.appendChild(weatherInfo);

  const icon = document.createElement('img');
  icon.src = `./src/client/media/weather-icons/${data.weather[0].icon}.png`;
  icon.alt = data.weather[0].sky;
  icon.classList = 'weather-icon';
  weatherBox.appendChild(icon);
  return weatherBox;
}

export { createCurrentWeatherDiv }