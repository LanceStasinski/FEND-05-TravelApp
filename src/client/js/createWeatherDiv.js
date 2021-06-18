const createWeatherDiv = (data) => {
  const weatherSection = document.createElement('div');
  if (data.weather.length == 1) {
    weatherBox = Client.createCurrentWeatherDiv(data)
    weatherSection.appendChild(weatherBox);


  }
}