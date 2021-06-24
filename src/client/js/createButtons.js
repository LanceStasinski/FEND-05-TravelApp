const createButtons = (data) => {
  const tripNum = data.tripNum;
  const buttonHolder = document.createElement('div');
  buttonHolder.classList = 'button-holder';
  buttonHolder.id = `btns-${tripNum}`;

  const forecastBtn = document.createElement('button');
  forecastBtn.classList = 'show-hide';
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
  countryBtn.classList = 'show-hide';
  countryBtn.innerHTML = 'Country Info';
  countryBtn.addEventListener('click', () => {
    const countryDiv = document.getElementById(`country-${tripNum}`);
    if (countryDiv.style.display == 'none') {
      countryDiv.style.display = 'flex';
    } else {
      countryDiv.style.display = 'none';
    }
  })
  buttonHolder.appendChild(countryBtn);

  const saveBtn = document.createElement('button');
  saveBtn.classList = 'save';
  saveBtn.innerHTML = 'Save';
  buttonHolder.appendChild(saveBtn);
  //add event listener

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'Delete';
  buttonHolder.appendChild(deleteBtn);
  //add event listener

  return buttonHolder;
}

export { createButtons }