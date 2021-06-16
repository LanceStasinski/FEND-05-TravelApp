const { getImageUSA } = require('./getImageUSA');
const { getImageNotUSA } = require('./getImageNotUSA');

const getImage = async (coords, key) => {
  let imageArray = '';

  if (coords.geonames[0].countryCode == 'US') {
    imageArray = await getImageUSA(coords, key)
  } else {
    imageArray = await getImageNotUSA(coords, key)
  }
  return imageArray;
}

exports.getImage = getImage;