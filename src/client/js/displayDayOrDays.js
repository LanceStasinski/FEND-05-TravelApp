const displayDayOrDays = (data) => {
  let string = '';
  if (data.daysAway == 1) {
    string  = `1 Day Away`;
  } else if (data.daysAway == 0){
    string = `The trip starts today!`;
  } else {
    string = `${data.daysAway} Days Away`
  }
  return string
}

export { displayDayOrDays }