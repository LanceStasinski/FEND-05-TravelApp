const { getImageCityState } = require('../middleware/getImageCityState');
const { getImageState } = require('../middleware/getImageState');
const { getImageCountry } = require('../middleware/getImageCountry');

//If image of the city is not available, get an image of the state.
// If an image of the state is not available, get an image of the country.
const getImageUSA = async (coords, key) => {
  const city = await getImageCityState(coords, key);
  let image = '';
  let imageData = [];
  if (city.total == 0) {
    const state = await getImageState(coords, key);
    if (state.total == 0 && city.total == 0) {
      const country = await getImageCountry(coords, key);
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
}

exports.getImageUSA = getImageUSA;