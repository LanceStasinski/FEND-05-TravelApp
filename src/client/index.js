import { addEntry } from './js/app'
import { postToServer } from './js/postToServer'
import { countdown } from './js/countdown'
import { getData } from './js/getData'
import { createCard } from './js/createCard'
import { convertDate } from './js/convertDate'
import { displayDayOrDays } from './js/displayDayOrDays'
import { createCurrentWeatherDiv } from './js/createCurrentWeatherDiv'
import { createForecastWeatherDiv } from './js/createForecastWeatherDiv'
import { createWeatherDiv } from './js/createWeatherDiv'
import { shortenDate } from './js/shortenDate'
import { createCountryInfoDiv } from './js/createCountryInfoDiv'
import { createHeader } from './js/createHeader'

import './styles/_base.scss'
import './styles/main.scss'
import './styles/header.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/card.scss'
import './styles/card-header.scss'
import './styles/country-info.scss'
import './styles/weather-current.scss'
import './styles/weather-forecast.scss'

export {
  addEntry,
  postToServer,
  countdown,
  getData,
  createCard,
  convertDate,
  displayDayOrDays,
  createCurrentWeatherDiv,
  createForecastWeatherDiv,
  createWeatherDiv,
  shortenDate,
  createCountryInfoDiv,
  createHeader
}