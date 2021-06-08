//count days away from current date, make sure departure date is after arrival, make sure date chosen in today or later (not in the past)

const countdown = (startDate, endDate) => {
  const today = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);
  if (start < today) {
    alert('Please choose a future arrival date')
  } else if (end < today) {
    alert('Please choose a future departure date')
  } else if (end < start) {
    alert('Please choose a departure date that occurs after the arrival date')
  } else {
    //find number of days between two date function found at https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/
    const timeDif = start.getTime() - today.getTime();
    const numDays = timeDif/(1000 * 3600 * 24); //convert milliseconds to days
    return (numDays)
  }
}
