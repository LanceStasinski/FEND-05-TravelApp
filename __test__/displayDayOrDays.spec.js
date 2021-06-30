import { displayDayOrDays } from "../src/client/js/displayDayOrDays";

let data = {}
const cases = [
  [data = {daysAway: '1'}, '1 Day Away'],
  [data = {daysAway: '2'}, '2 Days Away'],
  [data = {daysAway: '0'}, 'The trip starts today!'],
  [data = {daysAway: '-5'}, '5 Days Ago'],
]

describe('Display the correct string given daysAway', () => {
  test.each(cases)(
    'given data as %p, return %p',
    (data, expectedResult) => {
      const result = displayDayOrDays(data);
      expect(result).toBe(expectedResult);
    }
  )
})