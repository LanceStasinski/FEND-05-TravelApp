const fetch = require('node-fetch');

const getWeatherCurrent = async (coords, key)  => {
  const response = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${coords.geonames[0].lat}&lon=${coords.geonames[0].lng}&units=I&key=${key}`);
  try {
    const weather = await response.json();
    return(weather);
  } catch (error) {
    console.log("error", error);
  }
}

exports.getWeatherCurrent = getWeatherCurrent;