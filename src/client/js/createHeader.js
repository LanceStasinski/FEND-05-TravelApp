const createHeader = (data) => {
  const header = document.createElement('div');
  header.classList = 'card-header';
  header.style.backgroundImage = `url(${data.imageURL})`;

  const title = document.createElement('h2')
  title.innerHTML = data.destination;
  title.classList = 'header-title';
  header.appendChild(title);

  const icon = document.createElement('div');
  icon.classList = 'header-icon';
  icon.innerHTML = data.current.icon;
  header.appendChild(icon);

  const temp = document.createElement('div');
  temp.classList = 'header-temp';
  temp.innerHTML = `${data.current.temp} °F`;
  header.appendChild(temp);

  const arrival = document.createElement('div');
  arrival.classList = 'header-date';
  arrival.innerHTML = `Arrival: ${Client.convertDate(data.arrival)}`;
  header.appendChild(arrival);

  const departure = document.createElement('div');
  departure.classList = 'header-date';
  departure.innerHTML = `Departure: ${Client.convertDate(data.departure)}`;
  header.appendChild(departure);

  const daysAway = document.createElement('div');
  daysAway.classList = 'header-days';
  daysAway.innerHTML = Client.displayDayOrDays(data);
  header.appendChild(daysAway);

  return header;
}

export { createHeader }