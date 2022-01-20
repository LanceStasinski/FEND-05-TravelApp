//create an array of individual divs containing the forecast for 16 days
const createForecastArray = (data) => {
  let array = [];
  const weatherDays = data.forecast;

  for (const weather of weatherDays) {
    let weatherBox = document.createElement("div");
    weatherBox.classList = "weather-forecast";

    let dateDiv = document.createElement("div");
    let shortDate = Client.shortenDate(weather.date);
    dateDiv.innerHTML = `<time datetime=${weather.date}>${shortDate}</time>`;
    dateDiv.classList = "weather-date";
    weatherBox.appendChild(dateDiv);

    let temp = document.createElement("div");
    temp.innerHTML = `${Math.floor(weather.temp)} °F`;
    temp.classList = "weather-temp";
    weatherBox.appendChild(temp);

    let icon = document.createElement("img");
    icon.src = `src/client/media/weather-icons/${weather.icon}.png`;
    icon.alt = weather.sky;
    icon.classList = "weather-icon";
    weatherBox.appendChild(icon);

    array.push(weatherBox);
  }
  return array;
};

export { createForecastArray };
