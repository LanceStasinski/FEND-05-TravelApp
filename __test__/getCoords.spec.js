const { getCoords } = require('../src/server/middleware/getCoords');

describe('Test if function is defined', () => {
  test('Should be defined', () => {
    expect(getCoords).toBeDefined();
  })
})