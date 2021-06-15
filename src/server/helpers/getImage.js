const { getImageUSA } = require('./getImageUSA');
const { getImageNotUSA } = require('./getImageNotUSA');

const getImage = async (coords, key) => {
  if (coords[0].countryCode == 'US') {
    const imageArray = await getImageUSA(coords, key)
  } else {
    const imageArray = await getImageNotUSA(coords, key)
  }
  return imageArray;
}

exports.getImage = getImage;