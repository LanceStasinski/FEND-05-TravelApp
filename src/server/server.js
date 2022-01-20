const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const tripController = require("./controllers/trip-controller");
const updateInfoController = require('./controllers/updateInfo-controller')

dotenv.config();
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

//add trip route
app.post("/add", tripController.getData);

//Update weather route
app.post("/update", updateInfoController.updateData);
