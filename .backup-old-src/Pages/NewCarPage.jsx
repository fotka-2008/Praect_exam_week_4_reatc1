import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../components/Container'
import HeroBanner from '../components/HeroBanner'
import CardActions from '../components/CardActions'
import CarImage from '../components/CarImage'
import CarCardNew from '../components/CarCardNew'
import Accordion from '../components/Accordion'
import Button from '../components/Button'
import SectionTitle from '../components/SectionTitle'
import TrustSection from '../components/TrustSection'
import ReviewsSection from '../components/ReviewsSection'
import SeoText from '../components/SeoText'
import { TradeInOfferBanner } from '../components/TradeInBanner'
import { Agreement, Input } from '../components/FormFields'
import { sendForm } from '../utils/form'
import NotFoundPage from './NotFoundPage'
import {
  CheckCircleIcon,
  CheckIcon,
  GiftIcon,
  PercentIcon,
  RecycleIcon,
  RefreshIcon,
  RubleIcon,
  ShieldIcon,
  TagIcon,
  WalletIcon,
} from '../components/Icons'
import { formatNumber, formatPrice } from '../utils/format'
import newCars from '../data/newCars.json'
import details from '../data/newCarDetails.json'

const discountIcons = { tag: TagIcon, wallet: WalletIcon, refresh: RefreshIcon, recycle: RecycleIcon, percent: PercentIcon, shield: ShieldIcon }

function Toggle({ on, onClick, Icon }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={on}
      className={'relative h-10 w-[68px] shrink-0 rounded-full transition-colors ' + (on ? 'bg-primary' : 'bg-[#ebebeb]')}
    >
      <span
        className={
          'absolute top-1 flex h-8 w-8 items-center justify-center rounded-full bg-white transition-all ' +
          (on ? 'left-[32px] text-primary' : 'left-1 text-[#c4c4c4]')
        }
      >
        <Icon className="h-[18px] w-[18px]" />
      </span>
    </button>
  )
}

function Perk({ icon, text }) {
  return (
    <div className="flex w-[218px] items-center gap-3 rounded-[4px] bg-white px-3 py-3 text-[15px] leading-[17px] font-medium">
      <span className="flex w-7 shrink-0 justify-center text-primary">
        {icon === 'gift' && <GiftIcon className="h-6 w-6" />}
        {icon === 'percent' && <span className="text-[22px] font-medium">0%</span>}
        {icon === 'ruble' && <RubleIcon className="h-6 w-6" />}
      </span>
      {text}
    </div>
  )
}

export default function NewCarPage() {
  const { id } = useParams()
  const car = newCars.find((c) => String(c.id) === id)
  if (!car) return <NotFoundPage />
  return <NewCarContent key={id} car={car} />
}

