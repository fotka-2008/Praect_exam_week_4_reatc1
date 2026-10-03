import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import CarImg from './CarImg'
import CardActions from './CardActions'
import Colors from './Colors'
import Equipment from './Equipment'
import RequestModal from './RequestModal'
import Sold from './Sold'
import { PromoCards } from './Promo'
import SortHead from './SortHead'
import { monthly, num, price, nextSort, sortList } from '../utils'

const cols = [
  ['name', 'Комплектация'],
  ['engine', 'Двигатель'],
  ['gearbox', 'Коробка передач'],
  ['drive', 'Привод'],
  ['oldPrice', 'Цена'],
  ['price', 'Со скидкой'],
]
const grid = 'gap-3 md:grid-cols-[1.6fr_1fr_1fr_0.8fr_0.7fr_1fr_40px]'

function Expanded({ car, trim, store }) {
  const [color, setColor] = useState(0)
  const [full, setFull] = useState(false)
  const [req, setReq] = useState(false)
  const c = car.colors[color]
  const specs = [
    ['engine', car.hp + ' л.с.'],
    ['fuel', car.fuel + ' л/км'],
    ['timer', String(car.accel).replace('.', ',') + ' с.'],
    ['speed', car.speed + ' км/ч'],
  ]
  return (
    <>
      <div className="relative grid gap-6 border-t border-line bg-white px-6 py-6 lg:grid-cols-[210px_150px_190px_1fr_200px] lg:items-center lg:gap-5">
        {car.sold && <Sold />}
        <div className="relative">
          <div className="absolute top-0 left-0 z-10">
            <CardActions id={car.id} store={store} />
          </div>
          <span className="absolute top-0 right-0 z-10 rounded-full bg-red px-2 py-0.5 text-[11px] font-bold text-white">Выгода {num(trim.oldPrice - trim.price)} ₽</span>
          <CarImg car={car} src={c.image} hue={c.hue} tint={c.tint} className="mt-6 h-[110px] w-full" />
          <div className="mt-2">
            <Colors colors={car.colors} value={color} onChange={setColor} small />
          </div>
        </div>
        <div className="text-[13px]">
          <h4 className="mb-2 text-[18px] font-medium">{car.name}</h4>
          <p className="font-medium text-red">В наличии с ПТС</p>
          <p className="mt-1">В наличии: <b>{1 + (trim.id % 3)} авто</b></p>
          <p className="mt-1">Доступна в <b>{car.colors.length} цветах</b></p>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-1.5 text-[12px]">
            {specs.map(([icon, t]) => (
              <span key={icon} className="flex h-[30px] items-center gap-1.5 rounded-full border border-line px-2.5 whitespace-nowrap">
                <Icon name={icon} className="h-4 w-4" />
                {t}
              </span>
            ))}
          </div>
          <button type="button" onClick={() => setFull(!full)} className="mt-2 flex h-[30px] w-full items-center justify-between rounded-full border border-red px-2.5 text-[12px] text-red">
            <Icon name="list" className="h-4 w-4" />
            Полное описание
            <Icon name={full ? 'up' : 'down'} className="h-3 w-3" />
          </button>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 lg:grid lg:grid-cols-[auto_1fr] lg:gap-4">
          <ul className="flex flex-col gap-1.5 text-[13px] leading-tight">
            {['Страхование', 'Обрудование', 'Комплект резины'].map((g, i) => (
              <li key={g} className="flex items-center gap-2">
                <span className={'flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full text-white ' + ['bg-dark', 'bg-red', 'bg-muted'][i]}>
                  <Icon name="gift" className="h-3.5 w-3.5" />
                </span>
                <span>
                  {g}
                  <br />
                  <span className="text-red">в подарок</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="text-right">
            <p className="text-[24px] leading-none font-medium">{price(trim.price)}</p>
            <p className="text-[11px] text-muted line-through">{price(trim.oldPrice)}</p>
            <p className="mt-6 text-[13px] leading-tight">
              Кредит
              <br />
              от {num(Math.round(monthly(trim.price * 0.8, 84) / 1000) * 1000)} ₽/мес
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button type="button" onClick={() => setReq(true)} className="arrow-btn relative z-20 h-[46px] bg-red pr-3 text-[14px] font-medium text-white">
            Забронировать
          </button>
          <div className="relative z-20 flex">
            <Link to="/" className="arrow-btn relative z-10 -mr-3 flex h-[46px] flex-1 items-center justify-center bg-dark text-[14px] font-medium text-white">
              В Trade-in
            </Link>
            <Link to={'/new/' + car.id + '?trim=' + trim.id} className="arrow-btn-mid flex h-[46px] flex-1 items-center justify-center bg-[#6e6e6e] text-[14px] font-medium text-white">
              Подробнее
            </Link>
          </div>
        </div>
      </div>
      <div className={'border-t border-line bg-soft px-6 py-6 ' + (full ? '' : 'hidden md:block')}>
        <Equipment />
        <div className="mt-8">
          <PromoCards white />
        </div>
      </div>
      {req && <RequestModal title="Забронировать" car={car.name + ' ' + trim.name} onClose={() => setReq(false)} />}
    </>
  )
}

export default function NewTrims({ car, store, links = false }) {
  const [open, setOpen] = useState(links ? null : car.trims[0].id)
  const [sort, setSort] = useState({ key: '', dir: 1 })
  const groups = [...new Set(car.trims.map((t) => t.group))]

  return (
    <div className="flex flex-col gap-10">
      {groups.map((g) => {
        const trims = sortList(
          car.trims.filter((t) => t.group === g),
          sort,
        )
        const off = Math.round((1 - trims[0].price / trims[0].oldPrice) * 100)
        return (
          <div key={g}>
            <h3 className={'mb-8 flex items-center gap-3 text-[24px] font-medium ' + (links ? 'justify-center' : '')}>
              {g}
              <span className="rounded-full bg-red px-2 text-[14px] font-bold text-white">-{off}%</span>
            </h3>
            <SortHead cols={cols} sort={sort} onSort={(k) => setSort(nextSort(sort, k))} className={grid} />
            <div className="flex flex-col gap-6">
              {trims.map((t) => {
                const isOpen = open === t.id
                const row = (
                  <>
                    <span className="col-span-2 flex flex-wrap items-center gap-2 text-[18px] font-bold md:col-span-1">
                      {t.name}
                      {links && <span className="rounded-full bg-red px-2 text-[14px] font-bold text-white">-{off}%</span>}
                    </span>
                    <span>{t.engine}</span>
                    <span>{t.gearbox}</span>
                    <span>{t.drive}</span>
                    <span className="text-[13px] text-muted line-through">{num(t.oldPrice)} ₽</span>
                    <span className="font-bold">{price(t.price)}</span>
                  </>
                )
                const cls = 'grid w-full grid-cols-2 items-center gap-y-1 px-6 py-4 text-left text-[15px] md:min-h-[70px] ' + grid
                return (
                  <div key={t.id} className={'relative overflow-hidden rounded-[30px] border border-line bg-gray ' + (isOpen ? 'shadow-card' : '')}>
                    {links ? (
                      <Link to={'/new/' + car.id + '?trim=' + t.id} className={cls + ' hover:bg-line'}>
                        {row}
                        <Icon name="right" className="hidden h-4 w-4 md:block" />
                      </Link>
                    ) : (
                      <button type="button" onClick={() => setOpen(isOpen ? null : t.id)} className={cls}>
                        {row}
                        <span className="absolute top-4 right-5 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white md:static">
                          <Icon name={isOpen ? 'up' : 'down'} className="h-4 w-4" />
                        </span>
                      </button>
                    )}
                    {isOpen && <Expanded car={car} trim={t} store={store} />}
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
