const shortenDate = (date) => {
  const newDate = new Date(date);
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  const dateString = `${month}/${day}`;
  return dateString;
}

export { shortenDate }