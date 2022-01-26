//This function posts to the server which then responds with updated weather data.
const REST_API = process.env.REST_API;

const updateWeather = async (data) => {
  try {
    await fetch(`${REST_API}/update`, {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        data.current = response.current;
        data.forecast = response.forecast;
      });
  } catch (error) {
    console.log("error", error);
    alert("Cannot reach local server");
  }
};

export { updateWeather };
