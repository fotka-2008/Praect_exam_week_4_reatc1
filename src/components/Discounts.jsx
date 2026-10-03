import { useState } from 'react'
import { Link } from 'react-router-dom'
import Box from './Box'
import Icon from './Icon'
import RequestModal from './RequestModal'
import discounts from '../data/discounts.json'
import { num, price } from '../utils'

function amount(d, base) {
  return d.percent ? (base * d.value) / 100 : d.value
}

export default function Discounts({ car, className = 'mt-6' }) {
  const [on, setOn] = useState(discounts.filter((d) => d.on).map((d) => d.id))
  const [open, setOpen] = useState(false)
  const base = car.oldPrice
  const maxSum = discounts.reduce((s, d) => s + amount(d, base), 0)
  const sum = discounts.filter((d) => on.includes(d.id)).reduce((s, d) => s + amount(d, base), 0)

  function toggle(id) {
    setOn(on.includes(id) ? on.filter((x) => x !== id) : [...on, id])
  }

  return (
    <Box className={className}>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-[22px] lg:gap-y-6">
        {discounts.map((d) => {
          const active = on.includes(d.id)
          return (
            <div key={d.id} className="relative min-h-[166px] overflow-hidden rounded-[10px] bg-white px-6 py-5 shadow-card">
              <Icon name={d.icon} className="absolute right-[90px] bottom-[-20px] h-[120px] w-[120px] text-dark/[0.06]" strokeWidth={2.5} />
              <div className={'relative flex items-start justify-between gap-3 pr-[80px] ' + (active ? '' : 'opacity-35')}>
                <div>
                  <h3 className="text-[18px] font-medium">{d.title}</h3>
                  <p className="text-[15px] leading-tight text-muted">{d.sub}</p>
                </div>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={active}
                aria-label={d.title}
                onClick={() => toggle(d.id)}
                className={'absolute top-5 right-6 flex h-[40px] w-[70px] items-center rounded-full p-[5px] transition ' + (active ? 'bg-red' : 'bg-gray')}
              >
                <span className={'flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white transition ' + (active ? 'translate-x-[30px] text-red' : 'text-muted')}>
                  <Icon name={d.icon} className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </button>
              <div className={'relative mt-8 flex items-end justify-between ' + (active ? '' : 'opacity-35')}>
                <b className="text-[24px] font-medium">{d.label || '−' + (d.percent ? d.value + '% ₽' : num(d.value) + ' ₽')}</b>
                {d.more && (
                  <Link to={d.more} className="text-[11px] text-dark underline">
                    Подробнее
                  </Link>
                )}
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-6 grid overflow-hidden rounded-[10px] md:grid-cols-[1fr_2fr]">
        <div className="bg-soft px-6 py-6 md:px-[55px] md:py-8">
          <p className="text-[16px] text-muted/70">Максимальная скидка</p>
          <p className="text-[24px] font-medium text-muted/70">до {price(maxSum)}</p>
        </div>
        <div className="flex flex-col gap-5 bg-red px-6 py-6 text-white sm:flex-row sm:items-center sm:justify-between md:px-[55px] md:py-6">
          <div>
            <p className="text-[18px]">Ваша скидка</p>
            <p className="text-[34px] leading-tight font-bold">до {price(sum)}</p>
          </div>
          <button type="button" onClick={() => setOpen(true)} className="h-[64px] rounded-[4px] bg-white px-8 text-[15px] font-bold text-red uppercase hover:bg-gray sm:w-[422px]">
            Зафиксировать условия
          </button>
        </div>
      </div>
      {open && <RequestModal title="Зафиксировать условия" car={car.name + ': скидка до ' + price(sum)} onClose={() => setOpen(false)} />}
    </Box>
  )
}
