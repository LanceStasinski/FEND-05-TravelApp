const { getImageRoute } =  require('../middleware/getImageRoute');

//If image of the city is not available, get an image of the country.
const getImageNotUSA = async (coords, key) => {
  let locationParameters = `${coords.geonames[0].name}+${coords.geonames[0].countryName}`
  const city = await getImageRoute(key, locationParameters);
  console.log(city)
  let image = '';
  let imageData = [];
  if (city.total == 0) {
    locationParameters = `${coords.geonames[0].countryName}`
    const country = await getImageRoute(key, locationParameters);
    image = country;
  } else {
    image = city;
  }
  imageData.push(image.hits[0].tags);
  imageData.push(image.hits[0].webformatURL);
  return imageData;
}

exports.getImageNotUSA = getImageNotUSA;