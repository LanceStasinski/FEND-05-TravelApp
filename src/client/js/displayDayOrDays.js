const displayDayOrDays = (data) => {
  let string = (data.daysAway == 1) ? `1 Day Away`
    : (data.daysAway == 0) ? `The trip starts today!`
    : `${data.daysAway} Days Away`;
    return string
}

export { displayDayOrDays }