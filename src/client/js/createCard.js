const createCard = (data) => {
  const fragment = document.createDocumentFragment();
  const card = document.createElement('div');
  card.classList = 'card';
  card.id = `card-${data.tripNum}`;

  card.appendChild(Client.createHeader(data));
  card.appendChild(Client.createWeatherDiv(data));
  card.appendChild(Client.createCountryInfoDiv(data));

  fragment.append(card);
  const entries = document.getElementById('entries');
  entries.appendChild(fragment);
}

export { createCard }