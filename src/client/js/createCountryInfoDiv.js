const createCountryInfoDiv = (data) => {
  const country = document.createElement('div');
  country.classList = 'country';
  country.id = `country-${data.tripNum}`;

  const flag = document.createElement('img');
  flag.src = data.flag;
  flag.alt = `${data.countryName}'s flag`;
  flag.classList = 'country-flag';
  country.appendChild(flag);

  const countryInfo = document.createElement('div');
  countryInfo.classList = 'country-info';

  const dataSection = document.createElement('div');
  dataSection.classList = 'data-section';

  const name = document.createElement('div');
  name.classList = 'country-name';
  name.innerHTML = `<b>${data.countryName}<b>`;
  countryInfo.appendChild(name);

  const capital = document.createElement('div');
  capital.classList = 'country-data';
  capital.innerHTML = `<b>Capital</b>: ${data.capital}`;
  dataSection.appendChild(capital);

  const region = document.createElement('div');
  region.classList = 'country-data';
  region.innerHTML = `<b>Region</b>: ${data.region}`
  dataSection.appendChild(region);

  const currency = document.createElement('div');
  currency.classList = 'country-data';
  currency.innerHTML = `<b>Currency</b>: ${data.currency}`;
  dataSection.appendChild(currency);

  const language = document.createElement('div');
  language.classList = 'country-data';
  language.innerHTML = `<b>Language</b>: ${data.language}`;
  dataSection.appendChild(language);

  countryInfo.appendChild(dataSection);
  country.appendChild(countryInfo);
  country.style.display = 'none';

  return country;
}

export { createCountryInfoDiv }