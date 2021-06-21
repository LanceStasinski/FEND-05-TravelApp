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

  const headerText = document.createElement('div');
  headerText.classList = 'header-text';
  const title = document.createElement('h2');
  title.innerHTML = data.destination;
  headerText.appendChild(title);
  const daysAway = document.createElement('h3');
  daysAway.innerHTML = Client.displayDayOrDays(data);
  headerText.appendChild(daysAway);
  const dates = document.createElement('h3');
  const arrival = Client.convertDate(data.arrival);
  const departure = Client.convertDate(data.departure);
  dates.innerHTML = `${arrival} - ${departure}`;
  headerText.appendChild(dates);
  header.appendChild(headerText);

  card.appendChild(header);

  card.appendChild(Client.createWeatherDiv(data));

  card.appendChild(Client.createCountryInfoDiv(data));

  fragment.append(card);
  const entries = document.getElementById('entries');
  entries.appendChild(fragment);
}

export { createCard }