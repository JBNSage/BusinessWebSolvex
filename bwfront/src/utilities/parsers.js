export function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function getLast4Digits(x) {
  return x.toString().substr(x.length - 4);
}
