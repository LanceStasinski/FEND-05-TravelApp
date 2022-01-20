//get a date from a longer string that contains a date
const getDateFromString = (string) => {
  const dateExp = /\d+[/]\d+[/]\d{4}/;
  const date = string.match(dateExp);
  return date[0];
};

export { getDateFromString };
