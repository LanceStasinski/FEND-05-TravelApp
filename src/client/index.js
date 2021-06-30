import { addEntry } from './js/app'
import { postToServer } from './js/postToServer'
import { countdown } from './js/countdown'
import { createCard } from './js/createCard'
import { convertDate } from './js/convertDate'
import { displayDayOrDays } from './js/displayDayOrDays'
import { createForecastArray } from './js/createForecastArray'
import { createWeatherDiv } from './js/createWeatherDiv'
import { shortenDate } from './js/shortenDate'
import { createCountryInfoDiv } from './js/createCountryInfoDiv'
import { createHeader } from './js/createHeader'
import { createButtons } from './js/createButtons'
import { createMetadata } from './js/createMetadata'
import { restoreCard } from './js/restore/restoreCard'
import { updateWeather } from './js/restore/updateWeather'
import { getDateFromString } from './js/getDateFromString'
import { restoreHeader } from './js/restore/restoreHeader'
import { restoreCountryInfo } from './js/restore/restoreCountryInfo'
import { restoreButtons } from './js/restore/restoreButtons'

import './styles/_base.scss'
import './styles/main.scss'
import './styles/header.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/card.scss'
import './styles/card-header.scss'
import './styles/country-info.scss'
import './styles/weather-forecast.scss'
import './styles/buttons.scss'

export {
  addEntry,
  postToServer,
  countdown,
  createCard,
  convertDate,
  displayDayOrDays,
  createForecastArray,
  createWeatherDiv,
  shortenDate,
  createCountryInfoDiv,
  createHeader,
  createButtons,
  createMetadata,
  restoreCard,
  updateWeather,
  getDateFromString,
  restoreHeader,
  restoreCountryInfo,
  restoreButtons
}