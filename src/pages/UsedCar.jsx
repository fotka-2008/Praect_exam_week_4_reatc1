import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Box from '../components/Box'
import Crumbs from '../components/Crumbs'
import Gallery from '../components/Gallery'
import CardActions from '../components/CardActions'
import Icon from '../components/Icon'
import Promo from '../components/Promo'
import CreditBar from '../components/CreditBar'
import TradeInForm from '../components/TradeInForm'
import CarCardUsed from '../components/CarCardUsed'
import More from '../components/More'
import RequestModal from '../components/RequestModal'
import Sold from '../components/Sold'
import NotFound from './NotFound'
import cars from '../data/cars.json'
import benefits from '../data/benefits.json'
import { monthly, num, price } from '../utils'

const used = cars.filter((c) => c.type === 'used')
const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et lorem elit. Nam nisi nulla, fringilla vel pharetra ac, luctus in est. Pellentesque faucibus interdum arcu, non molestie leo malesuada in. Donec quam turpis, hendrerit nec ante id, tincidunt convallis sapien. In molestie dignissim elit non mollis.'

function specRows(car) {
  return [
    ['Максимальная мощность двигателя(кВт) при об./мин.', car.hp + ' л.с.'],
    ['Тип трансмиссии', car.gearbox === 'механика' ? 'МКПП' : car.gearbox === 'автомат' ? 'АКПП' : car.gearbox === 'робот' ? 'РКПП' : 'CVT'],
    ['Тип привода', car.drive[0].toUpperCase() + car.drive.slice(1)],
    ['Объем двигателя, куб.см', String(Math.round(car.volume * 1000 - 2))],
    ['Год выпуска', String(car.year)],
    ['Пробег', num(car.mileage) + ' км'],
    ['Тип кузова', car.body[0].toUpperCase() + car.body.slice(1)],
    ['Количество владельцев', String(1 + (car.id % 3))],
    ['Цвет', car.hue ? 'Синий металлик' : 'Серебристый'],
    ['ПТС', 'Оригинал'],
  ]
}

export default function UsedCar({ store }) {
  const { id } = useParams()
  const car = used.find((c) => String(c.id) === id)
  const [rows, setRows] = useState(4)
  const [count, setCount] = useState(3)
  const [req, setReq] = useState(null)

  if (!car) return <NotFound />

  const similar = used.filter((c) => c.id !== car.id).sort((a, b) => Math.abs(a.price - car.price) - Math.abs(b.price - car.price))
  const specs = specRows(car)
  const chips = [
    ['gear', car.volume.toFixed(1) + ' л'],
    ['engine', car.hp + ' л.с.'],
    ['gearbox', car.gearbox[0].toUpperCase() + car.gearbox.slice(1)],
    ['drive', car.drive[0].toUpperCase() + car.drive.slice(1)],
  ]

  return (
    <div key={car.id}>
      <Box className="pt-6 md:pt-[45px]">
        <Crumbs items={[{ title: 'Главная', to: '/' }, { title: 'Авто с пробегом', to: '/used' }, { title: car.name }]} />
        <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,805px)_minmax(0,1fr)] lg:gap-8">
          <div className="relative min-w-0">
            <Gallery car={car} slides={[null, ...car.photos]} actions={<CardActions id={car.id} store={store} round reverse />} />
            {car.sold && <Sold />}
          </div>
          <div>
            <h1 className="text-[36px] leading-tight font-medium md:text-[60px]">{car.name}</h1>
            <p className="mt-3 flex items-center gap-2 text-[16px] text-muted">
              <Icon name="eye" className="h-5 w-5 text-line" />
              Автомобиль сейчас смотрит {car.viewers} {car.viewers === 1 ? 'человек' : 'человека'}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {chips.map(([icon, t]) => (
                <span key={icon} className="flex h-[32px] items-center gap-1.5 rounded-full border border-line px-3 text-[14px]">
                  <Icon name={icon} className="h-4 w-4" />
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-1">
              <span className="text-[40px] font-bold md:text-[44px]">{price(car.price)}</span>
              <span className="text-[16px] leading-tight text-muted">
                В кредит
                <br />
                от <b className="font-bold">{num(Math.round(monthly(car.price * 0.8, 84) / 1000) * 1000)} ₽/мес</b>
              </span>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <button type="button" onClick={() => setReq('Забронировать онлайн')} className="h-[64px] rounded-[4px] bg-red text-[16px] font-bold text-white uppercase hover:bg-red-dark">
                Забронировать онлайн
              </button>
              <button type="button" onClick={() => setReq('Купить в кредит')} className="h-[64px] rounded-[4px] bg-gray text-[16px] font-bold text-muted hover:bg-line">
                Купить в кредит
              </button>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <ul className="flex flex-col gap-4">
                {benefits.usedInfo.map((b) => (
                  <li key={b.text} className="flex items-center gap-4 text-[16px] leading-tight">
                    <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-gray text-red">
                      <Icon name={b.icon === 'tradein' ? 'refresh' : b.icon} className="h-5 w-5" strokeWidth={2.5} />
                    </span>
                    <span className="max-w-[140px]">{b.text}</span>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-2 text-[16px]">
                <li>Привод: <b className="font-medium">{car.drive}</b></li>
                <li>Кузов: <b className="font-medium">{car.body}</b></li>
                <li>Год: <b className="font-medium">{car.year}</b></li>
                <li>Пробег: <b className="font-medium">{num(car.mileage)} км</b></li>
              </ul>
            </div>
          </div>
        </div>
      </Box>

      <Promo />
      <CreditBar car={car} />

      <Box className="mt-14 md:mt-[70px]">
        <h2 className="text-[30px] leading-tight font-bold md:text-[44px]">
          Описание {car.name} {car.trim}
        </h2>
        <p className="mt-8 text-[16px] leading-[1.9]">{lorem}</p>
        <p className="mt-6 text-[16px] leading-[1.9]">{lorem}</p>
      </Box>

      <Box className="mt-14 md:mt-[80px]">
        <h2 className="text-[30px] leading-tight font-bold md:text-[44px]">
          Комплектация {car.name} {car.trim}
        </h2>
        <div className="mt-8 grid gap-x-[118px] md:mt-[50px] md:grid-cols-2">
          {specs.slice(0, rows).map(([k, v]) => (
            <div key={k} className="flex min-h-[66px] items-center justify-between gap-6 border-t border-line py-3 text-[18px] md:text-[20px]">
              <b className="max-w-[300px] leading-tight font-medium">{k}</b>
              <span className="text-right">{v}</span>
            </div>
          ))}
        </div>
        {rows < specs.length && <More onClick={() => setRows(specs.length)} />}
      </Box>

      <TradeInForm />

      <Box className="mt-14 md:mt-[80px]">
        <h2 className="mb-8 text-[30px] font-bold md:mb-[48px] md:text-[44px]">Автомобили с пробегом за эти же деньги</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
          {similar.slice(0, count).map((c) => (
            <CarCardUsed key={c.id} car={c} store={store} />
          ))}
        </div>
        {count < similar.length && <More onClick={() => setCount(count + 3)} />}
      </Box>

      {req && <RequestModal title={req} car={car.name + ', ' + price(car.price)} onClose={() => setReq(null)} />}
    </div>
  )
}
