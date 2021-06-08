const countdown = (startDate) => {
  const today = new Date('2021-06-08');
  const start = new Date(startDate);
  const timeDif = start.getTime() - today.getTime();
  const numDays = timeDif/(1000 * 3600 * 24);
  return (numDays)
}

//test.each procedure found at https://dev.to/bgord/simplify-repetitive-jest-test-cases-with-test-each-310m
const cases = [
  ['2021-06-10', 2],
  ['2021-06-07', -1],
  ['2021-06-08', 0],
]

describe('Count days between two dates', () => {
  test.each(cases)(
    'given startDate as %p, return %p',
    (date, expectedResult) => {
      const result = countdown(date);
      expect(result).toBe(expectedResult);
    }
  )
})