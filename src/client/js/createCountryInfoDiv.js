const createCountryInfoDiv = (data) => {
  const country = document.createElement('div');
  country.classList = 'country';

  const flag = document.createElement('img');
  flag.src = data.flag;
  flag.alt = `${data.countryName}'s flag`;
  flag.classList = 'country-flag';
  country.appendChild(flag);

  const countryInfo = document.createElement('div');
  countryInfo.classList = 'country-info';

  const name = document.createElement('h3');
  name.classList = 'country-name';
  name.innerHTML = data.countryName;
  countryInfo.appendChild(name);

  const capital = document.createElement('div');
  capital.classList = 'country-capital';
  capital.innerHTML = `<b>Capital</b>: ${data.capital}`;
  countryInfo.appendChild(capital);

  const currency = document.createElement('div');
  currency.classList = 'country-currency';
  currency.innerHTML = `<b>Currency</b>: ${data.currency}`;
  countryInfo.appendChild(currency);

  const language = document.createElement('div');
  language.classList = 'country-language';
  language.innerHTML = `<b>Language</b>: ${data.language}`;
  countryInfo.appendChild(language);

  country.appendChild(countryInfo);

  return country;
}

export { createCountryInfoDiv }