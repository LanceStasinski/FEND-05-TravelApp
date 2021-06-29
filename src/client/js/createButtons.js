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

  const deleteBtn = document.createElement('button');
  deleteBtn.classList = 'card-button';
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
    const cardHTML = tripCard.outerHTML;
    localStorage.setItem(`card-${tripNum}`, cardHTML);
  })
  buttonHolder.appendChild(saveBtn);
  return buttonHolder;
}

export { createButtons }