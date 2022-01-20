const dotenv = require("dotenv");

const { getCoords } = require("../middleware/getCoords");
const { getWeatherCurrent } = require("../helpers/getWeatherCurrent");
const { getWeatherForecast } = require("../helpers/getWeatherForecast");
const { getImage } = require("../helpers/getImage");
const { getCountryInfo } = require("../middleware/getCountryInfo");

dotenv.config();
const GEOUSER = process.env.GEO_USERNAME;
const IMAGE_KEY = process.env.PIXABAY_KEY;
const WEATHER_KEY = process.env.WEATHER_KEY;

//get data from APIs
exports.getData = async (req, res) => {
  console.log(req.body);
  const coords = await getCoords(req, GEOUSER);
  console.log(coords);
  let trip = {};
  if (coords.totalResultsCount == 0) {
    trip = {
      message: "Location not recognized",
    };
  } else {
    const currentWeather = await getWeatherCurrent(coords, WEATHER_KEY);
    const forecastWeather = await getWeatherForecast(coords, WEATHER_KEY);
    const image = await getImage(coords, IMAGE_KEY);
    const countryInfo = await getCountryInfo(coords);
    //build data object
    trip = {
      message: "OK",
      arrival: req.body.arrival,
      departure: req.body.departure,
      daysAway: req.body.daysAway,
      destination: req.body.destination,
      current: currentWeather,
      forecast: forecastWeather,
      imageURL: image[1],
      imageTag: image[0],
      countryName: countryInfo[0].name.official,
      capital: countryInfo[0].capital[0],
      currency:
        countryInfo[0].currencies[Object.keys(countryInfo[0].currencies)[0]]
          .name,
      flag: countryInfo[0].flags.png,
      language:
        countryInfo[0].languages[Object.keys(countryInfo[0].languages)[0]],
      region: countryInfo[0].subregion,
      tripNum: req.body.tripNum,
      lat: coords.geonames[0].lat,
      lng: coords.geonames[0].lng,
    };
  }
  // console.log(trip);
  res.send(trip);
};
