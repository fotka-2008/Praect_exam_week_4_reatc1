import { useState } from 'react'
import CarImage from './CarImage'
import RangeSlider from './RangeSlider'
import { Agreement, Input, Select } from './FormFields'
import { sendForm } from '../utils/form'
import { CheckIcon } from './Icons'
import { calcMonthly, formatPrice } from '../utils/format'
import creditCars from '../data/creditCars.json'
import banks from '../data/banks.json'
function StepCard({ number, title, action, right, children }) {
  return (
    <div className="relative rounded-[20px] bg-soft px-5 pt-14 pb-8 lg:rounded-[30px] lg:pt-[50px] lg:pr-[120px] lg:pb-[52px] lg:pl-[116px]">
      <span
        className={
          'absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-[22px] font-medium text-white lg:top-[46px] lg:-left-5 ' +
          (number ? 'bg-primary' : 'bg-[#bdbdbd]')
        }
      >
        {number || '+'}
      </span>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-5">
          <h3 className={'text-[26px] font-medium lg:text-[32px] ' + (number ? '' : 'text-[#bdbdbd]')}>{title}</h3>
          {action}
        </div>
        {right}
      </div>
      {children && <div className="mt-6 lg:mt-7">{children}</div>}
    </div>
  )
}
function Checkbox({ label, checked, onChange, disabled = false }) {
  return (
    <label className={'flex cursor-pointer items-center gap-4 text-[14px] leading-tight text-[#6f6f6f] ' + (disabled ? 'opacity-40' : '')}>
      <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} className="peer sr-only" />
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[3px] bg-[#d9d9d9] text-white peer-checked:bg-primary">
        <CheckIcon className="h-3.5 w-3.5" />
      </span>
      <span className="max-w-[200px]">{label}</span>
    </label>
  )
}
function SmallButton({ children, onClick }) {
  return (
    <button type="button" onClick={onClick} className="h-8 rounded-[4px] bg-primary px-6 text-[14px] font-bold text-white uppercase hover:bg-primary-dark">
      {children}
    </button>
  )
}

