const createCard = (data) => {
  const fragment = document.createDocumentFragment();
  const card = document.createElement('div');
  card.classList = 'card';

  const header = document.createElement('div');
  header.classList = 'card-header';

  const img = document.createElement('img');
  img.src = data.imageURL;
  img.alt = data.imageTag;
  img.classList = 'city-img';
  header.appendChild(img);



  card.appendChild(header);

  card.appendChild(Client.createWeatherDiv(data));

  card.appendChild(Client.createCountryInfoDiv(data));

  fragment.append(card);
  const entries = document.getElementById('entries');
  entries.appendChild(fragment);
}

export { createCard }