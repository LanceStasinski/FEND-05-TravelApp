const getData = async () => {
  const req = await fetch('http://localhost:3030/all');

  try {
    const travelData = await req.json();
    console.log(travelData);
  } catch (error) {
    console.log("error", error);
  }
}

export { getData }