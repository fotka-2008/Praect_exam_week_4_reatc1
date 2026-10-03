import { useState } from 'react'
import Container from '../components/Container'
import HeroBanner, { HeroTitle } from '../components/HeroBanner'
import BenefitsIcons from '../components/BenefitsIcons'
import CarCardTaxi from '../components/CarCardTaxi'
import taxiClasses from '../data/taxiClasses.json'
import Button from '../components/Button'
import EarnSection from '../components/EarnSection'
import TaxiCalculator from '../components/TaxiCalculator'
import BanksSlider from '../components/BanksSlider'
import SectionTitle from '../components/SectionTitle'
import { Select } from '../components/FormFields'
import { CheckRingIcon } from '../components/Icons'
import taxiCars from '../data/taxiCars.json'
import benefits from '../data/benefits.json'

const heroPerks = ['Льготный автокредит от 1,9%', 'Оклейка авто в подарок', 'Акция действует до 13 сентября!', 'Первоначальный взнос 0%']

const incomeCities = ['Москва', 'Санкт-Петербург', 'Город-миллионник', 'Город 500-300 тыс.']
const incomeRows = [
  { name: 'Эконом', values: ['от 70 000 руб.', 'от 60 000 руб.', 'от 50 000 руб.', 'от 40 000 руб.'] },
  { name: 'Комфорт', values: ['от 90 000 руб.', 'от 80 000 руб.', 'от 65 000 руб.', 'от 50 000 руб.'] },
  { name: 'Комфорт +', values: ['от 120 000 руб.', 'от 100 000 руб.', 'от 80 000 руб.', 'от 60 000 руб.'] },
]

function Checker({ className = '' }) {
  return (
    <span
      className={'block h-11 ' + className}
      style={{
        backgroundImage: 'conic-gradient(#262626 25%, #ffcd1c 0 50%, #262626 0 75%, #ffcd1c 0)',
        backgroundSize: '44px 44px',
      }}
    />
  )
}

export function HeroPerks({ items }) {
  return (
    <ul className="mt-8 grid gap-x-[30px] gap-y-5 sm:grid-cols-[230px_260px] lg:mt-10">
      {items.map((perk) => (
        <li key={perk} className="flex items-center gap-5 text-[16px] leading-[19px]">
          <CheckRingIcon className="h-12 w-12 shrink-0 lg:h-14 lg:w-14" />
          <span className="max-w-[210px] text-balance">{perk}</span>
        </li>
      ))}
    </ul>
  )
}

export default function TaxiPage() {
  const [carClass, setCarClass] = useState('econom')
  const [brand, setBrand] = useState('')
  const [visible, setVisible] = useState(6)

  const filtered = taxiCars.filter((car) => {
    if (carClass && car.class !== carClass) return false
    if (brand && !car.model.startsWith(brand)) return false
    return true
  })
  const brands = [...new Set(taxiCars.map((car) => car.model.split(' ')[0]))]

  return (
    <>

      <HeroBanner
        crumbs={[{ label: 'Такси в кредит' }]}
        bgClass="bg-taxi"
        side={
          <>
            <img
              src="/images/hero-city.jpg"
              alt=""
              className="pointer-events-none absolute top-[70px] right-[-180px] hidden w-[1150px] opacity-90 mix-blend-multiply lg:block"
            />
            <img
              src="/images/car-vw-polo-taxi.png"
              alt="Volkswagen Polo такси"
              className="relative mt-6 w-full lg:absolute lg:top-[150px] lg:right-[-60px] lg:mt-0 lg:w-[880px]"
            />
          </>
        }
      >
        <HeroTitle className="mt-8 lg:mt-[68px]">
          Специальное предложение
          <br className="hidden sm:block" /> на покупку авто под такси
        </HeroTitle>
        <HeroPerks items={heroPerks} />
      </HeroBanner>

      <Container>
        <p className="mx-auto mt-14 max-w-[720px] text-center text-[16px] leading-[24px] lg:mt-[56px] lg:text-[18px]">
          Хотите начать зарабатывать на себя? Приобретение собственного такси – один из самых доступных, простых, популярных и выгодных
          вариантов. А главное – в отличие от других видов бизнеса здесь не нужен большой стартовый капитал.
        </p>
        <div className="mt-14 lg:mt-[76px]">
          <BenefitsIcons items={benefits.taxi} perRow={5} />
        </div>
      </Container>

      <section className="mt-24 lg:mt-[150px]">
        <div className="flex items-center gap-6 lg:gap-0">
          <Checker className="hidden w-[17%] shrink-0 lg:block" />
          <h2 className="flex-1 px-4 text-center text-[28px] leading-tight font-bold sm:text-[36px] xl:text-[44px]">
            Автомобили для такси в наличии
          </h2>
          <Checker className="hidden w-[17%] shrink-0 lg:block" />
        </div>

        <Container className="mt-10 lg:mt-[66px]">

          <div className="flex flex-col gap-4 rounded-[20px] bg-soft p-4 lg:flex-row lg:items-center lg:rounded-[30px] lg:py-5 lg:pr-6 lg:pl-6">
            <span className="text-[18px] text-muted lg:mr-8 lg:text-[20px]">Выберите класс автомобиля</span>
            <div className="flex flex-wrap gap-3 lg:gap-4">
              {Object.entries(taxiClasses).map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => {
                    setCarClass(carClass === value ? '' : value)
                    setVisible(6)
                  }}
                  className={
                    'h-10 min-w-[110px] rounded-full px-4 text-[14px] font-bold uppercase transition-colors lg:min-w-[124px] ' +
                    (carClass === value ? 'bg-primary text-white' : 'bg-[#e9e9e9] hover:bg-[#dedede]')
                  }
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 lg:ml-auto lg:w-[422px]">
              <Select
                placeholder="Марка"
                options={brands}
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="[&_select]:h-[50px]"
              />
              <Select placeholder="Модель" options={filtered.map((car) => car.trim)} className="[&_select]:h-[50px]" />
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
            {filtered.slice(0, visible).map((car) => (
              <CarCardTaxi key={car.id} car={car} />
            ))}
          </div>
          {filtered.length === 0 && <p className="mt-8 text-center text-muted">Машин с такими параметрами пока нет</p>}

          {visible < filtered.length && (
            <div className="mt-8 text-center">
              <Button onClick={() => setVisible(visible + 3)} className="h-16 w-full text-[16px] sm:w-[270px]">
                Показать еще
              </Button>
            </div>
          )}
        </Container>
      </section>

      <EarnSection />

      <TaxiCalculator />

      <Container className="mt-20 lg:mt-[110px]">
        <SectionTitle title="Таблица дохода" center />

        <div className="-mx-4 overflow-x-auto px-4 lg:mt-[60px]">
          <table className="w-full min-w-[760px] text-left text-[16px]">
            <thead>
              <tr className="border-b border-line">
                <th className="w-1/5 px-6 py-6 font-bold uppercase">Класс автомобиля</th>
                {incomeCities.map((city) => (
                  <th key={city} className="w-1/5 border-l border-line px-6 py-6 font-bold uppercase">
                    {city}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {incomeRows.map((row) => (
                <tr key={row.name} className="border-b border-line">
                  <td className="px-6 py-5 font-bold">{row.name}</td>
                  {row.values.map((value, index) => (
                    <td key={index} className="border-l border-line px-6 py-5">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>

      <BanksSlider />
      <div className="h-20 lg:h-[110px]" />
    </>
  )
}
