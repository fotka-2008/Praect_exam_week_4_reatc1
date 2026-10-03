import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../components/Container'
import Breadcrumbs from '../components/Breadcrumbs'
import CardActions from '../components/CardActions'
import CarImage from '../components/CarImage'
import CarCardUsed from '../components/CarCardUsed'
import RangeSlider from '../components/RangeSlider'
import Button from '../components/Button'
import SectionTitle from '../components/SectionTitle'
import { TradeInFormBanner } from '../components/TradeInBanner'
import NotFoundPage from './NotFoundPage'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DriveIcon,
  EngineIcon,
  EyeIcon,
  GearboxIcon,
  GearIcon,
  GiftIcon,
  PercentIcon,
  RefreshIcon,
} from '../components/Icons'
import { calcMonthly, formatNumber, formatPrice } from '../utils/format'
import usedCars from '../data/usedCars.json'

const capitalize = (text) => text[0].toUpperCase() + text.slice(1)

const offers = [
  { image: 'people-woman-black.png', icon: 'ВТБ', title: 'Рассрочка от ВТБ', text: 'Рассрочка 0%', button: 'Рассрочка', buttonClass: 'bg-[#c9e8f6]' },
  { image: 'people-couple-small.png', icon: 'refresh', title: 'Выгода по Trade-in', text: 'Дополнительная выгода до 200 000 руб', button: 'Trade-in', buttonClass: 'bg-[#e2e2e2]' },
  { image: 'people-woman-red.png', icon: '%', title: 'Первоначальный взнос 0%', text: 'Кредит 1,9%', button: 'Скидка', buttonClass: 'bg-[#e2e2e2]' },
]

function GalleryImage({ src, hue, alt, className = '' }) {
  if (src.endsWith('.png')) {
    return (
      <div className={'flex items-center justify-center bg-gradient-to-b from-[#e9ecef] to-[#fafafa] ' + className}>
        <CarImage src={src} hue={hue} alt={alt} className="w-[80%] object-contain" />
      </div>
    )
  }
  return <CarImage src={src} alt={alt} className={'object-cover ' + className} />
}

export default function UsedCarPage() {
  const { id } = useParams()
  const car = usedCars.find((c) => String(c.id) === id)
  if (!car) return <NotFoundPage />
  return <UsedCarContent key={id} car={car} />
}

