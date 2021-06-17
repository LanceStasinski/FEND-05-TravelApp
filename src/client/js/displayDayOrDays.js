const displayDayOrDays = (data) => {
  let string = '';
  if (data.daysAway == 1) {
    string  = `1 Day Away`;
  } else {
    string = `${data.daysAway} Days Away`;
  }
  return string
}