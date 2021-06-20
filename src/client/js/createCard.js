const createCard = (data) => {
  const fragment = document.createDocumentFragment();
  const card = document.createElement('div');
  card.classList = 'card';

  const header = document.createElement('div');
  header.classList = 'card-header';
  const title = document.createElement('h2');
  title.innerHTML = data.destination;
  header.appendChild(title);
  const daysAway = document.createElement('h3');
  daysAway.innerHTML = Client.displayDayOrDays(data);
  header.appendChild(daysAway);
  const dates = document.createElement('h3');
  const arrival = Client.convertDate(data.arrival);
  const departure = Client.convertDate(data.departure);
  dates.innerHTML = `${arrival} - ${departure}`;
  header.appendChild(dates);
  header.style.backgroundImage = `url(${data.imageURL})`;
  card.appendChild(header);

  card.appendChild(Client.createWeatherDiv(data));

  card.appendChild(Client.createCountryInfoDiv(data));

  fragment.append(card);
  const entries = document.getElementById('entries');
  entries.appendChild(fragment);
}

export { createCard }