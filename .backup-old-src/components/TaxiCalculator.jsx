import { useState } from 'react'
import Container from './Container'
import SectionTitle from './SectionTitle'
import CarImage from './CarImage'
import taxiClasses from '../data/taxiClasses.json'
import { Agreement, Input, Select } from './FormFields'
import { sendForm } from '../utils/form'
import { CheckIcon } from './Icons'
import { formatPrice } from '../utils/format'
import taxiCars from '../data/taxiCars.json'

function Step({ number, title, last = false, children }) {
  return (
    <div className="relative grid grid-cols-[44px_1fr] gap-x-4 pb-6 lg:grid-cols-[52px_1fr] lg:gap-x-9">
      {!last && <span className="absolute top-14 bottom-2 left-[22px] border-l border-dashed border-[#cfcfcf] lg:left-[26px]" />}
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e4e4e4] text-[18px] text-white shadow-[0_0_0_6px_#f7f7f7] lg:h-[52px] lg:w-[52px]">
        {number}
      </span>
      <div>
        {title && <h3 className="mb-4 pt-2 text-[20px] font-bold lg:mb-5 lg:pt-2.5 lg:text-[24px]">{title}</h3>}
        {children}
      </div>
    </div>
  )
}

export default function TaxiCalculator() {
  const [carClass, setCarClass] = useState('econom')
  const [brand, setBrand] = useState('')

  const classCars = taxiCars.filter((car) => car.class === carClass)
  const brands = [...new Set(classCars.map((car) => car.model.split(' ')[0]))]
  const brandCars = brand ? classCars.filter((car) => car.model.startsWith(brand)) : classCars
  const [modelId, setModelId] = useState('')
  const car = brandCars.find((c) => String(c.id) === modelId) || brandCars[0]

  return (
    <Container className="mt-24 lg:mt-[150px]">
      <SectionTitle title="Кредитный калькулятор" center />
      <form onSubmit={sendForm} className="mx-auto max-w-[797px] lg:mt-[70px]">
        <Step number="1" title="Выберите класс авто">
          <Select
            value={carClass}
            onChange={(e) => {
              setCarClass(e.target.value)
              setBrand('')
              setModelId('')
            }}
            options={Object.entries(taxiClasses).map(([value, label]) => ({ value, label }))}
          />
        </Step>

        <Step number="2" title="Ваш будущий автомобиль">
          <div className="grid gap-4 sm:grid-cols-2">
            <Select
              value={brand}
              onChange={(e) => {
                setBrand(e.target.value)
                setModelId('')
              }}
              placeholder="Выберите марку"
              options={brands}
            />
            <Select
              value={modelId}
              onChange={(e) => setModelId(e.target.value)}
              placeholder="Выберите модель"
              options={brandCars.map((c) => ({ value: String(c.id), label: c.model + ' ' + c.trim }))}
            />
          </div>

          {car && (
            <div className="mt-8 flex flex-col-reverse items-center gap-4 rounded-[10px] bg-light p-6 sm:flex-row sm:justify-between lg:mt-10 lg:px-8 lg:py-6">
              <div className="self-start">
                <p className="text-[18px] lg:text-[20px]">
                  {car.model}
                  <br />
                  {car.trim}
                </p>
                <p className="mt-6 text-[14px] text-muted lg:mt-12">от {formatPrice(car.price)}</p>
                <p className="text-[18px] font-bold">от {car.perDay} ₽/день</p>
              </div>
              <CarImage src={car.image} hue={car.hue} alt={car.model} className="w-full max-w-[340px] object-contain" />
            </div>
          )}
        </Step>

        <Step number="3" title="Срок кредита, мес.">
          <Select options={['1 год', '2 года', '3 года', '5 лет', '7 лет']} defaultValue="7 лет" />
        </Step>

        <Step number="4" title="Персональные данные">
          <div className="grid gap-3">
            <Input placeholder="Ваше имя" required />
            <Input type="tel" placeholder="Ваш телефон" required />
          </div>
        </Step>

        <Step
          last
          number={<CheckIcon className="h-5 w-5" />}
        >
          <button className="h-14 w-full rounded-[4px] bg-primary text-[16px] font-bold text-white uppercase hover:bg-primary-dark lg:h-16">
            Оставить заявку
          </button>
          <Agreement button="Оставить заявку" className="mt-4 max-w-[460px]" />
        </Step>
      </form>
    </Container>
  )
}
