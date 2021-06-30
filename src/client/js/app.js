window.addEventListener('load', () => {
  if (window.localStorage.length !== 0) {
    for (let i = 0; i < window.localStorage.length; i++) {
      let trip = JSON.parse(localStorage.getItem(localStorage.key(i)));
      Client.restoreCard(trip);
    }
  }
})
const addEntry = async () => {
  const departureDate = document.getElementById('departure-date').value;
  const arrivalDate = document.getElementById('arrival-date').value;
  const destination = document.getElementById('destination').value;
  const days = Client.countdown(arrivalDate);

  //assign each entry a unique number
  let tripNum;
  const uniqueIds = document.querySelectorAll('div.card-number');
  if (uniqueIds.length == 0){
    tripNum = 0;
  } else {
    let idArray = [];
    for (const id of uniqueIds) {
      idArray.push(id.innerHTML)
    }
    tripNum = Math.max(...idArray);
  }

  if (days < 0) {
    alert('Please choose a future arrival date')
  } else if (departureDate < arrivalDate) {
    alert('Please choose a departure date that occurs after the arrival date')
  } else if (departureDate == '' || arrivalDate == '') {
    alert('Please enter trip dates')
  } else if (destination == '') {
    alert('Please enter a destination')
  } else {
    tripNum ++;
    const req = {
      arrival: arrivalDate,
      departure: departureDate,
      destination: destination,
      daysAway: days,
      tripNum: tripNum
    }
    Client.postToServer(req);
  }
}

const submit = document.getElementById('submit');
submit.addEventListener('click', addEntry);

export { addEntry }