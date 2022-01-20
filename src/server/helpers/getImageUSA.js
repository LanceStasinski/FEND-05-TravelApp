const { getImageRoute } = require("../middleware/getImageRoute");

//If image of the city is not available, get an image of the state.
// If an image of the state is not available, get an image of the country.
const getImageUSA = async (coords, key) => {
  let locationParameters = `${coords.geonames[0].name}+${coords.geonames[0].adminName1}`;
  const city = await getImageRoute(key, locationParameters);
  let image = "";
  let imageData = [];
  if (city.total == 0) {
    locationParameters = `${coords.geonames[0].adminName1}`;
    const state = await getImageRoute(key, locationParameters);
    if (state.total == 0 && city.total == 0) {
      locationParameters = `${coords.geonames[0].countryName}`;
      const country = await getImageRoute(key, locationParameters);
      image = country;
    } else {
      image = state;
    }
  } else {
    image = city;
  }
  imageData.push(image.hits[0].tags);
  imageData.push(image.hits[0].webformatURL);
  return imageData;
};

exports.getImageUSA = getImageUSA;
