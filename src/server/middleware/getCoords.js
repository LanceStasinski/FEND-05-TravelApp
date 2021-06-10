const fetch = require('node-fetch');
const geoUser = process.env.GEO_USERNAME;

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

exports.getCoords = getCoords;
