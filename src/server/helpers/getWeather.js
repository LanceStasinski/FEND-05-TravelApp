const { getWeatherRoute } = require('../middleware/getWeatherRoute')

const getWeather = async (coords, req, key) => {
  let weather = '';
  let tripWeather = [];
  if (req.body.daysAway > 16) {
    weather = 'No forecast';
    tripWeather.push(weather);
  } else if (req.body.daysAway < 8) {
    let forecastType = `current`;
    weather = await getWeatherRoute(coords, key, forecastType);
    let day = {
      date: weather.data[0].datetime,
      temp: weather.data[0].temp,
      sky: weather.data[0].weather.description,
      icon: weather.data[0].weather.icon
    };
    tripWeather.push(day);
  } else if (req.body.daysAway > 7 && req.body.daysAway <= 16) {
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
  }
  return tripWeather;
}

exports.getWeather = getWeather;