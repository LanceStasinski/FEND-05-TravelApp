const { updateWeatherRoute } = require("../middleware/updateWeatherRoute");
//get updated extended forecast for saved trip
const updateWeatherForecast = async (coords, key) => {
  let tripWeather = [];
  let weather = "";
  let forecastType = `forecast/daily`;
  weather = await updateWeatherRoute(coords, key, forecastType);
  let weatherData = weather.data;
  for (const data of weatherData) {
    let day = {
      date: data.datetime,
      temp: data.temp,
      sky: data.weather.description,
      icon: data.weather.icon,
    };
    tripWeather.push(day);
  }
  return tripWeather;
};

exports.updateWeatherForecast = updateWeatherForecast;
