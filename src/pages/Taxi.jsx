import { useState } from 'react'
import Hero from '../components/Hero'
import Box from '../components/Box'
import Intro from '../components/Intro'
import Checks from '../components/Checks'
import IconBenefits from '../components/IconBenefits'
import Select from '../components/Select'
import CarCardTaxi from '../components/CarCardTaxi'
import More from '../components/More'
import Earn from '../components/Earn'
import TaxiCalc from '../components/TaxiCalc'
import Income from '../components/Income'
import Banks from '../components/Banks'
import cars from '../data/cars.json'
import benefits from '../data/benefits.json'

const taxi = cars.filter((c) => c.type === 'taxi')

function Checker() {
  return (
    <span
      className='hidden h-[44px] flex-1 md:block'
      style={{
        backgroundColor: '#FFCD1C',
        backgroundImage: 'conic-gradient(#1b1b1b 25%, transparent 0 50%, #1b1b1b 0 75%, transparent 0)',
        backgroundSize: '44px 44px',
      }}
    />
  )
}

export default function Taxi({ store }) {
  const [cls, setCls] = useState('econom')
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [count, setCount] = useState(6)

  const byClass = cls ? taxi.filter((c) => c.class === cls) : taxi
  const brands = [...new Set(byClass.map((c) => c.brand))]
  const byBrand = brand ? byClass.filter((c) => c.brand === brand) : byClass
  const models = [...new Set(byBrand.map((c) => c.model))]
  const list = model ? byBrand.filter((c) => c.model === model) : byBrand

  function pick(id) {
    setCls(cls === id ? '' : id)
    setBrand('')
    setModel('')
    setCount(6)
  }

  return (
    <>
      <Hero
        crumbs={[{ title: 'Такси в кредит' }]}
        bg="#FFCD1C"
        side={
          <>
            <img src="/images/hero-city.jpg" alt="" className="absolute right-0 bottom-0 h-full w-[75%] object-cover mix-blend-multiply opacity-60" />
            <img src="/images/car-vw-polo-taxi.png" alt="" className="absolute right-[3%] bottom-[110px] w-[48%] min-w-[300px]" />
          </>
        }
        sideClass="inset-0 hidden md:block"
      >
        <h1 className="max-w-[820px] text-[34px] leading-[1.15] font-bold md:text-[48px] lg:text-[60px]">Специальное предложение на покупку авто под такси</h1>
        <img src="/images/car-vw-polo-taxi.png" alt="" className="mt-4 w-full md:hidden" />
        <Checks items={benefits.taxiHero} className="mt-8 md:mt-[34px]" />
      </Hero>

      <Intro />

      <IconBenefits items={benefits.taxi} rows={[[0, 5], [5, 9]]} className="mt-14 md:mt-[90px]" />

      <section className="mt-16 md:mt-[100px]">
        <div className="flex items-center gap-8">
          <Checker />
          <h2 className="px-4 text-center text-[30px] font-bold md:text-[44px]">Автомобили для такси в наличии</h2>
          <Checker />
        </div>
        <Box className="mt-8 md:mt-[60px]">
          <div className="flex flex-col gap-4 rounded-[30px] bg-soft p-5 lg:flex-row lg:items-center lg:px-6 lg:py-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="mr-4 w-full text-[20px] text-muted sm:w-auto">Выберите класс автомобиля</span>
              {benefits.taxiClasses.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => pick(c.id)}
                  className={'h-[42px] rounded-full px-8 text-[13px] font-bold uppercase transition ' + (cls === c.id ? 'bg-red text-white' : 'bg-[#EBEBEB] hover:bg-line')}
                >
                  {c.title}
                </button>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:ml-auto lg:w-[420px]">
              <Select
                value={brand}
                onChange={(v) => {
                  setBrand(v)
                  setModel('')
                  setCount(6)
                }}
                options={brands}
                placeholder="Марка"
                className="border border-line bg-white md:!h-[50px]"
              />
              <Select
                value={model}
                onChange={(v) => {
                  setModel(v)
                  setCount(6)
                }}
                options={models}
                placeholder="Модель"
                className="border border-line bg-white md:!h-[50px]"
              />
            </div>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
            {list.slice(0, count).map((c) => (
              <CarCardTaxi key={c.id} car={c} store={store} />
            ))}
          </div>
          {list.length === 0 && <p className="py-10 text-center text-[18px] text-muted">По выбранным параметрам автомобилей нет</p>}
          {count < list.length && <More onClick={() => setCount(count + 6)} />}
        </Box>
      </section>

      <Earn />
      <TaxiCalc />
      <Income />
      <Banks />
    </>
  )
}
