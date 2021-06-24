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

  const name = document.createElement('h3');
  name.classList = 'country-name';
  name.innerHTML = data.countryName;
  countryInfo.appendChild(name);

  const infoSections = document.createElement('div');
  infoSections.classList = 'sections';

  const section1 = document.createElement('div');
  section1.classList = 'section1';

  const capital = document.createElement('div');
  capital.classList = 'country-capital';
  capital.innerHTML = `<b>Capital</b>: ${data.capital}`;
  section1.appendChild(capital);

  const region = document.createElement('div');
  region.classList = 'country-region';
  region.innerHTML = `<b>Region</b>: ${data.region}`
  section1.appendChild(region);
  infoSections.appendChild(section1);

  const section2 = document.createElement('div');
  section2.classList = 'section2';

  const currency = document.createElement('div');
  currency.classList = 'country-currency';
  currency.innerHTML = `<b>Currency</b>: ${data.currency}`;
  section2.appendChild(currency);

  const language = document.createElement('div');
  language.classList = 'country-language';
  language.innerHTML = `<b>Language</b>: ${data.language}`;
  section2.appendChild(language);
  infoSections.appendChild(section2);

  countryInfo.appendChild(infoSections);
  country.appendChild(countryInfo);
  country.style.display = 'none';

  return country;
}

export { createCountryInfoDiv }