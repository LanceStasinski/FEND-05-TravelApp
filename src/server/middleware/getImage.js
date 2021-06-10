const fetch = require('node-fetch');
const imageKey = process.env.PIXABAY_KEY;

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
  let imageData = [];
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
  imageData.push(image.hits[0].tags);
  imageData.push(image.hits[0].webformatURL);
  return imageData;
}

exports.getImage = getImage;