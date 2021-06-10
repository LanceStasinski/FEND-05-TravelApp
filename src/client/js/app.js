const addEntry = async () => {
  const departureDate = document.getElementById('departure-date').value;
  const arrivalDate = document.getElementById('arrival-date').value;
  const destination = document.getElementById('destination').value;
  const days = Client.countdown(arrivalDate);

  if (days < 0) {
    alert('Please choose a future arrival date')
  } else if (departureDate < arrivalDate) {
    alert('Please choose a departure date that occurs after the arrival date')
  } else {
    const req = {
      arrival: arrivalDate,
      departure: departureDate,
      destination: destination,
      daysAway: days
    };
    Client.postToServer(req)
    .then(Client.getData())
  }
}

const submit = document.getElementById('submit')
submit.addEventListener('click', addEntry)

export { addEntry }