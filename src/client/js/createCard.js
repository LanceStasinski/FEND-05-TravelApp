const createCard = (data) => {

  if (data.message == 'Location not recognized') {
    alert('The destination you chose was not found. Please enter a new destination.')
  } else {
    const fragment = document.createDocumentFragment();
    const card = document.createElement('div');
    card.classList = 'card';
    card.id = `card-${data.tripNum}`;

    card.appendChild(Client.createHeader(data));
    card.appendChild(Client.createWeatherDiv(data));
    card.appendChild(Client.createCountryInfoDiv(data));
    card.appendChild(Client.createButtons(data))

    const metadata = document.createElement('div');
    metadata.classList = 'metadata';
    metadata.style.display = 'none';

    const cardNum = document.createElement('div');
    cardNum.innerHTML = data.tripNum;
    cardNum.classList = 'card-number';
    metadata.appendChild(cardNum);

    const lat = document.createElement('div');
    lat.innerHTML = data.lat;
    lat.classList = 'lat';
    metadata.appendChild(lat);

    const lng = document.createElement('div');
    lng.innerHTML = data.lng;
    lng.classList = 'lng';
    metadata.appendChild(lng);
    card.appendChild(metadata);

    fragment.append(card);
    const entries = document.getElementById('entries');
    entries.appendChild(fragment);
  }
}

export { createCard }