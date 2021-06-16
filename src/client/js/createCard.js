const createCard = (data) => {
  const frag = document.createDocumentFragment();
  const card = document.createElement('div');
  card.classList('card');

  const header = document.createElement('header');
  const title = document.createElement('h2');
  title.innerHTML = data.destination;
  header.appendChild(title);
  const daysAway = document.createElement('h3');
  daysAway.innerHTML = `${data.daysAway} Days Away`;

}