function NewCarContent({ car }) {

  const startColor = car.colors.findIndex((c) => c.image === car.image && c.tint === car.tint && (c.hue || 0) === (car.hue || 0))
  const [colorIndex, setColorIndex] = useState(Math.max(startColor, 0))
  const [showEquipment, setShowEquipment] = useState(false)
  const [showSpecs, setShowSpecs] = useState(false)
  const [discountsOn, setDiscountsOn] = useState(details.discounts.map((d) => d.on))
  const [visibleAnalogs, setVisibleAnalogs] = useState(3)

  const color = car.colors[colorIndex]
  const title = car.fullName + ' ' + car.year

  const yourDiscount = details.discounts.reduce((sum, d, i) => sum + (discountsOn[i] ? d.amount : 0), 0)
  const maxDiscount = details.discounts.reduce((sum, d) => sum + d.amount, 0)

  const toggleDiscount = (index) => {
    const copy = [...discountsOn]
    copy[index] = !copy[index]
    setDiscountsOn(copy)
  }

  const analogs = newCars.filter((c) => c.id !== car.id)

  return (
    <>

      <HeroBanner
        crumbs={[{ label: 'Каталог авто', to: '/favorites' }, { label: car.brand }, { label: car.name }, { label: title }]}
        bgClass="bg-[#eeeeee] [&_nav]:text-[#a5a5a5]"
        side={
          <>
            <img
              src="/images/hero-city.jpg"
              alt=""
              className="pointer-events-none absolute top-[90px] right-[-150px] hidden w-[1100px] mix-blend-multiply grayscale lg:block"
            />

            <CardActions className="absolute top-[26px] right-4 hidden lg:flex" />

            <div className="relative mt-6 lg:absolute lg:top-[86px] lg:right-4 lg:mt-0">
              <div className="flex items-center justify-between">
                <p className="text-[16px]">Цвет: {color.name}</p>
                <CardActions className="lg:hidden" />
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {car.colors.map((c, index) => (
                  <button
                    key={c.name}
                    onClick={() => setColorIndex(index)}
                    aria-label={c.name}
                    title={c.name}
                    className="relative h-[30px] w-[30px] rounded-full border border-black/10"
                    style={{ backgroundColor: c.hex }}
                  >
                    {c === color && (
                      <span className="absolute -top-1.5 -right-1.5 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-white bg-primary text-white">
                        <CheckIcon className="h-2.5 w-2.5" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            <CarImage
              src={color.image}
              hue={color.hue}
              tint={color.tint}
              alt={title}
              className="relative mt-6 w-full lg:absolute lg:top-[130px] lg:left-[530px] lg:mt-0 lg:w-[720px]"
            />
          </>
        }
      >
        <h1 className="mt-6 max-w-[700px] text-[30px] leading-tight font-bold sm:text-[40px] lg:mt-[44px] lg:text-[48px]">{title}</h1>
        <div className="mt-8 flex flex-wrap items-end gap-6 lg:mt-[68px] lg:gap-7">
          <div>
            <p className="text-[18px] text-[#a5a5a5] line-through lg:text-[20px]">{formatPrice(car.oldPrice)}</p>
            <p className="text-[30px] leading-none font-bold lg:text-[36px]">от {formatPrice(car.price)}</p>
          </div>
          <button className="h-12 rounded-[4px] bg-primary px-9 text-[16px] font-bold text-white hover:bg-primary-dark">
            Выгода до {formatNumber(car.benefit)}₽
          </button>
        </div>
        <div className="mt-10 flex flex-col gap-2.5">
          {details.perks.map((perk) => (
            <Perk key={perk.text} icon={perk.icon} text={perk.text} />
          ))}
        </div>
      </HeroBanner>

      <Container className="mt-20 lg:mt-[70px]">
        <SectionTitle title={'Что входит в комплектацию ' + car.trim} center />
        <div className="grid gap-8 md:grid-cols-3 lg:gap-[76px]">
          {details.equipment.map((group) => (
            <div key={group.title} className="border-b border-[#c4c4c4] pb-8">
              <h3 className="border-b border-[#c4c4c4] pb-4 text-[20px] font-medium">{group.title}</h3>
              <ul className="mt-6 flex flex-col gap-0.5 text-[16px]">
                {(showEquipment ? group.items : group.items.slice(0, 6)).map((item) => (
                  <li key={item} className="flex gap-5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button onClick={() => setShowEquipment(!showEquipment)} className="h-16 w-full text-[16px] sm:w-[270px]">
            {showEquipment ? 'Скрыть' : 'Показать еще'}
          </Button>
        </div>
      </Container>

      <Container className="mt-14 lg:mt-[60px]">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
          {details.discounts.map((discount, index) => {
            const Icon = discountIcons[discount.icon]
            const on = discountsOn[index]
            return (
              <div key={discount.title} className="relative overflow-hidden rounded-[10px] bg-white p-6 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">

                <Icon className="absolute right-[90px] bottom-[-30px] h-[130px] w-[130px] text-[#f2f2f2]" />
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[18px] font-medium">{discount.title}</p>
                    <p className="text-[16px] text-[#6f6f6f]">{discount.from}</p>
                  </div>
                  <Toggle on={on} onClick={() => toggleDiscount(index)} Icon={Icon} />
                </div>
                <div className="relative mt-8 flex items-end justify-between">
                  <p className={'text-[24px] font-bold ' + (on ? '' : 'text-[#c4c4c4]')}>{discount.value}</p>
                  {discount.more && (
                    <a href="#" className="text-[12px] underline">
                      Подробнее
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-8 flex flex-col overflow-hidden rounded-[10px] lg:flex-row">
          <div className="bg-soft px-6 py-6 lg:w-[477px] lg:px-14 lg:py-9">
            <p className="text-[16px] text-[#a5a5a5]">Максимальная скидка</p>
            <p className="text-[24px] font-medium text-[#a5a5a5]">до {formatPrice(maxDiscount)}</p>
          </div>
          <div className="flex flex-1 flex-col gap-5 bg-primary px-6 py-6 text-white sm:flex-row sm:items-center sm:justify-between lg:-ml-2.5 lg:rounded-[10px] lg:pr-6 lg:pl-14">
            <div>
              <p className="text-[18px]">Ваша скидка</p>
              <p className="text-[32px] leading-tight font-bold lg:text-[36px]">до {formatPrice(yourDiscount)}</p>
            </div>
            <button
              onClick={() => alert('Условия зафиксированы')}
              className="h-14 rounded-[4px] bg-white px-10 text-[14px] font-bold text-primary uppercase hover:bg-light lg:h-16 lg:w-[422px]"
            >
              Зафиксировать условия
            </button>
          </div>
        </div>
      </Container>

      <TradeInOfferBanner />

      <Container className="mt-20 lg:mt-[70px]">
        <h2 className="text-[28px] leading-tight font-bold lg:text-[44px]">Технические характеристики {title}</h2>
        <div className="mt-8 flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">

          <div className="flex flex-wrap items-end gap-8 lg:gap-[90px]">
            <figure className="text-center">
              <img src="/images/dim-side.png" alt="Вид сбоку" className="h-[112px] w-auto" />
              <span className="mt-4 block border-x border-b border-[#c4c4c4] pt-3" />
              <figcaption className="mt-2 text-[16px]">{details.dimensions[0].value}</figcaption>
            </figure>
            <figure className="text-center">
              <img src="/images/dim-back.png" alt="Вид сзади" className="h-[112px] w-auto" />
              <span className="mt-4 block border-x border-b border-[#c4c4c4] pt-3" />
              <figcaption className="mt-2 text-[16px]">{details.dimensions[1].value}</figcaption>
            </figure>
            <figure className="flex items-start gap-3 text-center">
              <div>
                <img src="/images/dim-front.png" alt="Вид спереди" className="h-[112px] w-auto" />
                <span className="mt-4 block border-x border-b border-[#c4c4c4] pt-3" />
                <figcaption className="mt-2 text-[16px]">{details.dimensions[1].value}</figcaption>
              </div>
              <span className="flex h-[120px] items-center border-y border-r border-[#c4c4c4] pr-3 pl-1 text-[16px]">
                <span className="translate-x-12">{details.dimensions[2].value}</span>
              </span>
            </figure>
          </div>

          <dl className="rounded-[10px] border border-[#dcdcdc] px-9 py-8 xl:w-[335px]">
            {details.dimensions.map((d) => (
              <div key={d.label} className="flex justify-between gap-4 py-1 text-[16px]">
                <dt>{d.label}</dt>
                <dd className="font-bold">{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-10">
          {(showSpecs ? details.specs : details.specs.slice(0, 6)).map((group, index) => (
            <Accordion key={group.title} title={group.title} defaultOpen={index === 0}>
              <dl className="flex flex-col gap-5">
                {group.rows.map(([label, value]) => (
                  <div key={label} className="grid gap-1 text-[15px] sm:grid-cols-[413px_1fr]">
                    <dt className="font-medium">{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </Accordion>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button onClick={() => setShowSpecs(!showSpecs)} className="h-16 w-full text-[16px] sm:w-[270px]">
            {showSpecs ? 'Скрыть' : 'Показать еще'}
          </Button>
        </div>
      </Container>

      <Container className="mt-20 lg:mt-[70px]">
        <SectionTitle title="Другие комплектации" center />
        {details.otherTrims.map((group) => (
          <div key={group.title} className="mt-10">
            <h3 className="flex items-center justify-center gap-3 text-[24px] font-medium">
              {group.title}
              <span className="rounded-full bg-primary px-2 text-[14px] leading-[22px] text-white">{group.discount}</span>
            </h3>
            <div className="mt-10 hidden grid-cols-[311px_187px_281px_160px_1fr_1fr] px-6 text-[14px] font-medium text-[#9a9a9a] lg:grid">
              <span>Комплектация</span>
              <span>Двигатель</span>
              <span>Коробка передач</span>
              <span>Привод</span>
              <span className="text-right">Цена</span>
              <span className="text-right">Со скидкой</span>
            </div>
            <div className="mt-4 flex flex-col gap-[30px]">
              {group.rows.map((row) => (
                <Link
                  key={row.name}
                  to={'/new/' + car.id}
                  className="flex flex-wrap items-center gap-x-6 gap-y-1 rounded-[20px] border border-[#e5e5e5] bg-light px-5 py-4 hover:bg-[#e9e9e9] lg:grid lg:grid-cols-[311px_187px_281px_160px_1fr_1fr] lg:gap-0 lg:rounded-[30px] lg:px-6 lg:py-5"
                >
                  <span className="flex w-full items-center gap-3 text-[18px] font-medium lg:w-auto">
                    {car.name} {row.name}
                    <span className="rounded-full bg-primary px-2 text-[14px] leading-[22px] text-white">{group.discount}</span>
                  </span>
                  <span className="text-[15px]">{row.engine}</span>
                  <span className="text-[15px]">{row.gearbox}</span>
                  <span className="text-[15px]">{row.drive}</span>
                  <span className="text-[14px] text-[#6f6f6f] line-through lg:text-right">{formatPrice(car.oldPrice + row.extra)}</span>
                  <span className="text-[16px] font-bold lg:text-right">{formatPrice(car.price + row.extra)}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </Container>

      <section className="relative mt-20 overflow-hidden bg-[#f3f3f3] lg:mt-[75px]">
        <img src="/images/hero-city.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-40 blur-[3px]" />
        <Container className="relative grid lg:grid-cols-[1fr_520px]">
          <form onSubmit={sendForm} className="py-14 lg:py-[85px]">
            <h2 className="text-[34px] leading-tight font-bold lg:text-[64px]">Экспресс-заявка на кредит</h2>
            <p className="mt-1 text-[18px] lg:text-[24px]">Узнай предварительное решение банков не выходя из дома!</p>
            <ul className="mt-10 grid gap-x-14 gap-y-6 sm:grid-cols-2">
              {[
                ['Кредит от 1.9%', '30 банков-партнеров'],
                ['Первый взнос 0%', 'Возможность рассрочки'],
                ['Госпрограммы льготного автокредитования', '-10% от стоимости авто'],
                ['Trade In как первый взнос', '+ дополнительная скидка'],
              ].map(([bold, text]) => (
                <li key={bold} className="flex gap-6 text-[18px]">
                  <CheckCircleIcon className="mt-1 h-9 w-9 shrink-0" />
                  <span>
                    <b className="font-medium">{bold}</b>
                    <br />
                    {text}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:max-w-[860px] lg:gap-6">
              <Input placeholder="Ваше имя" required />
              <Input type="tel" placeholder="Ваш телефон" required />
              <button className="h-14 rounded-[4px] bg-primary text-[16px] font-bold text-white uppercase hover:bg-primary-dark lg:h-16">
                Обратный звонок
              </button>
            </div>
            <Agreement className="mt-6 max-w-[640px]" />
          </form>
          <img src="/images/people-woman-glasses.png" alt="" className="hidden self-end lg:block lg:w-[520px]" />
        </Container>
      </section>

      <Container className="mt-20 lg:mt-[70px]">
        <SectionTitle title="Аналоги за те же деньги" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
          {analogs.slice(0, visibleAnalogs).map((item) => (
            <CarCardNew key={item.id} car={item} />
          ))}
        </div>
        {visibleAnalogs < analogs.length && (
          <div className="mt-16 text-center">
            <Button onClick={() => setVisibleAnalogs(visibleAnalogs + 3)} className="h-16 w-full text-[16px] sm:w-[270px]">
              Показать еще
            </Button>
          </div>
        )}
      </Container>

      <TrustSection />
      <ReviewsSection />

      <Container className="mt-20 lg:mt-[140px]">
        <div className="relative rounded-[30px] bg-[#f0eeea]">
          <img src="/images/salon.jpg" alt="" className="absolute inset-0 h-full w-full rounded-[30px] object-cover opacity-25 blur-[2px]" />
          <form onSubmit={sendForm} className="relative px-6 py-10 lg:max-w-[940px] lg:py-[66px] lg:pl-[78px]">
            <h2 className="text-[28px] leading-tight font-bold lg:text-[40px]">
              Получите спецпредложение
              <br className="hidden sm:block" /> с максимальной скидкой!
            </h2>
            <p className="mt-4 text-[16px] lg:max-w-[840px]">
              Воспользуйтесь спецпредложением, которое откроет Вам простой путь покупки автомобиля с максимальной скидкой, а также упростит
              оформление всех документов за 1 день
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:gap-6">
              <Input placeholder="Ваше имя" required />
              <Input type="tel" placeholder="Ваш телефон" required />
              <button className="h-14 rounded-[4px] bg-primary text-[16px] font-bold text-white uppercase hover:bg-primary-dark lg:h-16">
                Заказать звонок
              </button>
            </div>
            <Agreement className="mt-6" />
          </form>
          <img
            src="/images/people-woman-navy.png"
            alt=""
            className="pointer-events-none absolute right-[60px] bottom-0 hidden h-[478px] w-auto xl:block"
          />
        </div>
      </Container>

      <SeoText
        title={'Купить ' + car.fullName + ' в ABC AUTO'}
        blocks={[
          {
            text:
              car.fullName +
              ' — автомобиль для тех, кто ценит надёжность и комфорт. В салоне ABC AUTO он доступен в нескольких цветах и комплектациях, с выгодой до ' +
              formatPrice(car.benefit) +
              ' и подарками при покупке.',
          },
          {
            subtitle: 'Кредит и рассрочка',
            text: 'Оформите автокредит от 1,9% без первоначального взноса. Заявку рассмотрят более 30 банков-партнёров, а предварительное решение вы получите за 30 минут.',
          },
          {
            subtitle: 'Trade-in и утилизация',
            text: 'Сдайте свой автомобиль в зачёт стоимости нового или воспользуйтесь программой утилизации — дополнительная выгода суммируется с другими скидками.',
          },
        ]}
      />
      <div className="h-20 lg:h-[100px]" />
    </>
  )
}
