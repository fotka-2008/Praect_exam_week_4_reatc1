import { useState } from 'react'
import Box from './Box'
import Icon from './Icon'
import Select from './Select'
import CarImg from './CarImg'
import Thanks from './Thanks'
import cars from '../data/cars.json'
import benefits from '../data/benefits.json'
import { maskPhone, num, phoneOk, price } from '../utils'

const taxi = cars.filter((c) => c.type === 'taxi' && !c.sold)
const classes = [{ value: 'start', title: 'Старт' }, ...benefits.taxiClasses.map((c) => ({ value: c.id, title: c.title }))]
const years = [1, 2, 3, 4, 5, 6, 7].map((y) => ({ value: y, title: y + (y === 1 ? ' год' : y < 5 ? ' года' : ' лет') }))

function Step({ n, title, last, children }) {
  return (
    <div className="relative flex gap-3 md:gap-8">
      <div className="flex flex-col items-center">
        <span className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#E5E5E5] text-[18px] md:h-[48px] md:w-[48px] md:text-[20px] text-white shadow-[0_0_0_6px_#fff,0_0_0_7px_#f3f3f3]">
          {n === 'ok' ? <Icon name="check" className="h-5 w-5" strokeWidth={3} /> : n}
        </span>
        {!last && <span className="mt-2 w-px flex-1 border-l border-dashed border-[#d0d0d0]" />}
      </div>
      <div className="min-w-0 flex-1 pb-8">
        {title && <h3 className="mt-2.5 mb-4 text-[22px] font-medium md:text-[24px]">{title}</h3>}
        {children}
      </div>
    </div>
  )
}

export default function TaxiCalc() {
  const [cls, setCls] = useState('start')
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [term, setTerm] = useState(7)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const byClass = cls === 'start' ? taxi : taxi.filter((c) => c.class === cls)
  const brands = [...new Set(byClass.map((c) => c.brand))]
  const byBrand = brand ? byClass.filter((c) => c.brand === brand) : byClass
  const models = byBrand.map((c) => ({ value: String(c.id), title: c.name + ' ' + c.trim }))
  const car = byBrand.find((c) => String(c.id) === model) || byBrand[0] || taxi[0]
  const day = Math.round((car.day * 7) / term)

  function submit(e) {
    e.preventDefault()
    const next = { name: !name.trim(), phone: !phoneOk(phone) }
    setErrors(next)
    if (next.name || next.phone) return
    setName('')
    setPhone('')
    setSent(true)
  }

  const input = 'h-[50px] w-full rounded-[4px] border bg-white px-4 text-[15px] outline-none placeholder:text-dark md:h-[64px] '

  return (
    <Box className="mt-16 md:mt-[100px]">
      <h2 className="mb-10 text-center text-[30px] font-bold md:mb-[70px] md:text-[44px]">Кредитный калькулятор</h2>
      <form onSubmit={submit} noValidate className="mx-auto max-w-[795px]">
        <Step n={1} title="Выберите класс авто">
          <Select
            value={cls}
            onChange={(v) => {
              setCls(v)
              setBrand('')
              setModel('')
            }}
            options={classes}
          />
        </Step>
        <Step n={2} title="Ваш будущий автомобиль">
          <div className="grid gap-4 sm:grid-cols-2">
            <Select
              value={brand}
              onChange={(v) => {
                setBrand(v)
                setModel('')
              }}
              options={brands}
              placeholder="Выберите марку"
            />
            <Select value={model} onChange={setModel} options={models} placeholder="Выберите модель" />
          </div>
          <div className="mt-10 flex flex-col-reverse items-center gap-4 rounded-[10px] bg-gray p-6 sm:flex-row sm:p-8">
            <div className="flex-1 self-stretch">
              <p className="text-[20px] leading-tight">
                {car.name}
                <br />
                {car.trim}
              </p>
              <p className="mt-6 text-[16px] text-muted sm:mt-10">от {price(car.price)}</p>
              <p className="text-[20px] font-bold">от {num(day)} ₽/день</p>
            </div>
            <CarImg car={car} className="h-[150px] w-[320px] max-w-full" />
          </div>
        </Step>
        <Step n={3} title="Срок кредита, мес.">
          <Select value={term} onChange={(v) => setTerm(Number(v))} options={years} />
        </Step>
        <Step n={4} title="Персональные данные">
          <div className="grid gap-4">
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                setErrors({ ...errors, name: false })
              }}
              placeholder="Ваше имя"
              className={input + (errors.name ? 'border-red' : 'border-line')}
            />
            <input
              value={phone}
              type="tel"
              onChange={(e) => {
                setPhone(maskPhone(e.target.value))
                setErrors({ ...errors, phone: false })
              }}
              placeholder="Ваш телефон"
              className={input + (errors.phone ? 'border-red' : 'border-line')}
            />
          </div>
        </Step>
        <Step n="ok" last>
          <button type="submit" className="h-[64px] w-full rounded-[4px] bg-red text-[16px] font-bold text-white uppercase hover:bg-red-dark">
            Оставить заявку
          </button>
          <p className="mt-4 max-w-[460px] text-[13px] text-muted">
            Нажимая кнопку Оставить заявку” Вы даете согласие на обработку своих <span className="underline">персональных данных</span>
          </p>
        </Step>
      </form>
      {sent && <Thanks onClose={() => setSent(false)} />}
    </Box>
  )
}
