//import several function to build a card for the trip
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
    card.appendChild(Client.createMetadata(data));

    fragment.append(card);
    const entries = document.getElementById('entries');
    entries.appendChild(fragment);
  }
}

export { createCard }