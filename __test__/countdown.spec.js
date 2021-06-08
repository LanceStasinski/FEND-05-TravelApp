const countdown = (startDate, endDate) => {
  const today = new Date('2021-06-08');
  const start = new Date(startDate);
  const end = new Date(endDate)
  if (start < today) {
    let alert = 'Please choose a future arrival date';
    return alert
  } else if (end < start) {
    let alert = 'Please choose a departure date that occurs after the arrival date';
    return alert
  } else {
    const timeDif = start.getTime() - today.getTime();
    const numDays = Math.floor(timeDif/(1000 * 3600 * 24));
    return (numDays)
  }
}

//test.each procedure found at https://dev.to/bgord/simplify-repetitive-jest-test-cases-with-test-each-310m
const cases = [
  ['2021-06-10', '2025-06-03', 2],
  ['2021-06-01', '2025-06-03', 'Please choose a future arrival date'],
  ['2021-06-10', '2021-06-07', 'Please choose a departure date that occurs after the arrival date'],
]

describe('Count days between two dates', () => {
  test.each(cases)(
    'given startDate as %p and endDate %p, return %p',
    (first, second, expectedResult) => {
      const result = countdown(first, second);
      expect(result).toBe(expectedResult);
    }
  )
})