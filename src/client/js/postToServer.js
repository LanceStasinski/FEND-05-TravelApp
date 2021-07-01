//post data to server, which then fetches date from the external APIs, and call
//the createCard function when the response is recieved
const postToServer = async (data) => {
  try {
    await fetch('http://localhost:3030/add', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      Client.createCard(response);
    })
  } catch (error) {
    console.log("error", error);
    alert('Cannot reach local server');
  }
}

export { postToServer }