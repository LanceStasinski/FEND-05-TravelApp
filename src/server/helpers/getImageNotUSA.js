const { getImageCity } = require('../middleware/getImageCity');
const { getImageCountry } = require('../middleware/getImageCountry');

//If image of the city is not available, get an image of the country.
const getImageNotUSA = async (coords, key) => {
  const city = await getImageCity(coords, key);
  let image = '';
  let imageData = [];
  if (city.total == 0) {
    const country = await getImageCountry(coords, key);
    image = country;
  } else {
    image = city;
  }
  imageData.push(image.hits[0].tags);
  imageData.push(image.hits[0].webformatURL);
  return imageData;
}

exports.getImageNotUSA = getImageNotUSA;