function UsedCarContent({ car }) {
  const [photo, setPhoto] = useState(0)
  const [down, setDown] = useState(20)
  const [months, setMonths] = useState(24)
  const [showAll, setShowAll] = useState(false)

  const title = car.name + ' ' + car.year
  const monthly = calcMonthly(car.price, down, months)
  const images = car.images
  const prev = () => setPhoto((photo - 1 + images.length) % images.length)
  const next = () => setPhoto((photo + 1) % images.length)

  const similar = usedCars
    .filter((c) => c.id !== car.id)
    .sort((a, b) => Math.abs(a.price - car.price) - Math.abs(b.price - car.price))
    .slice(0, 3)

  const equipment = [
    ['Максимальная мощность', car.power + ' л.с.'],
    ['Тип трансмиссии', car.gearbox],
    ['Тип привода', car.drive],
    ['Объем двигателя, л', car.engine],
    ['Тип кузова', car.body],
    ['Пробег', formatNumber(car.mileage) + ' км'],
    ['Год выпуска', car.year],
    ['Количество владельцев', car.mileage > 60000 ? '2' : '1'],
  ]

  return (
    <>
      <Container className="pt-6 lg:pt-10">
        <Breadcrumbs items={[{ label: 'Главная', to: '/' }, { label: 'Авто с пробегом', to: '/used' }, { label: title }]} />

        <div className="mt-5 grid gap-8 xl:grid-cols-[803px_1fr] xl:gap-[30px]">

          <div className="min-w-0">
            <div className="relative h-[260px] overflow-hidden rounded-[20px] sm:h-[400px] lg:h-[537px] lg:rounded-[30px]">
              <GalleryImage src={images[photo]} hue={car.hue} alt={title} className="h-full w-full" />
              <CardActions round className="absolute top-6 right-6" />
              {images.length > 1 && (
                <>
                  <button onClick={prev} aria-label="Предыдущее фото" className="absolute top-1/2 left-6 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-[4px] bg-ink text-white">
                    <ChevronLeftIcon className="h-5 w-5" />
                  </button>
                  <button onClick={next} aria-label="Следующее фото" className="absolute top-1/2 right-6 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-[4px] bg-ink text-white">
                    <ChevronRightIcon className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
              {images.map((src, index) => (
                <button
                  key={src}
                  onClick={() => setPhoto(index)}
                  className={'h-[70px] w-[105px] shrink-0 overflow-hidden rounded-[4px] ' + (index === photo ? '' : 'opacity-50 hover:opacity-80')}
                >
                  <GalleryImage src={src} hue={car.hue} alt="" className="h-full w-full" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-[36px] leading-tight font-bold lg:text-[56px]">{title}</h1>
            <p className="mt-3 flex items-center gap-3 text-[16px] text-[#6f6f6f]">
              <EyeIcon className="h-6 w-6 text-[#dcdcdc]" /> Автомобиль сейчас смотрит 2 человека
            </p>

            <div className="mt-5 flex flex-wrap gap-2 text-[14px]">
              {[
                [GearIcon, car.engine + ' л'],
                [EngineIcon, car.power + ' л.с.'],
                [GearboxIcon, car.gearbox],
                [DriveIcon, car.drive],
              ].map(([Icon, text]) => (
                <span key={text} className="flex h-[30px] min-w-[110px] items-center gap-2 rounded-full border border-line px-2.5">
                  <Icon className="h-[18px] w-[18px]" /> {capitalize(text)}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-5">
              <span className="text-[36px] font-bold whitespace-nowrap lg:text-[48px]">{formatPrice(car.price)}</span>
              <span className="text-[16px] leading-tight text-[#6f6f6f]">
                В кредит
                <br />
                от <b className="text-ink">{formatPrice(calcMonthly(car.price, 20, 84))}/мес</b>
              </span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-[14px]">
              <Button onClick={() => alert('Автомобиль забронирован')} className="h-16 text-[16px]">
                Забронировать онлайн
              </Button>
              <Button variant="gray" to="/credit/express" className="h-16 text-[16px] font-medium normal-case text-[#8a8a8a]!">
                Купить в кредит
              </Button>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <ul className="flex flex-col gap-5 text-[16px] leading-tight">
                {[
                  [RefreshIcon, 'Зачёт вашего авто в trade-in'],
                  [PercentIcon, 'Беспроцентная рассрочка 0%'],
                  [GiftIcon, 'Доп. выгода до 200 000 ₽'],
                ].map(([Icon, text]) => (
                  <li key={text} className="flex items-center gap-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-light text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="max-w-[140px]">{text}</span>
                  </li>
                ))}
              </ul>
              <dl className="flex flex-col gap-2 text-[16px]">
                {[
                  ['Привод', car.drive],
                  ['Кузов', car.body],
                  ['Год', car.year],
                  ['Пробег', formatNumber(car.mileage) + ' км'],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="inline">{label}: </dt>
                    <dd className="inline font-bold">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3 lg:mt-[60px] lg:gap-[30px]">
          {offers.map((offer) => (
            <div key={offer.title} className="flex min-h-[183px] overflow-hidden rounded-[30px] bg-soft">
              <img src={'/images/' + offer.image} alt="" className="h-[183px] w-[120px] shrink-0 self-end object-contain object-bottom lg:w-[160px]" />
              <div className="py-6 pr-5 pl-2">
                <p className="flex items-center gap-3 text-[20px] leading-tight font-medium lg:text-[22px]">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-white">
                    {offer.icon === 'refresh' ? <RefreshIcon className="h-4 w-4" /> : offer.icon}
                  </span>
                  {offer.title}
                </p>
                <p className="mt-3 text-[13px] text-[#6f6f6f]">{offer.text}</p>
                <button className={'mt-5 rounded-full px-4 py-2.5 text-[14px] font-medium ' + offer.buttonClass}>{offer.button}</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid items-center gap-8 rounded-[10px] bg-ink px-6 py-8 text-white md:grid-cols-2 xl:grid-cols-[362px_362px_1fr_276px] xl:gap-12 lg:px-[38px] lg:py-[30px]">
          <RangeSlider
            dark
            label="Первоначальный взнос"
            valueLabel={down + '%'}
            min={0}
            max={80}
            step={5}
            value={down}
            onChange={setDown}
            marks={[0, 20, 40, 60, 80]}
          />
          <RangeSlider
            dark
            label="Срок кредита"
            valueLabel={months + ' мес.'}
            min={6}
            max={84}
            step={6}
            value={months}
            onChange={setMonths}
            marks={[6, 12, 24, 36, 48, 60, 72, 84]}
          />
          <div>
            <p className="text-[16px]">Ежемесячный платеж *</p>
            <p className="text-[24px] font-medium">{formatPrice(monthly)}/мес.</p>
            <p className="text-[11px] text-[#7d7d7d]">* Предварительный расчет</p>
          </div>
          <Button onClick={() => alert('Заявка отправлена')} className="h-16 text-[16px]">
            Подать заявку на кредит
          </Button>
        </div>

        <h2 className="mt-14 text-[28px] font-medium lg:mt-[60px] lg:text-[40px]">Описание {title}</h2>
        <div className="mt-6 flex flex-col gap-6 text-[16px] leading-[30px] lg:mt-8">
          <p>
            {title} в отличном состоянии: один-два владельца, полная история обслуживания у официального дилера. Двигатель {car.engine} л
            мощностью {car.power} л.с., коробка — {car.gearbox}, привод — {car.drive}. Автомобиль прошёл диагностику по 120 пунктам и
            юридическую проверку: не находится в залоге, нет ограничений на регистрационные действия.
          </p>
          <p>
            Салон чистый, без прожогов и потёртостей. Возможна покупка в кредит от 1,9% без первоначального взноса или обмен на ваш
            автомобиль по программе Trade-in.
          </p>
        </div>

        <h2 className="mt-14 text-[28px] font-medium lg:mt-[90px] lg:text-[40px]">Комплектация {title}</h2>
        <dl className="mt-8 grid gap-x-[118px] md:grid-cols-2 lg:mt-[50px]">
          {(showAll ? equipment : equipment.slice(0, 4)).map(([label, value]) => (
            <div key={label} className="flex min-h-[66px] items-center justify-between gap-6 border-t border-b border-line py-3 text-[16px] lg:text-[20px]">
              <dt className="max-w-[270px] leading-tight font-medium">{label}</dt>
              <dd className="first-letter:uppercase">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8 text-center">
          <Button onClick={() => setShowAll(!showAll)} className="h-16 w-full text-[16px] sm:w-[270px]">
            {showAll ? 'Скрыть' : 'Показать еще'}
          </Button>
        </div>
      </Container>

      <TradeInFormBanner />

      <Container className="mt-20 lg:mt-[90px]">
        <SectionTitle title="Автомобили с пробегом за эти же деньги" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
          {similar.map((item) => (
            <CarCardUsed key={item.id} car={item} />
          ))}
        </div>
      </Container>
      <div className="h-20 lg:h-[100px]" />
    </>
  )
}
