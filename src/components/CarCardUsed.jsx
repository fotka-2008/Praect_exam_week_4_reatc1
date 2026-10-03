import { useState } from 'react'
import { Link } from 'react-router-dom'
import CardActions from './CardActions'
import ArrowButtons from './ArrowButtons'
import CarImg from './CarImg'
import Sold from './Sold'
import { monthly, num, price } from '../utils'

export default function CarCardUsed({ car, store }) {
  const [slide, setSlide] = useState(0)
  const slides = [null, ...car.photos.slice(0, 4)]

  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-[30px] bg-white shadow-card">
      {car.sold && <Sold />}
      <Link to={'/used/' + car.id} className="relative block h-[286px] overflow-hidden bg-gradient-to-b from-[#f5f5f5] to-[#dcdcdc]" onMouseLeave={() => setSlide(0)}>
        {slide === 0 ? (
          <>
            <div className="absolute inset-x-0 bottom-0 h-[38%] bg-[#bdbdbd]/40" />
            <CarImg car={car} className="absolute inset-x-6 top-[18%] bottom-[12%]" />
          </>
        ) : (
          <img src={'/images/' + slides[slide]} alt={car.name} className="h-full w-full object-cover" />
        )}
        <div className="absolute inset-0 z-10 flex">
          {slides.map((_, i) => (
            <span key={i} className="h-full flex-1" onMouseEnter={() => setSlide(i)} />
          ))}
        </div>
        <div className="absolute inset-x-6 bottom-3 z-10 flex gap-2">
          {slides.map((_, i) => (
            <span key={i} className={'h-1 flex-1 rounded-full ' + (i === slide ? 'bg-red' : 'bg-white')} />
          ))}
        </div>
      </Link>
      <div className="absolute top-6 right-6 z-50">
        <CardActions id={car.id} store={store} round reverse />
      </div>
      <div className="flex flex-1 flex-col px-6 pt-4 pb-6">
        <Link to={'/used/' + car.id} className="border-b border-line pb-4 text-[22px] hover:text-red">
          {car.name}
        </Link>
        <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1 text-[15px] text-muted">
          <span>Мощность: <b className="font-medium text-dark">{car.hp} л.с.</b></span>
          <span>Объем двигателя: <b className="font-medium text-dark">{car.volume.toFixed(1)} л</b></span>
          <span>Привод: <b className="font-medium text-dark">{car.drive}</b></span>
          <span>Кузов: <b className="font-medium text-dark">{car.body}</b></span>
          <span>КПП: <b className="font-medium text-dark">{car.gearbox}</b></span>
          <span>Пробег: <b className="font-medium text-dark">{num(car.mileage)} км</b></span>
        </div>
        <p className="mt-4 mb-5 flex flex-wrap items-baseline gap-x-3">
          <span className="text-[24px] font-medium">от {price(car.price)}</span>
          <span className="text-[12px] text-muted">от {num(Math.round(monthly(car.price * 0.8, 60) / 1000) * 1000)} ₽/мес.</span>
        </p>
        <div className="mt-auto">
          <ArrowButtons to={'/used/' + car.id} car={car.name} />
        </div>
      </div>
    </div>
  )
}
