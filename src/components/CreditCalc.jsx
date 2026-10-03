import { useState } from 'react'
import Box from './Box'
import Icon from './Icon'
import Select from './Select'
import Range from './Range'
import CarImg from './CarImg'
import Logo from './Logo'
import Thanks from './Thanks'
import cars from '../data/cars.json'
import banks from '../data/banks.json'
import { maskPhone, monthly, num, phoneOk, price } from '../utils'

const news = cars.filter((c) => c.type === 'new' && !c.sold)
const brands = [...new Set(news.map((c) => c.brand))].sort()
const allBrands = [...new Set(cars.map((c) => c.brand))].sort()
const years = Array.from({ length: 16 }, (_, i) => 2021 - i)
const gifts = ['КАСКО в подарок', 'Комплект зимней резины', 'Сигнализация с автозапуском', 'Тонировка стекол']
const terms = [6, 12, 24, 36, 48, 60, 72, 84]

function Step({ n, title, off, button, onButton, check, children }) {
  return (
    <div className="relative rounded-[30px] bg-soft px-5 py-6 md:px-[85px] md:py-[44px] md:rounded-[40px] xl:px-[120px]">
      <span className={'absolute top-6 left-4 flex h-[30px] w-[30px] items-center justify-center rounded-full text-[18px] font-bold text-white md:top-[44px] md:-left-[20px] md:h-[40px] md:w-[40px] md:text-[24px] ' + (off ? 'bg-[#bdbdbd]' : 'bg-red')}>
        {off ? <Icon name="plus" className="h-4 w-4" strokeWidth={3} /> : n}
      </span>
      <div className="flex flex-col gap-4 pl-10 md:flex-row md:items-center md:justify-between md:pl-0">
        <div className="flex flex-wrap items-center gap-4">
          <h3 className={'text-[24px] font-medium md:text-[32px] ' + (off ? 'text-muted/70' : '')}>{title}</h3>
          {button && (
            <button type="button" onClick={onButton} className="h-[32px] rounded-[4px] bg-red px-6 text-[12px] font-bold text-white uppercase hover:bg-red-dark md:h-[34px] md:w-[128px] md:text-[14px]">
              {button}
            </button>
          )}
        </div>
        {check}
      </div>
      {!off && <div className="mt-6">{children}</div>}
    </div>
  )
}

function Check({ label, value, onChange, disabled }) {
  return (
    <label className={'flex cursor-pointer items-start gap-3 text-[13px] leading-tight text-muted md:gap-4 md:text-[15px] ' + (disabled ? 'pointer-events-none opacity-40' : '')}>
      <input type="checkbox" checked={value} onChange={(e) => onChange(e.target.checked)} className="peer sr-only" />
      <span className={'flex h-5 w-5 shrink-0 items-center justify-center rounded-[3px] text-white md:h-6 md:w-6 ' + (value ? 'bg-red' : 'border border-muted bg-white')}>
        {value && <Icon name="check" className="h-3.5 w-3.5" strokeWidth={3} />}
      </span>
      <span className="max-w-[200px]">{label}</span>
    </label>
  )
}

