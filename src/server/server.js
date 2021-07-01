//load dotenv to get api keys
const dotenv = require('dotenv')
dotenv.config();
const geoUser = process.env.GEO_USERNAME;
const imageKey = process.env.PIXABAY_KEY;
const weatherKey = process.env.WEATHER_KEY;

//load dependencies
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

//start instance and initialize dependencies
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//initialize the dist folder created by webpack
app.use(express.static('dist'))

//spin up server
app.listen(3030, () => {
  console.log('Running on localhost: 3030')
})

//require middleware functions
const { getCoords } = require('./middleware/getCoords');
const { getWeatherCurrent } = require('./helpers/getWeatherCurrent');
const { getWeatherForecast } = require('./helpers/getWeatherForecast');
const { getImage } = require('./helpers/getImage');
const { getCountryInfo } = require('./middleware/getCountryInfo');

//get data from APIs
const getData = async (req, res) => {
  console.log(req.body);
  const coords = await getCoords(req, geoUser);
  console.log(coords);
  let trip = {};
  if (coords.totalResultsCount == 0) {
    trip = {
      message: 'Location not recognized'
    }
  } else {
    const currentWeather = await getWeatherCurrent(coords, weatherKey);
    const forecastWeather = await getWeatherForecast(coords, weatherKey);
    const image = await getImage(coords, imageKey);
    const countryInfo = await getCountryInfo(coords);
    //build data object
    trip = {
      message: 'OK',
      arrival: req.body.arrival,
      departure: req.body.departure,
      daysAway: req.body.daysAway,
      destination: req.body.destination,
      current: currentWeather,
      forecast: forecastWeather,
      imageURL: image[1],
      imageTag: image[0],
      countryName: countryInfo.name,
      capital: countryInfo.capital,
      currency: countryInfo.currencies[0].name,
      flag: countryInfo.flag,
      language: countryInfo.languages[0].name,
      region: countryInfo.subregion,
      tripNum: req.body.tripNum,
      lat: coords.geonames[0].lat,
      lng: coords.geonames[0].lng
    }
  }
  console.log(trip);
  res.send(trip);
}

app.post('/add', getData)

//Update weather for saved trips
const { updateWeatherCurrent } = require('./helpers/updateWeatherCurrent');
const { updateWeatherForecast } = require('./helpers/updateWeatherForecast');

const updateData = async (req, res) => {
  const coords = {
    lat: req.body.lat,
    lng: req.body.lng
  };
  const currentWeather = await updateWeatherCurrent(coords, weatherKey);
  const forecastWeather = await updateWeatherForecast(coords, weatherKey);
  let trip = {
    current: currentWeather,
    forecast: forecastWeather
  }
  console.log(trip);
  res.send(trip);
}

app.post('/update', updateData)
