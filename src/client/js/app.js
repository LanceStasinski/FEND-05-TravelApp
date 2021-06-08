const addEntry = () => {
  const departureDate = document.getElementById('departure-date').value
  const arrivalDate = document.getElementById('arrival-date').value
  const destination = document.getElementById('destination').value

  const days = countdown(arrivalDate, departureDate)

  const req = {
    arrival: arrivalDate,
    departure: departureDate,
    destination: destination,
    daysAway = days
  }
  Client.postToServer(req)
}


const submit = document.getElementById('submit')
submit.addEventListener('click', addEntry)

export { addEntry }