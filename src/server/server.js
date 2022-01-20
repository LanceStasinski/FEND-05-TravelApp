const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const tripController = require('./controllers/trip-controller')

dotenv.config();
const GEOUSER = process.env.GEO_USERNAME;
const IMAGE_KEY = process.env.PIXABAY_KEY;
const WEATHER_KEY = process.env.WEATHER_KEY;
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//initialize the dist folder created by webpack
app.use(express.static("dist"));

//spin up server
app.listen(PORT, () => {
  console.log("Running on localhost: 3030");
});


app.post("/add", tripController.getData);

//Update weather for saved trips
const { updateWeatherCurrent } = require("./helpers/updateWeatherCurrent");
const { updateWeatherForecast } = require("./helpers/updateWeatherForecast");

const updateData = async (req, res) => {
  const coords = {
    lat: req.body.lat,
    lng: req.body.lng,
  };
  const currentWeather = await updateWeatherCurrent(coords, weatherKey);
  const forecastWeather = await updateWeatherForecast(coords, weatherKey);
  let trip = {
    current: currentWeather,
    forecast: forecastWeather,
  };
  console.log(trip);
  res.send(trip);
};

app.post("/update", updateData);
