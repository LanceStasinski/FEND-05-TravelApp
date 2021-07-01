const fetch = require('node-fetch');

//fetch image information from Pixabay API
const getImageRoute = async (key, locationParameters) => {
  const response = await fetch(`https://pixabay.com/api/?key=${key}&q=${locationParameters}&image_type=photo&orientation=horizontal&category=places&safesearch=true`);
  try {
    const imageInfo = await response.json();
    return imageInfo;
  } catch (error) {
    console.log("error", error);
  }
}

exports.getImageRoute = getImageRoute;
