const createButtons = (data) => {
  const tripNum = data.tripNum;
  const buttonHolder = document.createElement('div');
  buttonHolder.classList = 'button-holder';
  buttonHolder.id = `btns-${tripNum}`;

  const forecastBtn = document.createElement('button');
  forecastBtn.classList.add('show-hide', 'card-button', 'show-forecast');
  forecastBtn.innerHTML = 'Forecast';
  forecastBtn.addEventListener('click', () => {
    const weatherDiv = document.getElementById(`weather-${tripNum}`);
    if (weatherDiv.style.display == 'none') {
      weatherDiv.style.display = 'flex';
    } else {
      weatherDiv.style.display = 'none';
    }
  });
  buttonHolder.appendChild(forecastBtn);

  const countryBtn = document.createElement('button');
  countryBtn.classList.add('show-hide', 'card-button', 'show-country');
  countryBtn.innerHTML = 'Info';
  countryBtn.addEventListener('click', () => {
    const countryDiv = document.getElementById(`country-${tripNum}`);
    if (countryDiv.style.display == 'none') {
      countryDiv.style.display = 'flex';
    } else {
      countryDiv.style.display = 'none';
    }
  })
  buttonHolder.appendChild(countryBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('card-button', 'delete');
  deleteBtn.id = `delete-${tripNum}`;
  deleteBtn.style.display = 'none';
  deleteBtn.innerHTML = 'Delete';
  deleteBtn.addEventListener('click', () => {
    console.log(tripNum)
    /*
    const entries = document.getElementById('entries');
    const currentEntry = document.getElementById(`card-${tripNum}`);
    entries.removeChild(currentEntry);
    localStorage.removeItem(`card-${tripNum}`);
    */
  })
  buttonHolder.appendChild(deleteBtn);

  const saveBtn = document.createElement('button');
  saveBtn.classList.add('save', 'card-button');
  saveBtn.id = `save-${tripNum}`
  saveBtn.innerHTML = 'Save';
  saveBtn.addEventListener('click', () => {
    const save = document.getElementById(`save-${tripNum}`);
    save.style.display = 'none';
    const del = document.getElementById(`delete-${tripNum}`);
    del.style.display = 'block';
    const tripCard = document.getElementById(`card-${tripNum}`);

    const trip = {
      arrival: Client.getDateFromString(tripCard.getElementsByClassName('header-arrival')[0].innerHTML),
      departure: Client.getDateFromString(tripCard.getElementsByClassName('header-departure')[0].innerHTML),
      destination: tripCard.getElementsByClassName('header-title')[0].innerHTML,
      imageURL: tripCard.getElementsByClassName('header-image')[0].src,
      imageTag: tripCard.getElementsByClassName('header-image')[0].alt,
      countryName: tripCard.getElementsByClassName('country-name')[0].innerHTML,
      currency: tripCard.getElementsByClassName('country-currency')[0].innerHTML,
      capital: tripCard.getElementsByClassName('country-capital')[0].innerHTML,
      flag: tripCard.getElementsByClassName('country-flag')[0].src,
      language: tripCard.getElementsByClassName('country-language')[0].innerHTML,
      region: tripCard.getElementsByClassName('country-region')[0].innerHTML,
      tripNum: tripCard.getElementsByClassName('card-number')[0].innerHTML,
      lat: tripCard.getElementsByClassName('lat')[0].innerHTML,
      lng: tripCard.getElementsByClassName('lng')[0].innerHTML
    }
    localStorage.setItem(`card-${tripNum}`, JSON.stringify(trip));
  })
  buttonHolder.appendChild(saveBtn);
  return buttonHolder;
}

export { createButtons }