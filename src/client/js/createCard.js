const createCard = (data) => {
  const fragment = document.createDocumentFragment();
  const card = document.createElement('div');
  card.classList = 'card';

  const header = document.createElement('header');
  const title = document.createElement('h2');
  title.innerHTML = data.destination;
  header.appendChild(title);
  const daysAway = document.createElement('h3');
  daysAway.innerHTML = `${data.daysAway} Days Away`;
  const dates = document.createElement('h3');
  //const arrival = data.arrival.toLocaleDateString("en-US", {timeZone: 'UTC'});
  //const departure = data.departure.toLocaleDateString("en-US", {timeZone: 'UTC'});
  dates.innerHTML = `${data.arrival} - ${data.departure}`;
  header.appendChild(dates);
  card.appendChild(header)

  const cityImg = document.createElement('img');
  cityImg.src = data.imageURL;
  cityImg.alt = data.imageTag;
  card.appendChild(cityImg)


  fragment.append(card);
  const entries = document.getElementById('entries');
  entries.appendChild(fragment);
}

export { createCard }