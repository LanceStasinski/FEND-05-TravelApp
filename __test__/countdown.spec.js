const countdown = (startDate, endDate) => {
  const today = new Date('2021-06-08');
  const start = new Date(startDate);
  const end = new Date(endDate)
  if (start < today) {
    let alert = 'Please choose a future arrival date';
    return alert
  } else if (end < today) {
    let alert = 'Please choose a future departure date';
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

describe('Count days between two dates', () => {
  test('it should be 2', () => {
    expect(countdown('2021-06-10', '2025-06-03')).toBe(2);
  })
})