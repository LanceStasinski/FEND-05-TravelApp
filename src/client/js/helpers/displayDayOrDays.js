//Determine the best string to display considering the number of days away the trip is
const displayDayOrDays = (data) => {
  let daysAway = data.daysAway;

  let string = (daysAway == 1) ? `1 Day Away`
    : (daysAway == 0) ? `The trip starts today!`
    : (daysAway < 0) ? `${daysAway.match(/\d+/)[0]} Days Ago`
    : `${daysAway} Days Away`;
    return string
}

export { displayDayOrDays }