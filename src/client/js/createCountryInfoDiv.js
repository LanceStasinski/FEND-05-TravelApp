const createCountryInfoDiv = (data) => {
  const country = document.createElement('div');
  country.classList = 'country';

  const countryInfo = document.createElement('div');
  countryInfo.classList = 'country-info';

  const name = document.createElement('div');
  name.classList = 'country-name';
  name.innerHTML = data.countryName;
  countryInfo.appendChild(name);

  const capital = document.createElement('div');
  capital.classList = 'country-capital';
  capital.innerHTML = `Capital: ${data.capital}`;
  countryInfo.appendChild(capital);

  const currency = document.createElement('div');
  currency.classList = 'country-currency';
  currency.innerHTML = `Currency: ${data.currency}`;
  countryInfo.appendChild(currency);

  const language = document.createElement('div');
  language.classList = 'country-language';
  language.innerHTML = `Language: ${data.language}`;
  countryInfo.appendChild(language);

  country.appendChild(countryInfo);

  const flag = document.createElement('img');
  flag.src = data.flag;
  flag.alt = `${data.countryName}'s flag`;
  flag.classList = 'country-flag';
  country.appendChild(flag);

  return country;
}

export { createCountryInfoDiv }