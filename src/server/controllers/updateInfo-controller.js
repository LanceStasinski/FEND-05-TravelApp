const dotenv = require("dotenv");

const { updateWeatherCurrent } = require("../helpers/updateWeatherCurrent");
const { updateWeatherForecast } = require("../helpers/updateWeatherForecast");

dotenv.config();
const WEATHER_KEY = process.env.WEATHER_KEY;

exports.updateData = async (req, res) => {
  const coords = {
    lat: req.body.lat,
    lng: req.body.lng,
  };
  const currentWeather = await updateWeatherCurrent(coords, WEATHER_KEY);
  const forecastWeather = await updateWeatherForecast(coords, WEATHER_KEY);
  let trip = {
    current: currentWeather,
    forecast: forecastWeather,
  };
  console.log(trip);
  res.send(trip);
};