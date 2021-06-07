//set endpoint
travelData = []

//get api keys
const dotenv = require('dotenv')
dotenv.config()
const geoUser = process.env.GEO_USERNAME;
const weatherKey = process.env.WEATHER_KEY;

//load dependencies
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require('node-fetch')

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

//get lat/long of destination
const getCoords = async (entry) => {
  const response = await fetch(`http://api.geonames.org/searchJSON?q=${entry.body.destination}&maxRows=1&username=${geoUser}`);
  try {
    const location = await response.json()
    return(location)
    /*
    remember to notify user if town doesn't exist
    */
  } catch (error) {
    console.log("error", error);
  }
}

const getWeather = async (coords, req)  => {
  const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${coords.geonames[0].lat}&lon=${coords.geonames[0].lng}&start_date=2021-06-29&key=${weatherKey}`);
  try {
    const weather = await response.json();
    return(weather);
  } catch (error) {
    console.log("error", error);
  }
}

//get data from APIs
const getData = async (req, res) => {
  console.log(req.body);
  const coords = await getCoords(req);
  console.log(coords);
  const weather = await getWeather(coords, req);
  console.log(weather.data);
}


//POST route
app.post('/add', getData)

