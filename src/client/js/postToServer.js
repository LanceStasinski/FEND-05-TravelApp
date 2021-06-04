const { response } = require("express")

const postToServer = async (data) => {
  await fetch('/add', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })

  try {
    const res = await response.json()
    console.log(res)
  } catch (error) {
    console.log("error", error)
    alert('Cannot reach local server')
  }
}