//set endpoint
travelData = []

//get api keys
const dotenv = require('dotenv')
dotenv.config()
const geoUser = process.env.GEO_USERNAME;
const weatherKey = process.env.WEATHER_KEY;
const imageKey = process.env.PIXABAY_KEY;

//load dependencies
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require('node-fetch');
const { prefetch } = require('webpack');

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

const getImageCity = async (coords) => {
  const response = await fetch(`https://pixabay.com/api/?key=${imageKey}&q=${coords.geonames[0].name}+${coords.geonames[0].adminName1}&image_type=photo&orientation=horizontal&category=places&safesearch=true`);
  try {
    const imageInfo = await response.json();
    return imageInfo;
  } catch (error) {
    console.log("error", error);
  }
}

const getImageState = async (coords) => {
  const response = await fetch(`https://pixabay.com/api/?key=${imageKey}&q=${coords.geonames[0].adminName1}&image_type=photo&orientation=horizontal&category=places&safesearch=true`);
  try {
    const imageInfo = await response.json();
    return imageInfo;
  } catch (error) {
    console.log("error", error);
  }
}

const getImageCountry = async (coords) => {
  const response = await fetch(`https://pixabay.com/api/?key=${imageKey}&q=${coords.geonames[0].countryName}&image_type=photo&orientation=horizontal&category=places&safesearch=true`);
  try {
    const imageInfo = await response.json();
    return imageInfo;
  } catch (error) {
    console.log("error", error);
  }
}

//If image of the city is not available, get an image of the state. If an image of the state is not available, get an image of the country.
const getImage = async (coords) => {
  const city = await getImageCity(coords);
  let image = '';
  if (city.total == 0) {
    const state = await getImageState(coords);
    if (state.total == 0 && city.total == 0) {
      const country = await getImageCountry(coords);
      image = country;
    } else {
      image = state;
    }
  } else {
    image = city;
  }
  return image;
}

//get data from APIs
const getData = async (req, res) => {
  console.log(req.body);
  const coords = await getCoords(req);
  console.log(coords);
  let trip = [];
  let weather = '';
  let tripWeather = [];
  if (req.body.daysAway > 16) {
    weather = 'No forecast';
    tripWeather.push(weather);
  } else if (req.body.daysAway < 8) {
    weather = await getWeatherCurrent(coords);
    let day = {
      date: weather.data[0].datetime,
      temp: weather.data[0].temp,
      sky: weather.data[0].weather.description,
      icon: weather.data[0].weather.icon
    };
    tripWeather.push(day);
  } else if (req.body.daysAway > 7 && req.body.daysAway <= 16) {
    console.log(coords);
    weather = await getWeatherForcast(coords);
    let weatherData = weather.data;
    let tripWeather = [];
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
  trip.push(tripWeather);
  const image = await getImage(coords);
  trip.push(image.hits[0].webformatURL);
  console.log(trip);
}


//POST route
app.post('/add', getData)

