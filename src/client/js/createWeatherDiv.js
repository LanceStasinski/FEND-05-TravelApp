//create a section that contains all the individual divs for each day in the
//forecast
const createWeatherDiv = (data) => {
  const weatherSection = document.createElement("div");
  weatherSection.classList = "weather-section-forecast";
  weatherSection.id = `weather-${data.tripNum}`;

  const weatherBoxes = document.createElement("div");
  weatherBoxes.classList = "weather-boxes";
  const boxes = Client.createForecastArray(data);
  for (const box of boxes) {
    weatherBoxes.appendChild(box);
  }
  weatherSection.appendChild(weatherBoxes);
  weatherSection.style.display = "none";

  return weatherSection;
};

export { createWeatherDiv };
