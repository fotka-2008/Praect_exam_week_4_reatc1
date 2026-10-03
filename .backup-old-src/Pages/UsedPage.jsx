import { useState } from 'react'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import CarCardUsed from '../components/CarCardUsed'
import Button from '../components/Button'
import Slider from '../components/Slider'
import SeoText from '../components/SeoText'
import { DoubleRangeSlider } from '../components/RangeSlider'
import { Select } from '../components/FormFields'
import usedCars from '../data/usedCars.json'
import brands from '../data/brands.json'
import blog from '../data/blog.json'

const MAX_PRICE = 5000000
const STEP = 50000

function shortPrice(value) {
  if (value === 0) return '0'
  if (value < 1000000) return value / 1000 + 'т'
  return String(value / 1000000).replace('.', ',') + 'м'
}

const seoBlocks = [
  {
    text: 'Покупка автомобиля с пробегом в ABC AUTO — это возможность сэкономить до 40% от стоимости нового авто и при этом получить проверенную машину с гарантией. Каждый автомобиль проходит диагностику по 120 пунктам, юридическую проверку и предпродажную подготовку.',
  },
  {
    subtitle: 'Как мы проверяем автомобили',
    text: 'Мастера техцентра проверяют двигатель, коробку передач, подвеску, тормозную систему и электронику. Юристы сверяют историю владения, проверяют автомобиль на залоги, ограничения и участие в ДТП. В продажу попадают только машины, прошедшие все этапы проверки.',
  },
  {
    subtitle: 'Кредит и Trade-in',
    text: 'Автомобиль с пробегом можно купить в кредит от 1,9% без первоначального взноса или оставить в зачёт свою старую машину по программе Trade-in. Оценка занимает около 10 минут, а сделку можно оформить за один визит в салон.',
  },
]

export default function UsedPage() {

  const [priceFrom, setPriceFrom] = useState(0)
  const [priceTo, setPriceTo] = useState(MAX_PRICE)
  const [body, setBody] = useState('')
  const [gearbox, setGearbox] = useState('')
  const [visible, setVisible] = useState(6)

  const filtered = usedCars.filter(
    (car) => car.price >= priceFrom && car.price <= priceTo && (!body || car.body === body) && (!gearbox || car.gearbox === gearbox),
  )

  const bodies = [...new Set(usedCars.map((car) => car.body))]
  const gearboxes = [...new Set(usedCars.map((car) => car.gearbox))]
  const years = [...new Set(usedCars.map((car) => String(car.year)))].sort().reverse()
  const models = [...new Set(usedCars.map((car) => car.name))]

  return (
    <>
      <PageTitle title="Авто с пробегом" crumbs={[{ label: 'Авто с пробегом' }]} />

      <Container className="mt-8 lg:mt-[37px]">
        <div className="grid gap-8 rounded-[20px] bg-soft p-5 lg:grid-cols-[1fr_490px] lg:gap-10 lg:rounded-[30px] lg:py-[30px] lg:pr-[27px] lg:pl-[28px]">

          <ul className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-y-[5px]">
            {brands.map((brand) => (
              <li key={brand}>
                <a href="#cars" className="flex items-center gap-3 text-[15px] hover:text-primary">

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-dashed border-[#bdbdbd] bg-[#e9e9e9] text-[11px] font-bold text-muted">
                    {brand.slice(0, 2)}
                  </span>
                  {brand}
                </a>
              </li>
            ))}
          </ul>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
            <h3 className="text-[22px] font-bold lg:text-[24px]">Быстрый подбор авто</h3>
            <div>
              <div className="mb-3 flex justify-between text-[16px]">
                <span>Цена</span>
                <b>
                  {shortPrice(priceFrom)} - {shortPrice(priceTo)}
                </b>
              </div>
              <DoubleRangeSlider
                min={0}
                max={MAX_PRICE}
                step={STEP}
                from={priceFrom}
                to={priceTo}
                onChange={(from, to) => {
                  setPriceFrom(from)
                  setPriceTo(to)
                }}
              />
              <div className="mt-3 flex justify-between text-[10px] text-muted">
                {[0, 1, 2, 3, 4, 5].map((n) => (
                  <span key={n}>{n === 0 ? '0' : n + 'м'}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 [&_select]:h-[44px] lg:[&_select]:h-[44px]">
              <Select placeholder="Модель" options={models} />
              <Select placeholder="Год выпуска" options={years} />
              <Select placeholder="Тип кузова" options={bodies} value={body} onChange={(e) => setBody(e.target.value)} />
              <Select placeholder="Коробка" options={gearboxes} value={gearbox} onChange={(e) => setGearbox(e.target.value)} />
            </div>
            <a
              href="#cars"
              className="mt-1 flex h-16 items-center justify-center rounded-[4px] bg-primary text-[16px] font-bold text-white uppercase hover:bg-primary-dark"
            >
              Показать {filtered.length}
            </a>
          </form>
        </div>

        <div id="cars" className="mt-9 grid scroll-mt-6 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
          {filtered.slice(0, visible).map((car) => (
            <CarCardUsed key={car.id} car={car} />
          ))}
        </div>
        {filtered.length === 0 && <p className="mt-8 text-center text-muted">Под эти условия машин нет — попробуйте изменить фильтр</p>}

        {visible < filtered.length && (
          <div className="mt-9 text-center">
            <Button onClick={() => setVisible(visible + 3)} className="h-16 w-full text-[16px] sm:w-[270px]">
              Показать еще
            </Button>
          </div>
        )}
      </Container>

      <Container className="mt-20 lg:mt-[75px]">
        <Slider
          title={
            <span className="flex items-center gap-6">
              Блог
              <a href="#" className="rounded-full bg-primary px-6 py-1.5 text-[16px] font-normal text-white">
                Все статьи
              </a>
            </span>
          }
          items={blog}
          renderItem={(post) => (
            <a href="#" className="group block">
              <img src={'/images/' + post.image} alt="" className="h-[200px] w-full rounded-[30px] object-cover" />
              <p className="mt-7 text-[14px] text-[#9a9a9a]">{post.date}</p>
              <p className="mt-2 text-[16px] leading-[20px] font-bold group-hover:text-primary">{post.title}</p>
            </a>
          )}
        />
      </Container>

      <SeoText title="Автомобили с пробегом в ABC AUTO" blocks={seoBlocks} />
      <div className="h-20 lg:h-[100px]" />
    </>
  )
}
