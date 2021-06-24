const createButtons = (data) => {
  const buttonHolder = document.createElement('div');
  buttonHolder.classList = 'button-holder';
  buttonHolder.id = `btns-${data.tripNum}`;

  const forecastBtn = document.createElement('button');
  forecastBtn.classList = 'show-hide';
  forecastBtn.innerHTML = 'Forecast';
  forecastBtn.addEventListener('click', () => {
    const weatherDiv = document.getElementById(`weather-${data.tripNum}`);
    weatherDiv.display = 'flex';
  });
  buttonHolder.appendChild(forecastBtn);

  const countryBtn = document.createElement('button');
  countryBtn.classList = 'show-hide';
  countryBtn.innerHTML = 'Country Info';
  countryBtn.addEventListener('click', () => {
    const countryDiv = document.getElementById(`country-${data.tripNum}`);
    countryDiv.display = 'flex';
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