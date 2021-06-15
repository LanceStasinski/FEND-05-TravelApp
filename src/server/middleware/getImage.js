const getImage = async (coords) => {
  if (coords[0].countryCode == 'US') {
    const imageArray = await getImageUSA(coords)
  } else {
    const imageArray = await getImageNotUSA(coords)
  }
  return imageArray;
}

exports.getImage = getImage;