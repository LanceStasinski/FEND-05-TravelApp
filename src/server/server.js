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
  const currentWeather = await getWeatherCurrent(coords, weatherKey);
  const forecastWeather = await getWeatherForecast(coords, weatherKey);
  const image = await getImage(coords, imageKey);
  const countryInfo = await getCountryInfo(coords);
  //console.log(countryInfo);
  const trip = {
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
    region: countryInfo.subregion
  }
  console.log(trip);
  res.send(trip)
}

//POST route
app.post('/add', getData)
