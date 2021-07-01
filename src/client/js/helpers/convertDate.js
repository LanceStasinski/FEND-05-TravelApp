//convert date to month/day/year format
const convertDate = (date) => {
  const newDate = new Date(date)
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate() + 1;
  const year = newDate.getFullYear();
  const dateString = `${month}/${day}/${year}`;
  return dateString;
}

export { convertDate }