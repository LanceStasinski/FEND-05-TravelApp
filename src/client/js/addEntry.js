const addEntry = () => {
  const date = document.getElementById('date').value
  const destination = document.getElementById('destination').value
  const req = {
    date: date,
    destination: destination
  }
  Client.postToServer(req)
}


const submit = document.getElementById('submit')
submit.addEventListener('click', addEntry)

export { addEntry }