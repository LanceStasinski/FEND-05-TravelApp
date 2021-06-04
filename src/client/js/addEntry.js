import postToServer from './postToServer'

const addEntry = () => {
  const date = document.getElementById('date').value
  const destination = document.getElementById('destination').value
  const req = {
    date: date,
    destination: destination
  }
  postToServer(req)
  .then()
}


const submit = document.getElementById('submit')
submit.addEventListener('click', addEntry)