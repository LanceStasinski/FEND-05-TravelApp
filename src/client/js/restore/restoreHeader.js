//near clone of createHeader but makes use of some html elements from the saved
//trip
const restoreHeader = (data) => {
  const header = document.createElement('div');
  header.classList = 'card-header';

  const image = document.createElement('img');
  image.classList = 'header-image';
  image.src = data.imageURL;
  image.alt = data.imageTag;
  header.appendChild(image);

  const background = document.createElement('div');
  background.classList = 'header-background';
  background.style.backgroundImage = `url(${data.imageURL})`;
  header.appendChild(background);

  const headerText = document.createElement('div');
  headerText.classList = 'header-text';

  const title = document.createElement('h2')
  title.innerHTML = data.destination;
  title.classList = 'header-title';
  headerText.appendChild(title);

  const icon = document.createElement('img');
  icon.classList = 'header-icon';
  icon.src = `./src/client/media/weather-icons/${data.current.icon}.png`;
  icon.alt = data.current.sky;
  headerText.appendChild(icon);

  const temp = document.createElement('div');
  temp.classList = 'header-temp';
  temp.innerHTML = `${data.current.temp} °F`;
  headerText.appendChild(temp);

  const arrival = document.createElement('div');
  arrival.classList = 'header-arrival';
  arrival.innerHTML = `Arrival: ${data.arrival}`;
  headerText.appendChild(arrival);

  const departure = document.createElement('div');
  departure.classList = 'header-departure';
  departure.innerHTML = `Departure: ${data.departure}`;
  headerText.appendChild(departure);

  const daysAway = document.createElement('div');
  daysAway.classList = 'header-days';
  daysAway.innerHTML = Client.displayDayOrDays(data);
  headerText.appendChild(daysAway);

  header.appendChild(headerText);

  return header;
}

export { restoreHeader }