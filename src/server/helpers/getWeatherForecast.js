const { getWeatherRoute } = require('../middleware/getWeatherRoute')
//get the extended forecast from weatherbit
const getWeatherForecast = async (coords, key) => {
  let tripWeather = [];
  let weather = '';
  let forecastType = `forecast/daily`;
  weather = await getWeatherRoute(coords, key, forecastType);
  let weatherData = weather.data;
  for (const data of weatherData) {
    let day = {
      date: data.datetime,
      temp: data.temp,
      sky: data.weather.description,
      icon: data.weather.icon
    };
    tripWeather.push(day);
  }
  return tripWeather;
}

exports.getWeatherForecast = getWeatherForecast;