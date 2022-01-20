//add hidden metadata to the card that is used to save the information of each
//card
const createMetadata = (data) => {
  const metadata = document.createElement("div");
  metadata.classList = "metadata";
  metadata.style.display = "none";

  const cardNum = document.createElement("div");
  cardNum.innerHTML = data.tripNum;
  cardNum.classList = "card-number";
  metadata.appendChild(cardNum);

  const lat = document.createElement("div");
  lat.innerHTML = data.lat;
  lat.classList = "lat";
  metadata.appendChild(lat);

  const lng = document.createElement("div");
  lng.innerHTML = data.lng;
  lng.classList = "lng";
  metadata.appendChild(lng);

  return metadata;
};

export { createMetadata };
