const fetch = require('node-fetch');

const getImageState = async (coords, key) => {
  const response = await fetch(`https://pixabay.com/api/?key=${key}&q=${coords.geonames[0].adminName1}&image_type=photo&orientation=horizontal&category=places&safesearch=true`);
  try {
    const imageInfo = await response.json();
    return imageInfo;
  } catch (error) {
    console.log("error", error);
  }
}

exports.getImageState = getImageState;