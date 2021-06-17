import { shortenDate } from "../src/client/js/shortenDate";

describe('Test if date is converted to mm/dd', () => {
  test('2021-06-17 should be 6/17', () => {
    expect(shortenDate('2021-06-17')).toBe('6/17')
  })
})