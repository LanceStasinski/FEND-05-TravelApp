const { getWeatherRoute } = require('../middleware/getWeatherRoute')

const getWeatherCurrent = async (coords, key) => {
  let weather = '';
  let forecastType = `current`;
  weather = await getWeatherRoute(coords, key, forecastType);
  let day = {
    date: weather.data[0].datetime,
    temp: weather.data[0].temp,
    sky: weather.data[0].weather.description,
    icon: weather.data[0].weather.icon
  }
  return day;
}

exports.getWeatherCurrent = getWeatherCurrent;