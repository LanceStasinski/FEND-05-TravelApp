//set endpoint
travelData = []

//load dotenv to get api keys
const dotenv = require('dotenv')
dotenv.config()

//load dependencies
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require('node-fetch');

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

const { getCoords } = require('./middleware/getCoords');
const { getWeather } = require('./middleware/getWeather');
const { getImage } = require('./middleware/getImage');

//get data from APIs
const getData = async (req, res) => {
  console.log(req.body);
  const coords = await getCoords(req);
  console.log(coords);
  let trip = [];
  const tripWeather = await getWeather(coords, req);
  trip.push(tripWeather);
  const image = await getImage(coords);
  trip.push(image);
  console.log(trip);
}

//POST route
app.post('/add', getData)

