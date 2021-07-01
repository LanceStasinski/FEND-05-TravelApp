const { updateWeatherRoute } = require('../middleware/updateWeatherRoute')
//update the weather for a saved trip
const updateWeatherCurrent = async (coords, key) => {
  let weather = '';
  let forecastType = `current`;
  weather = await updateWeatherRoute(coords, key, forecastType);
  let day = {
    date: weather.data[0].datetime,
    temp: weather.data[0].temp,
    sky: weather.data[0].weather.description,
    icon: weather.data[0].weather.icon
  }
  return day;
}

exports.updateWeatherCurrent = updateWeatherCurrent;