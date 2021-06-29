const fetch = require('node-fetch');

const updateWeatherRoute = async (coords, key, forecastType)  => {
  const response = await fetch(`https://api.weatherbit.io/v2.0/${forecastType}?lat=${coords.lat}&lon=${coords.lng}&units=I&key=${key}`);
  try {
    const weather = await response.json();
    return(weather);
  } catch (error) {
    console.log("error", error);
  }
}

exports.updateWeatherRoute = updateWeatherRoute;