if (window.localStorage.length !== 0) {
  const savedEntries = document.getElementById('entries');

  for (let i = 0; i < window.localStorage.length; i++) {
    let newDiv = document.createElement('div');
    newDiv.innerHTML = localStorage.getItem(localStorage.key(i));
    let newCard = newDiv.firstChild;
    savedEntries.appendChild(newCard);
  }
}

const uniqueIds = document.querySelectorAll('div.card-number');

let tripNum;

if (uniqueIds.length == 0) {
  tripNum = 0;
} else {
  let idArray = [];
  for (const id of uniqueIds) {
    idArray.push(id.innerHTML)
  }
  tripNum = Math.max(...idArray);
}

console.log(tripNum)

const addEntry = async () => {
  const departureDate = document.getElementById('departure-date').value;
  const arrivalDate = document.getElementById('arrival-date').value;
  const destination = document.getElementById('destination').value;
  const days = Client.countdown(arrivalDate);

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