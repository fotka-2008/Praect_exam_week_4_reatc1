import { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import Hero from '../components/Hero'
import Box from '../components/Box'
import Icon from '../components/Icon'
import CarImg from '../components/CarImg'
import Colors from '../components/Colors'
import CardActions from '../components/CardActions'
import RequestModal from '../components/RequestModal'
import NewTrims from '../components/NewTrims'
import Discounts from '../components/Discounts'
import Banner from '../components/Banner'
import PhotoTabs from '../components/PhotoTabs'
import Slider from '../components/Slider'
import CarCardNew from '../components/CarCardNew'
import Trust from '../components/Trust'
import Reviews from '../components/Reviews'
import Blog from '../components/Blog'
import Seo from '../components/Seo'
import Equipment from '../components/Equipment'
import TradeInDark from '../components/TradeInDark'
import TechSpecs from '../components/TechSpecs'
import ExpressBanner from '../components/ExpressBanner'
import OfferBanner from '../components/OfferBanner'
import More from '../components/More'
import Sold from '../components/Sold'
import NotFound from './NotFound'
import cars from '../data/cars.json'
import benefits from '../data/benefits.json'
import { num, price } from '../utils'

const news = cars.filter((c) => c.type === 'new')
const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar auctor tellus, id volutpat dui dictum vitae. Sed ac mauris nisi. Maecenas quis sollicitudin dolor, eget molestie dolor. Vivamus sed magna euismod, iaculis eros vitae, vehicula justo. Ut id consequat risus, vitae accumsan ligula. Proin egestas odio sit amet laoreet vulputate. Suspendisse vitae vestibulum quam. Vivamus lectus justo, bibendum at laoreet vel, rhoncus nec sem. Phasellus at mollis magna, in bibendum massa. Praesent malesuada sit amet nibh ut vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus.'

const tabs = [
  ['stock', 'Автомобили в наличии'],
  ['features', 'Особенности модели'],
  ['gallery', 'Галерея'],
  ['specs', 'Характеристики'],
  ['offers', 'Спецпредложения'],
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function Top({ car, trim, store }) {
  const [color, setColor] = useState(Math.max(0, car.colors.findIndex((x) => x.name === 'Night Black')))
  const [open, setOpen] = useState(false)
  const c = car.colors[color]
  const p = trim ? trim.price : car.price
  const old = trim ? trim.oldPrice : car.oldPrice
  const crumbs = [{ title: 'Каталог авто', to: '/new/' + news[0].id }, { title: car.brand }, trim ? { title: car.name, to: '/new/' + car.id } : { title: car.name }]
  if (trim) crumbs.push({ title: car.name + ' ' + trim.name })
  const img = <CarImg car={car} src={c.image} hue={c.hue} tint={c.tint} className="h-full w-full" />

  return (
    <Hero
      crumbs={crumbs}
      side={
        <>
          <img src="/images/hero-city.jpg" alt="" className="absolute right-0 bottom-0 h-full w-[70%] object-cover mix-blend-multiply" />
          <div className="absolute right-[24%] bottom-[110px] h-[300px] w-[38%]">{img}</div>
        </>
      }
      sideClass="inset-0 hidden lg:block"
    >
      <div className="relative">
        {trim && (
          <div className="absolute -top-[60px] right-0 hidden lg:block">
            <CardActions id={car.id} store={store} />
          </div>
        )}
        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
          <h1 className="text-[34px] leading-tight font-bold md:text-[48px]">{trim ? car.name + ' ' + trim.name : car.name}</h1>
          <div className="lg:mt-[-30px] lg:w-[240px]">
            <Colors colors={car.colors} value={color} onChange={setColor} />
          </div>
        </div>
        <div className="relative mt-4 h-[200px] sm:h-[260px] lg:hidden">
          {img}
          {car.sold && <Sold />}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-6 lg:mt-[30px]">
          <div>
            <p className="text-[20px] text-muted line-through">{price(old)}</p>
            <p className="text-[34px] leading-none font-bold">от {price(p)}</p>
          </div>
          <button type="button" onClick={() => setOpen(true)} className="h-[48px] rounded-[4px] bg-red px-8 text-[16px] font-bold text-white hover:bg-red-dark">
            Выгода до {num(old - p)}₽
          </button>
          {trim && (
            <span className="lg:hidden">
              <CardActions id={car.id} store={store} />
            </span>
          )}
        </div>
        <ul className="mt-8 flex flex-col gap-2">
          {benefits.newHero.map((b) => (
            <li key={b.text} className="flex h-[52px] w-[220px] items-center gap-3 rounded-[6px] bg-white px-3 text-[15px] leading-tight font-medium">
              {b.icon === 'zero' ? <b className="text-[22px] font-bold text-red">0%</b> : <Icon name={b.icon} className="h-6 w-6 shrink-0 text-red" strokeWidth={2.5} />}
              {b.text}
            </li>
          ))}
        </ul>
      </div>
      {open && <RequestModal title="Получить выгоду" car={car.name + ': выгода до ' + num(old - p) + ' ₽'} onClose={() => setOpen(false)} />}
    </Hero>
  )
}

function ModelView({ car, store }) {
  const similar = news.filter((c) => c.id !== car.id)
  return (
    <>
      <Box className="mt-12 md:mt-[60px]">
        <div className="no-scrollbar flex overflow-x-auto border-b-2 border-line">
          {tabs.map(([id, t], i) => (
            <button key={id} type="button" onClick={() => scrollTo(id)} className={'-mb-[2px] shrink-0 border-b-2 px-6 py-4 text-[16px] md:flex-1 ' + (i === 0 ? 'border-red font-medium text-red' : 'border-transparent hover:text-red')}>
              {t}
            </button>
          ))}
        </div>
      </Box>
      <Box className="mt-14 scroll-mt-4 md:mt-[70px]" id="stock">
        <h2 className="mb-10 text-center text-[30px] font-bold md:text-[44px]">Автомобили {car.name} в наличии</h2>
        <NewTrims car={car} store={store} />
      </Box>
      <div id="offers" className="scroll-mt-4">
        <Discounts car={car} className="mt-10" />
      </div>
      <div id="features" className="scroll-mt-4">
        <Banner image="hero-city.jpg" className="mt-16 md:mt-[100px]">
          <span className="rounded-full bg-red px-3 py-1 text-[15px] font-bold text-white">Акция до 20.02.2021</span>
          <h2 className="mt-3 text-[34px] leading-[1.1] font-bold md:text-[60px]">
            Станьте владельцем
            <br />
            {car.name} уже сегодня
          </h2>
          <p className="mt-8 text-[22px] font-medium uppercase md:text-[30px]">Ваше персональное предложение</p>
          <CarImg car={car} className="mt-4 h-[180px] w-full lg:absolute lg:right-[-560px] lg:bottom-[-30px] lg:mt-0 lg:h-[320px] lg:w-[520px]" />
        </Banner>
      </div>
      <PhotoTabs id="gallery" />
      <Box className="mt-10 text-[16px] leading-[1.5] text-muted">
        <p>{lorem}</p>
      </Box>
      <div id="specs" className="scroll-mt-4">
        <Slider title="Похожие предложения" items={similar} per={[1, 2, 3]} render={(c) => <CarCardNew car={c} store={store} />} />
      </div>
      <Trust />
      <Reviews />
      <Blog />
      <Seo />
    </>
  )
}

function TrimView({ car, trim, store }) {
  const [more, setMore] = useState(false)
  const [count, setCount] = useState(3)
  const analogs = news.filter((c) => c.id !== car.id).sort((a, b) => Math.abs(a.price - trim.price) - Math.abs(b.price - trim.price))
  return (
    <>
      <Box className="mt-14 md:mt-[70px]">
        <h2 className="mb-10 text-center text-[30px] font-bold md:mb-[50px] md:text-[44px]">Что входит в комплектацию {trim.name.split(' ').slice(-2, -1)}</h2>
        <Equipment lines limit={more ? 99 : 6} />
        <More onClick={() => setMore(!more)} />
      </Box>
      <Discounts car={car} className="mt-10" />
      <TradeInDark className="mt-14 md:mt-[54px]" />
      <TechSpecs car={car} title={'Технические характеристики ' + car.name + ' ' + trim.name} />
      <Box className="mt-16 md:mt-[70px]">
        <h2 className="mb-8 text-center text-[30px] font-bold md:text-[44px]">Другие комплектации</h2>
        <NewTrims car={{ ...car, trims: car.trims.filter((t) => t.id !== trim.id) }} store={store} links />
      </Box>
      <ExpressBanner />
      <Box className="mt-14 md:mt-[90px]">
        <h2 className="mb-8 text-[30px] font-bold md:mb-[40px] md:text-[44px]">Аналоги за те же деньги</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-[22px]">
          {analogs.slice(0, count).map((c) => (
            <CarCardNew key={c.id} car={c} store={store} />
          ))}
        </div>
        {count < analogs.length && <More onClick={() => setCount(count + 3)} />}
      </Box>
      <Trust />
      <Reviews />
      <OfferBanner />
      <Seo />
    </>
  )
}

export default function NewCar({ store }) {
  const { id } = useParams()
  const [params] = useSearchParams()
  const car = news.find((c) => String(c.id) === id)
  if (!car) return <NotFound />
  const trim = car.trims.find((t) => String(t.id) === params.get('trim'))

  return (
    <div key={car.id + '-' + (trim ? trim.id : 0)}>
      <Top car={car} trim={trim} store={store} />
      {trim ? <TrimView car={car} trim={trim} store={store} /> : <ModelView car={car} store={store} />}
    </div>
  )
}
