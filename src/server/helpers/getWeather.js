const { getWeatherCurrent } = require('../middleware/getWeatherCurrent');
const { getWeatherForcast } = require('../middleware/getWeatherForecast');

const getWeather = async (coords, req, key) => {
  let weather = '';
  let tripWeather = [];
  if (req.body.daysAway > 16) {
    weather = 'No forecast';
    tripWeather.push(weather);
  } else if (req.body.daysAway < 8) {
    weather = await getWeatherCurrent(coords, key);
    console.log(weather);
    let day = {
      date: weather.data[0].datetime,
      temp: weather.data[0].temp,
      sky: weather.data[0].weather.description,
      icon: weather.data[0].weather.icon
    };
    tripWeather.push(day);
  } else if (req.body.daysAway > 7 && req.body.daysAway <= 16) {
    weather = await getWeatherForcast(coords, key);
    console.log(weather);
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