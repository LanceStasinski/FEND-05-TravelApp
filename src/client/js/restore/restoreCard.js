const restoreCard = async (data) => {

    await Client.updateWeather(data);
    data.daysAway = Client.countdown(data.arrival).toString();
    console.log(data);

    const fragment = document.createDocumentFragment();
    const card = document.createElement('div');
    card.classList = 'card';
    card.id = `card-${data.tripNum}`;

    card.appendChild(Client.restoreHeader(data));
    card.appendChild(Client.createWeatherDiv(data));
    /*
    card.appendChild(Client.createCountryInfoDiv(data));
    card.appendChild(Client.createButtons(data))
    */
    card.appendChild(Client.createMetadata(data))
    fragment.append(card);
    const entries = document.getElementById('entries');
    entries.appendChild(fragment);

}

export { restoreCard }