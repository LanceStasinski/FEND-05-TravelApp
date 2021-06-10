const fetch = require('node-fetch');
const weatherKey = process.env.WEATHER_KEY;

const getWeatherCurrent = async (coords, req)  => {
  const response = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${coords.geonames[0].lat}&lon=${coords.geonames[0].lng}&units=I&key=${weatherKey}`);
  try {
    const weather = await response.json();
    return(weather);
  } catch (error) {
    console.log("error", error);
  }
}

const getWeatherForcast = async (coords, req)  => {
  const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${coords.geonames[0].lat}&lon=${coords.geonames[0].lng}&units=I&key=${weatherKey}`);
  try {
    const weather = await response.json();
    return(weather);
  } catch (error) {
    console.log("error", error);
  }
}

const getWeather = async (coords, req) => {
  let weather = '';
  let tripWeather = [];
  if (req.body.daysAway > 16) {
    weather = 'No forecast';
    tripWeather.push(weather);
  } else if (req.body.daysAway < 8) {
    weather = await getWeatherCurrent(coords);
    console.log(weather);
    let day = {
      date: weather.data[0].datetime,
      temp: weather.data[0].temp,
      sky: weather.data[0].weather.description,
      icon: weather.data[0].weather.icon
    };
    tripWeather.push(day);
  } else if (req.body.daysAway > 7 && req.body.daysAway <= 16) {
    weather = await getWeatherForcast(coords);
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