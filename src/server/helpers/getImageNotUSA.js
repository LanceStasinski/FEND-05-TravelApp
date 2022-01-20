const { getImageRoute } = require("../middleware/getImageRoute");

//If image of the city is not available, get an image of the country.
const getImageNotUSA = async (coords, key) => {
  let image;
  let imageData = [];
  let locationParameters = `${coords.geonames[0].name}+${coords.geonames[0].countryName}`;
  try {
    const city = await getImageRoute(key, locationParameters);
    if (!city || city.total == 0) {
      locationParameters = `${coords.geonames[0].countryName}`;
      const country = await getImageRoute(key, locationParameters);
      if (!country || country.total == 0) {
        const map = await getImageRoute(key, "map");
        image = map;
      } else {
        image = country;
      }
    } else {
      image = city;
    }
  } catch (error) {
    console.log(error);
  }

  imageData.push(image.hits[0].tags);
  imageData.push(image.hits[0].webformatURL);
  return imageData;
};

exports.getImageNotUSA = getImageNotUSA;