export default function CreditCalculatorSteps({ steps }) {
  const [brand, setBrand] = useState('') 
  const [months, setMonths] = useState(36)
  const [down, setDown] = useState(65)
  const [bank, setBank] = useState(0)
  const [checks, setChecks] = useState({})

  const [collapsed, setCollapsed] = useState(() => {
    const start = {}
    steps.forEach((step) => (start[step.type] = Boolean(step.collapsed)))
    return start
  })

  const emptyCar = steps.find((s) => s.type === 'car')?.empty && !brand
  const car = creditCars.find((c) => c.brand === brand) || creditCars[0]
  const monthly = steps.some((s) => s.type === 'installment') ? calcMonthly(car.price, down, months, 0) : calcMonthly(car.price, 0, months)

  const isChecked = (key) => checks[key] !== false
  const toggleCheck = (key) => setChecks({ ...checks, [key]: !isChecked(key) })
  const toggleStep = (type) => setCollapsed({ ...collapsed, [type]: !collapsed[type] })

  let counter = 0

  return (
    <form onSubmit={sendForm} className="flex flex-col gap-5">
      {steps.map((step) => {
        const open = !collapsed[step.type]
        const number = open ? ++counter : null

        if (step.type === 'car') {
          return (
            <StepCard key="car" number={number} title="Ваш будущий автомобиль">
              <div className="grid gap-8 lg:grid-cols-[560px_1fr] lg:gap-[45px]">
                <div className="flex flex-col gap-3">
                  <Select
                    placeholder="Марка"
                    options={[...new Set(creditCars.map((c) => c.brand))]}
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  />
                  <Select placeholder="Модель" options={creditCars.filter((c) => !brand || c.brand === brand).map((c) => c.model)} />
                  <Select placeholder="Комплектация" options={['Classic', 'Comfort', 'Prestige', 'Premium']} />
                </div>

                {emptyCar ? (
                  <div className="flex items-center gap-6 lg:-mt-16">
                    <img src="/images/car-covered.png" alt="" className="w-[60%] max-w-[360px]" />
                    <p className="text-[16px] text-[#a5a5a5]">Выберите марку и модель автомобиля</p>
                  </div>
                ) : (
                  <div className="relative lg:-mt-[70px]">
                    <p className="text-[18px] font-medium sm:text-right lg:text-[20px]">
                      {car.brand} {car.model} {car.trim}
                    </p>
                    <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                      <CarImage src={car.image} hue={car.hue} alt={car.model} className="w-full max-w-[360px] object-contain" />
                      <div className="shrink-0 text-right">
                        <p className="text-[14px] text-[#6f6f6f]">Цена со скидками</p>
                        <p className="text-[26px] font-medium">{formatPrice(car.price)}</p>
                        <p className="mt-4 text-[14px] text-[#6f6f6f]">Базовая цена</p>
                        <p className="text-[20px] text-[#6f6f6f]">{formatPrice(car.basePrice)}</p>
                        <div className="mt-3 rounded-[10px] bg-primary px-4 py-1.5 text-white">
                          <p className="text-[14px]">Платеж</p>
                          <p className="text-[22px] font-medium">{formatPrice(monthly)}/мес.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </StepCard>
          )
        }

        if (step.type === 'installment') {
          return (
            <StepCard key="installment" number={number} title="Купить в рассрочку">
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-[82px]">
                <RangeSlider
                  label="Срок рассрочки, месяцев"
                  valueLabel={months + ' мес.'}
                  min={6}
                  max={84}
                  step={6}
                  value={months}
                  onChange={setMonths}
                  marks={[6, 12, 18, 24, 36, 42, 48, 54, 60, 66, 72, 78, 84]}
                />
                <RangeSlider
                  label="Первоначальный взнос,%"
                  valueLabel={formatPrice((car.price * down) / 100)}
                  min={55}
                  max={90}
                  step={5}
                  value={down}
                  onChange={setDown}
                  marks={[55, 60, 65, 70, 75, 80, 85, 90]}
                />
              </div>
            </StepCard>
          )
        }

        if (step.type === 'credit') {
          return (
            <StepCard
              key="credit"
              number={number}
              title="Купить в кредит"
              action={!open && <SmallButton onClick={() => toggleStep('credit')}>Добавить</SmallButton>}
              right={
                !open && step.discounts && (
                  <div className="lg:w-[560px]">
                    <Checkbox label={step.discounts[0]} checked={false} onChange={() => {}} disabled />
                  </div>
                )
              }
            >
              {open && (
                <>
                  <div className="grid gap-8 lg:grid-cols-[560px_1fr] lg:gap-[45px]">
                    <RangeSlider
                      label="Срок кредита, месяцев"
                      valueLabel={months + ' мес.'}
                      min={6}
                      max={84}
                      step={6}
                      value={months}
                      onChange={setMonths}
                      marks={[6, 12, 24, 36, 48, 60, 72, 84]}
                    />
                    <div className="lg:-mt-14">
                      <div className="flex flex-wrap gap-x-10 gap-y-3">
                        {step.discounts.map((label, i) => (
                          <Checkbox key={label} label={label} checked={isChecked('credit-' + i)} onChange={() => toggleCheck('credit-' + i)} />
                        ))}
                      </div>
                      <Input placeholder="Первоначальный взнос" className="mt-6" />
                    </div>
                  </div>

                  <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-9">
                    <span className="text-[16px]">Выберите банк</span>
                    <div className="flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] lg:gap-[30px]">
                      {banks.map((b, index) => (
                        <button
                          type="button"
                          key={b.name}
                          onClick={() => setBank(index)}
                          className={
                            'h-[42px] w-[119px] shrink-0 rounded-[4px] text-[12px] font-bold ' + (bank === index ? 'bg-[#dcdcdc]' : 'bg-white')
                          }
                          style={{ color: b.color }}
                        >
                          {b.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </StepCard>
          )
        }

        if (step.type === 'tradein') {
          return (
            <StepCard
              key="tradein"
              number={number}
              title="Программа Trade-in"
              action={<SmallButton onClick={() => toggleStep('tradein')}>{open ? 'Убрать' : 'Добавить'}</SmallButton>}
              right={
                open && (
                  <div className="lg:w-[560px]">
                    <Checkbox label={step.discount} checked={isChecked('tradein')} onChange={() => toggleCheck('tradein')} />
                  </div>
                )
              }
            >
              {open && (
                <div className="grid gap-3 lg:grid-cols-[560px_1fr] lg:gap-x-[45px]">
                  <Select placeholder="Марка" options={['Kia', 'Hyundai', 'Lada', 'Renault', 'Toyota', 'Volkswagen']} />
                  <div className="grid grid-cols-2 gap-3">
                    <Select placeholder="Год выпуска" options={['2021', '2020', '2019', '2018', '2017', '2016']} />
                    <Select placeholder={step.withPrice ? 'Трансмиссия' : 'Коробка передач'} options={['Механика', 'Автомат', 'Робот', 'Вариатор']} />
                  </div>
                  <Select placeholder="Модель" options={['Rio', 'Solaris', 'Granta', 'Logan', 'Camry', 'Polo']} />
                  {step.withPrice ? <Input placeholder="Ваша цена" /> : <Select placeholder="Комплектация" options={['Базовая', 'Средняя', 'Максимальная']} />}
                </div>
              )}
            </StepCard>
          )
        }

        return (
          <StepCard key="personal" number={number} title="Персональные данные">
            <div className="grid gap-3 lg:grid-cols-[560px_1fr] lg:gap-x-[45px]">
              <Input placeholder="Ваше имя" required />
              <Select placeholder="Выберите подарок" options={['Комплект зимней резины', 'КАСКО на 1 год', 'Коврики и сетка', 'Сигнализация']} />
              <Input type="tel" placeholder="Номер телефона" required />
              <button className="h-14 rounded-[4px] bg-primary text-[16px] font-bold text-white uppercase hover:bg-primary-dark lg:h-16">
                Получить лучшие условия
              </button>
              <Agreement button="Получить лучшие условия" className="mt-2 max-w-[420px]" />
            </div>
          </StepCard>
        )
      })}
    </form>
  )
}
