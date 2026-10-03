import { Link } from 'react-router-dom'
import CardActions from './CardActions'
import ArrowButtons from './ArrowButtons'
import CarImg from './CarImg'
import Sold from './Sold'
import Icon from './Icon'
import { monthly, num, price } from '../utils'

export default function CarCardNew({ car, store, specs = false, full = false }) {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-[30px] bg-white px-6 pt-6 pb-6 shadow-card">
      {car.sold && <Sold />}
      <div className="flex items-start justify-between gap-2">
        <Link to={'/new/' + car.id} className="text-[28px] leading-[1.15] font-medium hover:text-red">
          {car.name}
          {full && (
            <>
              <br />
              {car.trim}
            </>
          )}
        </Link>
        <div className="mt-1">
          <CardActions id={car.id} store={store} />
        </div>
      </div>
      <div className="mt-2 flex items-center gap-4">
        <span className="arrow-btn bg-red py-1.5 pr-7 pl-3 text-[13px] font-medium text-white">Предложение дня</span>
        <span className="text-[12px] leading-tight font-medium text-red">
          Выгода
          <br />
          до {num(car.benefit)} ₽
        </span>
      </div>
      <Link to={'/new/' + car.id} className="relative mt-2 flex min-h-[175px]">
        <img src="/images/hero-city.jpg" alt="" className="absolute top-0 right-[-24px] w-[80%] opacity-40" />
        <ul className="relative z-10 flex flex-col gap-2.5 pt-2">
          {car.gifts.map((g) => (
            <li key={g} className="flex items-center gap-2.5 text-[13px] leading-tight">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-dark text-white">
                <Icon name="gift" className="h-4 w-4" />
              </span>
              <span className="max-w-[80px]">
                {g}
                <br />
                <span className="text-red">в подарок</span>
              </span>
            </li>
          ))}
        </ul>
        <CarImg car={car} className="absolute right-[-12px] bottom-0 z-10 h-[150px] w-[62%]" />
      </Link>
      <p className="mt-4 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <span className="text-[24px] font-medium">от {price(car.price)}</span>
        <span className="text-[16px]">
          Кредит <b className="font-medium">от {price(Math.round(monthly(car.price * 0.8, 60) / 1000) * 1000)}/мес.</b>
        </span>
      </p>
      {specs && (
        <div className="mt-3 grid grid-cols-4 gap-1.5 text-[11px]">
          {[
            ['engine', car.hp + ' л.с.'],
            ['fuel', car.fuel + ' л/км'],
            ['speed', car.speed + ' км/ч'],
            ['timer', String(car.accel).replace('.', ',') + ' с.'],
          ].map(([icon, t]) => (
            <span key={icon} className="flex h-[30px] items-center justify-center gap-1 rounded-full border border-line px-1 whitespace-nowrap">
              <Icon name={icon} className="h-3.5 w-3.5 shrink-0" />
              {t}
            </span>
          ))}
        </div>
      )}
      <div className="mt-5 pt-0 md:mt-auto md:pt-5">
        <ArrowButtons to={'/new/' + car.id} car={car.name + ' ' + car.trim} />
      </div>
    </div>
  )
}
