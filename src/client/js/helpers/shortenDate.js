//shorten a date to day/month format. Exclude the zero if a date starts with a zero.
const shortenDate = (date) => {
  const shortDate = date.replace(/^\d{4}[-]/, '')
  let slashDate = shortDate.replace(/-/g, '\/');

  if (/^0/.test(slashDate)) {
    slashDate = slashDate.replace(/^0/, '')
  }
  return slashDate
}

export { shortenDate }