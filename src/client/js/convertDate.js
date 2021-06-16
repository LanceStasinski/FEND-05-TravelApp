const convertDate = (date) => {
  const dateNew = new Date(date);
  const USdate = dateNew.toLocaleDateString("en-US");
  return USdate;
}

export { convertDate }