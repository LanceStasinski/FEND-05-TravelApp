const restoreButtons = (data) => {
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

  return buttonHolder;
}

export { restoreButtons }