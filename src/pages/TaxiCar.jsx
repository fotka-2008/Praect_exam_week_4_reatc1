import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Hero from '../components/Hero'
import Box from '../components/Box'
import Checks from '../components/Checks'
import Intro from '../components/Intro'
import IconBenefits from '../components/IconBenefits'
import Earn from '../components/Earn'
import Icon from '../components/Icon'
import CarImg from '../components/CarImg'
import CardActions from '../components/CardActions'
import Equipment from '../components/Equipment'
import RequestModal from '../components/RequestModal'
import Sold from '../components/Sold'
import SortHead from '../components/SortHead'
import NotFound from './NotFound'
import cars from '../data/cars.json'
import benefits from '../data/benefits.json'
import { num, price, nextSort, sortList } from '../utils'

const cols = [
  ['name', 'Комплектация'],
  ['engine', 'Двигатель'],
  ['gearbox', 'Коробка передач'],
  ['drive', 'Привод'],
  ['price', 'Цена'],
  ['day', 'Платеж'],
]
const grid = 'md:grid-cols-[1.6fr_1fr_1fr_0.9fr_0.6fr_1fr_40px] gap-3'

function Row({ car, trim, open, onToggle, store }) {
  const [req, setReq] = useState(false)
  return (
    <div className={'relative overflow-hidden rounded-[30px] border border-line ' + (open ? 'bg-white' : 'bg-gray')}>
      <button type="button" onClick={onToggle} className={'grid w-full grid-cols-2 items-center gap-y-1 px-6 py-4 text-left text-[15px] md:min-h-[70px] ' + grid + (open ? ' bg-gray' : '')}>
        <span className="col-span-2 flex items-center gap-2 text-[18px] font-bold md:col-span-1">
          {trim.name}
          {trim.discount > 0 && <span className="rounded-full bg-red px-2 text-[14px] font-bold text-white">-{trim.discount}%</span>}
        </span>
        <span>{trim.engine}</span>
        <span>{trim.gearbox}</span>
        <span>{trim.drive}</span>
        <span className="text-[13px] text-muted">от {price(trim.price)}</span>
        <span className="font-bold">от {num(trim.day)} ₽/день</span>
        <span className="absolute top-4 right-5 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white md:static">
          <Icon name={open ? 'up' : 'down'} className="h-4 w-4" />
        </span>
      </button>
      {open && (
        <>
          <div className="relative flex flex-col gap-6 border-t border-line px-6 py-5 md:flex-row md:items-center">
            {car.sold && <Sold />}
            <div className="flex items-start gap-6">
              <CardActions id={car.id} store={store} />
              <CarImg car={car} className="h-[100px] w-[260px]" />
            </div>
            <div className="flex-1 md:pl-10">
              <h4 className="text-[20px] font-medium">{car.name}</h4>
              <ul className="mt-3 grid gap-x-10 gap-y-2 text-[15px] sm:grid-cols-2">
                {car.gifts.map((g) => (
                  <li key={g} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red text-white">
                      <Icon name="gift" className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    {g}
                  </li>
                ))}
              </ul>
            </div>
            <button type="button" onClick={() => setReq(true)} className="arrow-btn relative z-20 h-[50px] w-full bg-red pr-4 text-[14px] font-medium text-white md:w-[260px]">
              Оставить заявку
            </button>
          </div>
          <div className="border-t border-line px-6 py-6">
            <Equipment />
          </div>
        </>
      )}
      {req && <RequestModal car={car.name + ' ' + trim.name} onClose={() => setReq(false)} />}
    </div>
  )
}

export default function TaxiCar({ store }) {
  const { id } = useParams()
  const car = cars.find((c) => c.type === 'taxi' && String(c.id) === id)
  const [open, setOpen] = useState(0)
  const [sort, setSort] = useState({ key: '', dir: 1 })

  if (!car) return <NotFound />
  const trims = sortList(car.trims, sort)

  return (
    <>
      <Hero
        crumbs={[{ title: 'Такси в кредит', to: '/taxi' }, { title: car.name }]}
        side={
          <>
            <img src="/images/hero-city.jpg" alt="" className="absolute right-0 bottom-0 h-full w-[75%] object-cover mix-blend-multiply" />
            <CarImg car={car} className="absolute right-[10%] bottom-[110px] h-[300px] w-[44%] min-w-[300px]" />
          </>
        }
        sideClass="inset-0 hidden md:block"
      >
        <h1 className="text-[34px] leading-tight font-bold md:text-[48px] lg:text-[60px]">Такси {car.name}</h1>
        <div className="mt-4 inline-flex items-center gap-4 rounded-full bg-red px-6 py-2 text-white">
          <span className="text-[40px] font-bold md:text-[48px]">1,9%</span>
          <span className="text-[16px] leading-tight font-medium">
            Процентная
            <br />
            ставка
          </span>
        </div>
        <CarImg car={car} className="mt-4 h-[180px] w-full md:hidden" />
        <Checks items={benefits.taxiCarHero} className="mt-6 md:max-w-[560px]" />
      </Hero>

      <Intro />
      <IconBenefits items={benefits.taxi} rows={[[0, 5], [5, 9]]} className="mt-14 md:mt-[90px]" />

      <Box className="mt-16 md:mt-[100px]">
        <h2 className="text-center text-[30px] font-bold md:text-[44px]">Авто в наличии</h2>
        <h3 className="mt-6 mb-8 text-[24px] font-medium">{car.group}</h3>
        <SortHead cols={cols} sort={sort} onSort={(k) => setSort(nextSort(sort, k))} className={grid + ' md:grid-cols-[1.6fr_1fr_1fr_0.9fr_0.6fr_1fr_40px]'} />
        <div className="relative flex flex-col gap-6">
          {trims.map((t, i) => (
            <Row key={t.name} car={car} trim={t} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} store={store} />
          ))}
        </div>
      </Box>

      <Earn className="mt-16 md:mt-[110px]" />
    </>
  )
}
