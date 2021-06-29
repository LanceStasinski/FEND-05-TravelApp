const updateWeather = async (data) => {
  try {
    await fetch('http://localhost:3030/update', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      //add objects to data
    })
  } catch (error) {
    console.log("error", error);
    alert('Cannot reach local server');
  }
}

export { updateWeather }