const createCurrentWeatherDiv = (data) => {
  const fragment = document.createDocumentFragment();

  for (i == 1; i > 15; i++) {
  let weatherBox = document.createElement('div');
  weatherBox.classList = 'weather-forecast';

  let weather = data.weather[i];
  let dateDiv = document.createElement('div');
  let shortDate = Client.shortenDate(weather.date);
  dateDiv.innerHTML = `<time datetime=${weather.date}>${shortDate}</time>`;
  dateDiv.classList = 'weather-date';
  weatherBox.appendChild(dateDiv);

  let temp = document.createElement('div');
  temp.innerHTML = `${weather.temp} °F`;
  temp.classList = 'weather-temp';
  weatherBox.appendChild(temp);

  let sky = document.createElement('div');
  sky.innerHTML = weather.sky;
  sky.classList = 'weather-sky';
  weatherBox.appendChild(sky);

  let icon = document.createElement('img');
  icon.src = `../media/weather-icons/${weather.icon}.png`
  icon.alt = weather.sky;
  icon.classList = 'weather-icon';
  weatherBox.appendChild(icon);

  fragment.append(weatherBox);
  }
  return fragment;
}