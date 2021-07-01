//count days away from current date
const countdown = (startDate) => {
  const today = new Date();
  const start = new Date(startDate);
  //find number of days between two date function found at https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/
  const timeDif = start.getTime() - today.getTime();
  const numDays = Math.ceil(timeDif/(1000 * 3600 * 24)); //convert milliseconds to days
  return (numDays)
}

export { countdown }