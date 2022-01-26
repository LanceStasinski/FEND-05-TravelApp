//post data to server, which then fetches date from the external APIs, and call
//the createCard function when the response is recieved
const REST_API = process.env.REST_API;

const postToServer = async (data) => {
  try {
    await fetch(`${REST_API}/add`, {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        Client.createCard(response);
      });
  } catch (error) {
    console.log("error", error);
    alert("Cannot reach server");
  }
};

export { postToServer };
