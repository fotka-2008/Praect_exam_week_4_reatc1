import Button from './Button'
import CardActions from './CardActions'
import CarImage from './CarImage'
import SoldOverlay from './SoldOverlay'
import { GiftCircleIcon } from './Icons'
import { formatPrice } from '../utils/format'
import taxiClasses from '../data/taxiClasses.json'
export default function CarCardTaxi({ car, sold = false }) {
  return (
    <div className="relative flex h-full flex-col rounded-[30px] border border-[#e5e5e5] bg-white px-5 pt-5 pb-6 lg:px-6">
      {sold && <SoldOverlay />}

      <div className="flex items-center justify-between">
        <CardActions />
        <span className="rounded-full bg-[#e4e4e4] px-3 py-1 text-[12px] font-bold uppercase">{taxiClasses[car.class]}</span>
      </div>

      <CarImage src={car.image} hue={car.hue} alt={car.model} className="mx-auto -mt-2 h-[150px] w-full object-contain lg:h-[170px]" />

      <h3 className="mt-3 text-center text-[20px] leading-[28px] font-medium lg:text-[24px]">
        {car.model}
        <br />
        {car.trim}
      </h3>
      <p className="mt-3 text-center text-[18px] text-muted lg:text-[20px]">от {formatPrice(car.price)}</p>
      <p className="text-center text-[30px] leading-tight font-bold lg:text-[36px]">от {car.perDay} ₽/день</p>

      <ul className="mt-6 mb-6 flex flex-col gap-2.5 text-[15px] lg:text-[16px]">
        {car.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <GiftCircleIcon className="h-5 w-5" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto grid grid-cols-2 gap-2">
        <Button variant="gray" to={'/taxi/' + car.id} className="h-12 text-[14px] lg:text-[16px]">
          Подробнее
        </Button>
        <Button onClick={() => alert('Заявка отправлена')} className="h-12 text-[14px] lg:text-[16px]">
          Оставить заявку
        </Button>
      </div>
    </div>
  )
}
