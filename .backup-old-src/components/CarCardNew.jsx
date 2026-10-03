import ArrowButtons from './ArrowButtons'
import CardActions from './CardActions'
import CarImage from './CarImage'
import SoldOverlay from './SoldOverlay'
import { GiftIcon } from './Icons'
import { calcMonthly, formatNumber, formatPrice } from '../utils/format'

export default function CarCardNew({ car, sold = false }) {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-[30px] bg-white px-5 pt-6 pb-6 shadow-[0_4px_40px_rgba(0,0,0,0.08)] lg:px-6">
      {sold && <SoldOverlay />}

      <div className="flex items-start justify-between gap-2">
        <h3 className="text-[26px] leading-tight font-medium lg:text-[32px]">{car.name}</h3>
        <CardActions className="mt-1" />
      </div>
      <div className="mt-2 flex items-center gap-4">
        <span
          className="bg-primary py-1.5 pr-8 pl-4 text-[13px] font-medium text-white"
          style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%)' }}
        >
          Предложение дня
        </span>
        <span className="text-[12px] leading-tight font-medium text-primary">
          Выгода
          <br />
          до {formatNumber(car.benefit)} ₽
        </span>
      </div>
      <div className="relative mt-3 flex min-h-[170px]">
        <img src="/images/hero-city.jpg" alt="" className="absolute right-[-24px] bottom-4 w-[75%] opacity-50" />
        <ul className="relative z-10 flex flex-col gap-3">
          {car.gifts.map((gift) => (
            <li key={gift} className="flex items-center gap-2.5 text-[13px] leading-tight">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                <GiftIcon className="h-4 w-4" />
              </span>
              <span>
                {gift}
                <br />
                <span className="text-primary">в подарок</span>
              </span>
            </li>
          ))}
        </ul>
        <CarImage
          src={car.image}
          hue={car.hue}
          tint={car.tint}
          alt={car.name}
          className="absolute right-[-10px] bottom-0 z-10 w-[62%] object-contain"
        />
      </div>

      <p className="mt-5 mb-5 flex flex-wrap items-baseline justify-between gap-x-3">
        <span className="text-[24px] font-medium lg:text-[26px]">от {formatPrice(car.price)}</span>
        <span className="text-[15px] lg:text-[16px]">
          Кредит <b className="font-medium">от {formatPrice(calcMonthly(car.price, 20, 60))}/мес.</b>
        </span>
      </p>

      <div className="mt-auto">
        <ArrowButtons to={'/new/' + car.id} />
      </div>
    </div>
  )
}
