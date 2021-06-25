const createButtons = (data) => {
  const tripNum = data.tripNum;
  const buttonHolder = document.createElement('div');
  buttonHolder.classList = 'button-holder';
  buttonHolder.id = `btns-${tripNum}`;

  const forecastBtn = document.createElement('button');
  forecastBtn.classList.add('show-hide', 'card-button');
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
  countryBtn.classList.add('show-hide', 'card-button');
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

  const saveBtn = document.createElement('button');
  saveBtn.classList.add('save', 'card-button');
  saveBtn.innerHTML = 'Save';
  buttonHolder.appendChild(saveBtn);
  //add event listener

  const deleteBtn = document.createElement('button');
  deleteBtn.classList = 'card-button';
  deleteBtn.innerHTML = 'Delete';
  buttonHolder.appendChild(deleteBtn);
  //add event listener

  return buttonHolder;
}

export { createButtons }