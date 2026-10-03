export function price(n) {
  return Math.round(n).toLocaleString('ru-RU').replace(/,/g, ' ') + ' ₽'
}

export function num(n) {
  return Math.round(n).toLocaleString('ru-RU').replace(/,/g, ' ')
}

export function monthly(sum, months, rate = 9.9) {
  if (sum <= 0) return 0
  const r = rate / 100 / 12
  return (sum * r) / (1 - Math.pow(1 + r, -months))
}

export function maskPhone(value) {
  let d = value.replace(/\D/g, '')
  if (d.startsWith('8') || d.startsWith('7')) d = d.slice(1)
  d = d.slice(0, 10)
  if (!d) return ''
  let s = '+7 (' + d.slice(0, 3)
  if (d.length >= 3) s += ') ' + d.slice(3, 6)
  if (d.length >= 6) s += '-' + d.slice(6, 8)
  if (d.length >= 8) s += '-' + d.slice(8, 10)
  return s
}

export function phoneOk(value) {
  return value.replace(/\D/g, '').length === 11
}

export function load(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || []
  } catch {
    return []
  }
}

export function save(key, list) {
  try {
    localStorage.setItem(key, JSON.stringify(list))
  } catch {
    return
  }
}

export function carLink(car) {
  return '/' + car.type + '/' + car.id
}

export function sortList(list, sort) {
  if (!sort.key) return list
  return [...list].sort((a, b) => {
    const x = a[sort.key]
    const y = b[sort.key]
    const r = typeof x === 'number' ? x - y : String(x).localeCompare(String(y), 'ru', { numeric: true })
    return r * sort.dir
  })
}

export function nextSort(sort, key) {
  return sort.key === key ? { key, dir: -sort.dir } : { key, dir: 1 }
}

export const prices = [0, 500000, 800000, 1100000, 1400000, 1700000, 2000000, 2300000, 2700000, 3000000]

export function match(car, f) {
  if (f.brand && car.brand !== f.brand) return false
  if (f.model && car.model !== f.model) return false
  if (f.year && car.year !== Number(f.year)) return false
  if (f.body && car.body !== f.body) return false
  if (f.gearbox && car.gearbox !== f.gearbox) return false
  if (car.price < prices[f.from] || car.price > prices[f.to]) return false
  return true
}
