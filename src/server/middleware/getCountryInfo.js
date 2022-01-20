const fetch = require('node-fetch');

//fetch information from REST countries API
const getCountryInfo = async (coords) => {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${coords.geonames[0].countryCode}`);
  try {
    const imageInfo = await response.json();
    return imageInfo;
  } catch (error) {
    console.log("error", error);
  }
}

exports.getCountryInfo = getCountryInfo;
