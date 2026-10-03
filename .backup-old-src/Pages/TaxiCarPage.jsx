import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../components/Container'
import HeroBanner, { HeroBadge, HeroTitle } from '../components/HeroBanner'
import BenefitsIcons from '../components/BenefitsIcons'
import CardActions from '../components/CardActions'
import CarImage from '../components/CarImage'
import EarnSection from '../components/EarnSection'
import SectionTitle from '../components/SectionTitle'
import { ChevronDownIcon, GiftCircleIcon } from '../components/Icons'
import { HeroPerks } from './TaxiPage'
import NotFoundPage from './NotFoundPage'
import { formatPrice } from '../utils/format'
import taxiCars from '../data/taxiCars.json'
import taxiTrims from '../data/taxiTrims.json'
import benefits from '../data/benefits.json'

const heroPerks = ['Поставим на учет', 'Такси в собственность без первоначального взноса', 'Установка ГБО для экономии', 'Брендирование авто за наш счет']

const rowGrid = 'lg:grid lg:grid-cols-[311px_190px_197px_163px_117px_1fr_40px] lg:items-center'

function TrimRow({ car, trim, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen)
  const price = car.price + trim.extra
  const perDay = Math.round(price / 2700)

  return (
    <div className={'overflow-hidden rounded-[20px] border border-[#e5e5e5] lg:rounded-[30px] ' + (open ? 'bg-white' : 'bg-light')}>

      <div className={'relative flex flex-wrap items-center gap-x-5 gap-y-1 bg-light py-4 pr-16 pl-5 lg:px-6 lg:py-5 ' + rowGrid}>
        <p className="flex w-full items-center gap-3 text-[18px] font-medium lg:w-auto lg:pr-0 lg:text-[20px]">
          {trim.name}
          {trim.discount && <span className="rounded-full bg-primary px-2 text-[16px] leading-[22px] text-white">{trim.discount}</span>}
        </p>
        <span className="text-[15px] lg:text-[16px]">{trim.engine}</span>
        <span className="text-[15px] lg:text-[16px]">{trim.gearbox}</span>
        <span className="text-[15px] lg:text-[16px]">{trim.drive}</span>
        <span className="text-[14px] text-muted">от {formatPrice(price)}</span>
        <span className="text-[16px] font-bold">от {perDay} ₽/день</span>
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Свернуть' : 'Подробнее'}
          className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow lg:static"
        >
          <ChevronDownIcon className={'h-5 w-5 transition-transform ' + (open ? 'rotate-180' : '')} />
        </button>
      </div>

      {open && (
        <>
          <div className="flex flex-col gap-6 border-b border-[#e5e5e5] px-5 py-6 lg:flex-row lg:items-center lg:gap-10 lg:px-6">
            <div className="relative shrink-0">
              <CardActions className="absolute top-0 left-0" />
              <CarImage src={car.image} hue={car.hue} alt={car.model} className="mx-auto w-[260px] lg:ml-20" />
            </div>
            <div className="flex-1">
              <p className="text-[20px] font-medium">{car.model}</p>
              <ul className="mt-4 grid gap-x-6 gap-y-2.5 text-[15px] sm:grid-cols-2 lg:text-[16px]">
                {car.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <GiftCircleIcon className="h-5 w-5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => alert('Заявка отправлена')}
              className="h-12 shrink-0 bg-primary pr-10 pl-[70px] text-[14px] font-bold text-white hover:bg-primary-dark lg:-mr-6"
              style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%)', borderRadius: '4px 0 0 4px' }}
            >
              Оставить заявку
            </button>
          </div>

          <div className="grid gap-8 px-5 py-8 md:grid-cols-3 lg:px-[30px]">
            {taxiTrims.equipment.map((group) => (
              <div key={group.title}>
                <h4 className="text-[20px] font-medium">{group.title}</h4>
                <ul className="mt-5 flex flex-col gap-1 text-[15px] lg:text-[16px]">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-4">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function TaxiCarPage() {
  const { id } = useParams()
  const car = taxiCars.find((c) => String(c.id) === id)
  if (!car) return <NotFoundPage />

  return (
    <>

      <HeroBanner
        crumbs={[{ label: 'Такси в кредит', to: '/taxi' }, { label: car.model }]}
        bgClass="bg-[#eeeeee]"
        side={
          <>
            <img
              src="/images/hero-city.jpg"
              alt=""
              className="pointer-events-none absolute top-[60px] right-[-200px] hidden w-[1150px] mix-blend-multiply grayscale lg:block"
            />
            <CarImage
              src={car.image}

              hue={car.hue}
              alt={car.model}
              className="relative mt-6 w-full lg:absolute lg:top-[190px] lg:right-[60px] lg:mt-0 lg:w-[720px] lg:-scale-x-100"
            />
          </>
        }
      >
        <HeroTitle className="mt-8 lg:mt-[56px]">Такси {car.model}</HeroTitle>
        <HeroBadge small big="1,9%" text={'Процентная\nставка'} className="mt-6" />
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

      <Container className="mt-24 lg:mt-[130px]">
        <SectionTitle title="Авто в наличии" center />
        {taxiTrims.groups.map((group) => (
          <div key={group.title}>
            <h3 className="text-[24px] font-medium">{group.title}</h3>

            <div className={'mt-8 hidden px-6 text-[14px] font-medium text-[#9a9a9a] ' + rowGrid}>
              <span>Комплектация</span>
              <span className="flex items-center gap-1">Двигатель <ChevronDownIcon className="h-3 w-3" /></span>
              <span className="flex items-center gap-1">Коробка передач <ChevronDownIcon className="h-3 w-3" /></span>
              <span className="flex items-center gap-1">Привод <ChevronDownIcon className="h-3 w-3" /></span>
              <span className="flex items-center gap-1">Цена <ChevronDownIcon className="h-3 w-3" /></span>
              <span className="flex items-center gap-1">Платеж <ChevronDownIcon className="h-3 w-3" /></span>
            </div>
            <div className="mt-5 flex flex-col gap-[30px]">
              {group.trims.map((trim, index) => (
                <TrimRow key={trim.name} car={car} trim={trim} defaultOpen={index === 0} />
              ))}
            </div>
          </div>
        ))}
      </Container>

      <div className="lg:mt-[60px]">
        <EarnSection />
      </div>
      <div className="h-20 lg:h-[150px]" />
    </>
  )
}
