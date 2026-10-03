import { useState } from 'react'
import { Link } from 'react-router-dom'
import CardActions from './CardActions'
import CarImg from './CarImg'
import Sold from './Sold'
import Icon from './Icon'
import RequestModal from './RequestModal'
import { num, price } from '../utils'

const classes = { econom: 'Эконом', comfort: 'Комфорт', 'comfort-plus': 'Комфорт +' }

export default function CarCardTaxi({ car, store }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-[30px] border border-line bg-white px-4 pt-5 pb-6 sm:px-6">
      {car.sold && <Sold />}
      <div className="flex items-center justify-between">
        <CardActions id={car.id} store={store} />
        <span className="rounded-full bg-gray px-3 py-1 text-[11px] font-bold uppercase">{classes[car.class]}</span>
      </div>
      <Link to={'/taxi/' + car.id} className="mx-auto mt-1 block h-[150px] w-[320px] max-w-full">
        <CarImg car={car} className="h-full w-full" />
      </Link>
      <Link to={'/taxi/' + car.id} className="mt-3 text-center text-[22px] leading-tight font-medium hover:text-red">
        {car.name}
        <br />
        {car.trim}
      </Link>
      <p className="mt-4 text-center text-[18px] text-muted">от {price(car.price)}</p>
      <p className="text-center text-[32px] leading-tight font-bold">от {num(car.day)} ₽/день</p>
      <ul className="mt-5 mb-6 flex flex-col gap-2.5 text-[15px]">
        {car.gifts.map((g) => (
          <li key={g} className="flex items-center gap-3">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red text-white">
              <Icon name="gift" className="h-3 w-3" strokeWidth={2.5} />
            </span>
            {g}
          </li>
        ))}
      </ul>
      <div className="relative isolate mt-auto grid grid-cols-2 gap-2">
        <Link to={'/taxi/' + car.id} className="flex h-[48px] items-center justify-center rounded-[4px] bg-gray text-[13px] font-bold uppercase hover:bg-line sm:text-[15px]">
          Подробнее
        </Link>
        <button type="button" onClick={() => setOpen(true)} className="h-[48px] rounded-[4px] bg-red px-1 text-[13px] font-bold sm:text-[15px] text-white uppercase hover:bg-red-dark">
          Оставить заявку
        </button>
      </div>
      {open && <RequestModal car={car.name + ' ' + car.trim} onClose={() => setOpen(false)} />}
    </div>
  )
}
