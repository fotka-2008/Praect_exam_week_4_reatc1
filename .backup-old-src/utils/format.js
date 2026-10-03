export function formatNumber(value) {
  return Math.round(value).toLocaleString('ru-RU')
}

export function formatPrice(value) {
  return formatNumber(value) + ' ₽'
}

export function calcMonthly(price, downPercent, months, rate = 1.9) {
  const loan = price - (price * downPercent) / 100
  const interest = loan * (rate / 100) * (months / 12)
  return (loan + interest) / months
}
