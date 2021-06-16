const fetch = require('node-fetch');

const getCountryInfo = async (coords) => {
  const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${coords.geonames[0].countryCode}`);
  try {
    const imageInfo = await response.json();
    return imageInfo;
  } catch (error) {
    console.log("error", error);
  }
}

exports.getCountryInfo = getCountryInfo;
