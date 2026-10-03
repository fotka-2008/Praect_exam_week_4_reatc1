import { useState } from 'react'
import ArrowButtons from './ArrowButtons'
import CardActions from './CardActions'
import CarImage from './CarImage'
import SoldOverlay from './SoldOverlay'
import { calcMonthly, formatNumber, formatPrice } from '../utils/format'
function CardPhoto({ src, hue, alt }) {
  if (src.endsWith('.png')) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-[#e9ecef] to-[#fafafa] px-6">
        <CarImage src={src} hue={hue} alt={alt} className="max-h-[80%] w-full object-contain" />
      </div>
    )
  }
  return <CarImage src={src} alt={alt} className="h-full w-full object-cover" />
}

export default function CarCardUsed({ car, sold = false }) {
  const [photo, setPhoto] = useState(0) 
  const images = car.images.slice(0, 5)

  const specs = [
    ['Мощность', car.power + ' л.с.'],
    ['Объем двигателя', car.engine + ' л'],
    ['Привод', car.drive],
    ['Кузов', car.body],
    ['КПП', car.gearbox],
    ['Пробег', formatNumber(car.mileage) + ' км'],
  ]

  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-[30px] bg-white shadow-[0_4px_40px_rgba(0,0,0,0.08)]">
      {sold && <SoldOverlay />}
      <div className="relative h-[230px] lg:h-[286px]">
        <CardPhoto src={images[photo]} hue={car.hue} alt={car.name} />
        <CardActions round className="absolute top-6 right-6" />
        <div className="absolute right-6 bottom-3 left-6 flex gap-2">
          {[0, 1, 2, 3, 4].map((index) => (
            <button
              key={index}
              aria-label={'Фото ' + (index + 1)}
              onMouseEnter={() => index < images.length && setPhoto(index)}
              onClick={() => index < images.length && setPhoto(index)}
              className={'h-1 flex-1 rounded-full ' + (index === photo ? 'bg-primary' : 'bg-white')}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pt-4 pb-6 lg:px-6">
        <h3 className="border-b border-line pb-4 text-[22px] lg:text-[24px]">
          {car.name} {car.year}
        </h3>

        <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-1.5 text-[14px] lg:text-[16px]">
          {specs.map(([label, value]) => (
            <div key={label}>
              <dt className="inline text-muted">{label}: </dt>
              <dd className="inline font-bold">{value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-5 mb-5 flex flex-wrap items-baseline gap-x-3">
          <span className="text-[24px] font-bold lg:text-[26px]">от {formatPrice(car.price)}</span>
          <span className="text-[13px] text-muted">от {formatPrice(calcMonthly(car.price, 20, 60))}/мес.</span>
        </p>

        <div className="mt-auto">
          <ArrowButtons to={'/used/' + car.id} />
        </div>
      </div>
    </div>
  )
}
