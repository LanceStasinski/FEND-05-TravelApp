import { convertDate } from "../src/client/js/convertDate";

describe('Test if date is converted to mm/dd/yyyy format', () => {
  test('2021-06-17 should be 6/17/2021', () => {
    expect(convertDate('2021-06-17')).toBe('6/17/2021')
  })
})