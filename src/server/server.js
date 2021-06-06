//set endpoint
travelData = []

//get api keys
const dotenv = require('dotenv')
dotenv.config()
const geoUser = process.env.GEO_USERNAME;

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
  const response = await fetch(`http://api.geonames.org/searchJSON?q=${entry.location}&maxRows=1&username=${geoUser}`);
  try {
    const location = await response.json()
    console.log(location);
    return(location)
    /*
    remember to notify user if town doesn't exist
    */
  } catch (error) {
    console.log("error", error);
  }
}

//get data from APIs
const getData = async (req, res) => {
  console.log(req.body)
  const newEntry = {
    date: req.body.date,
    location: req.body.destination
  }
  console.log(newEntry);
  const coords = getCoords(newEntry);
}


//POST route
app.post('/add', getData)

