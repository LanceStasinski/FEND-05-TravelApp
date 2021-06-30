import { getDateFromString } from "../src/client/js/helpers/getDateFromString";

let string = '';
const cases = [
  [string = 'Today is 6/30/2021', '6/30/2021'],
  [string = 'Some other date is 12/2/2021', '12/2/2021'],
  [string = 'Here is some text and a date 2/2/2024', '2/2/2024'],
]

describe('Display the correct string given daysAway', () => {
  test.each(cases)(
    'given string as %p, return %p',
    (string, expectedResult) => {
      const result = getDateFromString(string);
      expect(result).toBe(expectedResult);
    }
  )
})