export default function CreditCalc({ program }) {
  const steps = program.steps
  const start = program.carEmpty ? null : news.find((c) => c.model === 'Rio Comfort') || news[0]
  const [brand, setBrand] = useState(start ? start.brand : '')
  const [carId, setCarId] = useState(start ? String(start.id) : '')
  const [trimId, setTrimId] = useState('')
  const [credit, setCredit] = useState(steps.credit && steps.creditOn !== false)
  const [trade, setTrade] = useState(steps.tradein && steps.tradeinOn !== false)
  const [term, setTerm] = useState(36)
  const [down, setDown] = useState('')
  const [part, setPart] = useState(65)
  const [bank, setBank] = useState(1)
  const [checks, setChecks] = useState(program.discounts.map(() => true))
  const [tradeCheck, setTradeCheck] = useState(true)
  const [old, setOld] = useState({ brand: '', model: '', year: '', gearbox: '', trim: '' })
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [gift, setGift] = useState('')
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const models = news.filter((c) => c.brand === brand)
  const car = news.find((c) => String(c.id) === carId)
  const trim = car ? car.trims.find((t) => String(t.id) === trimId) || car.trims[0] : null
  const base = trim ? trim.oldPrice : 0
  let off = 0
  if (credit) {
    program.discounts.forEach(([, v], i) => {
      if (checks[i]) off += typeof v === 'string' ? (base * parseFloat(v)) / 100 : v
    })
  }
  if (trade && tradeCheck && program.tradeinLabel) off += program.tradeinLabel[1]
  const final = Math.max(0, base - off)
  const rate = 4.9 + bank * 0.5
  let pay = 0
  if (steps.installment) pay = (final * (1 - part / 100)) / term
  else if (credit) pay = monthly(Math.max(0, final - (Number(down) || 0)), term, rate)
  else pay = final / 36

  let n = 1
  const numOf = (on) => (on ? ++n : 0)

  function submit(e) {
    e.preventDefault()
    const next = { name: !name.trim(), phone: !phoneOk(phone) }
    setErrors(next)
    if (next.name || next.phone) return
    setName('')
    setPhone('')
    setGift('')
    setSent(true)
  }

  const input = 'h-[50px] w-full rounded-[4px] border bg-white px-4 text-[15px] outline-none placeholder:text-dark md:h-[64px] '
  const sel = 'bg-white border border-line'
  const oldModels = [...new Set(cars.filter((c) => c.brand === old.brand).map((c) => c.model))]

  const creditStep = steps.credit && (
    <Step
      n={numOf(credit)}
      title="Купить в кредит"
      off={!credit}
      button={steps.tradeinFirst ? (credit ? 'Убрать' : 'Добавить') : null}
      onButton={() => setCredit(!credit)}
      check={
        <div className="flex flex-wrap gap-6">
          {program.discounts.map(([label], i) => (
            <Check key={label} label={label} value={checks[i]} disabled={!credit} onChange={(v) => setChecks(checks.map((c, k) => (k === i ? v : c)))} />
          ))}
        </div>
      }
    >
      <div className="grid gap-6 md:grid-cols-2 md:gap-[60px]">
        <div>
          <div className="mb-2 flex justify-between text-[15px]">
            <span>Срок кредита, месяцев</span>
            <b className="font-bold">{term} мес.</b>
          </div>
          <Range min={6} max={84} step={6} value={term} onChange={setTerm} marks={terms} />
        </div>
        <input value={down} onChange={(e) => setDown(e.target.value.replace(/\D/g, '').slice(0, 8))} inputMode="numeric" placeholder="Первоначальный взнос" className={input + 'border-line'} />
      </div>
      <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center">
        <span className="shrink-0 text-[15px] lg:w-[110px]">Выберите банк</span>
        <div className="no-scrollbar flex gap-3 overflow-x-auto pb-1 lg:grid lg:flex-1 lg:grid-cols-7 lg:gap-6">
          {banks.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => setBank(b.id)}
              title={b.name}
              className={'flex h-[42px] w-[100px] shrink-0 items-center justify-center rounded-[4px] px-1 transition lg:w-auto ' + (bank === b.id ? 'bg-line ring-2 ring-red' : 'bg-white hover:bg-gray')}
            >
              <Logo item={b} small />
            </button>
          ))}
        </div>
      </div>
    </Step>
  )

  return (
    <Box className="mt-12 md:mt-[112px]">
      <form onSubmit={submit} noValidate className="flex flex-col gap-4">
        <Step n={1} title="Ваш будущий автомобиль">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,560px)_1fr] lg:gap-10">
            <div className="flex flex-col gap-3">
              <Select
                value={brand}
                onChange={(v) => {
                  setBrand(v)
                  setCarId('')
                  setTrimId('')
                }}
                options={brands}
                placeholder="Марка"
                className={sel}
              />
              <Select
                value={carId}
                onChange={(v) => {
                  setCarId(v)
                  setTrimId('')
                }}
                options={models.map((c) => ({ value: String(c.id), title: c.model }))}
                placeholder="Модель"
                className={sel}
              />
              <Select value={trimId} onChange={setTrimId} options={car ? car.trims.map((t) => ({ value: String(t.id), title: t.name })) : []} placeholder="Комплектация" className={sel} />
            </div>
            {car ? (
              <div className="grid items-center gap-4 sm:grid-cols-[1fr_auto] lg:-mt-[70px]">
                <p className="text-right text-[16px] font-bold sm:col-span-2 md:text-[20px]">
                  {car.brand} {car.trim} ({car.year})
                </p>
                <CarImg car={car} className="h-[150px] w-full lg:h-[200px] lg:max-w-[370px]" />
                <div className="text-right">
                  <p className="text-[13px] text-muted md:text-[16px]">Цена со скидками</p>
                  <p className="text-[24px] font-medium md:text-[30px]">{price(final)}</p>
                  <p className="mt-3 text-[13px] text-muted md:mt-5 md:text-[16px]">Базовая цена</p>
                  <p className="text-[18px] text-muted md:text-[20px]">{price(base)}</p>
                  <div className="mt-3 inline-block rounded-[6px] bg-red px-3 py-1.5 text-right text-white md:mt-5 md:rounded-[8px] md:px-3.5 md:py-2">
                    <p className="text-[12px] md:text-[16px]">Платеж</p>
                    <p className="text-[20px] leading-tight font-bold md:text-[24px]">{num(pay)} ₽/мес.</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative lg:-mt-12">
                <p className="text-[16px] text-muted">
                  Выберите марку и модель
                  <br />
                  автомобиля
                </p>
                <img src="/images/car-covered.png" alt="" className="mx-auto mt-2 w-[380px] max-w-full" />
              </div>
            )}
          </div>
        </Step>

        {steps.installment && (
          <Step n={numOf(true)} title="Купить в рассрочку">
            <div className="grid gap-8 md:grid-cols-2 md:gap-[60px]">
              <div>
                <div className="mb-2 flex justify-between text-[15px]">
                  <span>Срок рассрочки, месяцев</span>
                  <b className="font-bold">{term} мес.</b>
                </div>
                <Range min={6} max={84} step={6} value={term} onChange={setTerm} marks={[6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84]} />
              </div>
              <div>
                <div className="mb-2 flex justify-between text-[15px]">
                  <span>Первоначальный взнос,%</span>
                  <b className="font-bold">{price((final * part) / 100)}</b>
                </div>
                <Range min={55} max={90} value={part} onChange={setPart} marks={[55, 60, 65, 70, 75, 80, 85, 90]} />
              </div>
            </div>
          </Step>
        )}

        {creditStep}

        {steps.tradein && (
          <Step
            n={numOf(trade)}
            title="Программа Trade-in"
            off={!trade}
            button={steps.tradeinFirst ? null : trade ? 'Убрать' : 'Добавить'}
            onButton={() => setTrade(!trade)}
            check={trade && <Check label={program.tradeinLabel[0]} value={tradeCheck} onChange={setTradeCheck} />}
          >
            <div className="grid gap-3 md:grid-cols-2 md:gap-x-8">
              <Select value={old.brand} onChange={(v) => setOld({ ...old, brand: v, model: '' })} options={allBrands} placeholder="Марка" className={sel} />
              <div className="grid grid-cols-2 gap-3">
                <Select value={old.year} onChange={(v) => setOld({ ...old, year: v })} options={years} placeholder="Год выпуска" className={sel} />
                <Select value={old.gearbox} onChange={(v) => setOld({ ...old, gearbox: v })} options={['Механика', 'Автомат', 'Робот', 'Вариатор']} placeholder="Коробка передач" className={sel} />
              </div>
              <Select value={old.model} onChange={(v) => setOld({ ...old, model: v })} options={oldModels} placeholder="Модель" className={sel} />
              {steps.tradeinFirst ? (
                <input value={old.trim} onChange={(e) => setOld({ ...old, trim: e.target.value.replace(/\D/g, '') })} inputMode="numeric" placeholder="Ваша цена" className={input + 'border-line'} />
              ) : (
                <Select value={old.trim} onChange={(v) => setOld({ ...old, trim: v })} options={['Базовая', 'Комфорт', 'Престиж', 'Люкс']} placeholder="Комплектация" className={sel} />
              )}
            </div>
          </Step>
        )}

        <Step n={numOf(true)} title="Персональные данные">
          <div className="grid gap-3 md:grid-cols-2 md:gap-x-8">
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                setErrors({ ...errors, name: false })
              }}
              placeholder="Ваше имя"
              className={input + (errors.name ? 'border-red' : 'border-line')}
            />
            <Select value={gift} onChange={setGift} options={gifts} placeholder="Выберите подарок" className={sel} />
            <div>
              <input
                value={phone}
                type="tel"
                onChange={(e) => {
                  setPhone(maskPhone(e.target.value))
                  setErrors({ ...errors, phone: false })
                }}
                placeholder="Номер телефона"
                className={input + (errors.phone ? 'border-red' : 'border-line')}
              />
              <p className="mt-4 max-w-[420px] text-[12px] text-muted">
                Нажимая кнопку "Получить лучшие условия" Вы даете согласие на обработку своих <span className="underline">персональных данных</span>
              </p>
            </div>
            <button type="submit" className="h-[64px] rounded-[4px] bg-red text-[15px] font-bold text-white uppercase hover:bg-red-dark">
              Получить лучшие условия
            </button>
          </div>
        </Step>
      </form>
      {sent && <Thanks onClose={() => setSent(false)} />}
    </Box>
  )
}
