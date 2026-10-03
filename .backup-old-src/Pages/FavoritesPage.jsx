import { useState } from 'react'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import CarCardNew from '../components/CarCardNew'
import CarCardUsed from '../components/CarCardUsed'
import CarCardTaxi from '../components/CarCardTaxi'
import favorites from '../data/favorites.json'
import newCars from '../data/newCars.json'
import usedCars from '../data/usedCars.json'
import taxiCars from '../data/taxiCars.json'

const tabs = [
  { key: 'new', label: 'Новые авто', title: 'Новые авто', cars: newCars, Card: CarCardNew },
  { key: 'used', label: 'С пробегом', title: 'С пробегом', cars: usedCars, Card: CarCardUsed },
  { key: 'taxi', label: 'Такси', title: 'Такси', cars: taxiCars, Card: CarCardTaxi },
]

export default function FavoritesPage() {
  const [active, setActive] = useState('new')

  const tab = tabs.find((t) => t.key === active)
  const total = favorites.new.length + favorites.used.length + favorites.taxi.length
  const Card = tab.Card

  return (
    <>
      <PageTitle title="Избранное" crumbs={[{ label: 'Избранное' }]}>
        <div className="flex flex-1 flex-wrap items-center gap-3 lg:gap-4">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={
                'h-10 rounded-[10px] px-4 text-[16px] transition-colors lg:text-[17px] ' +
                (active === t.key ? 'bg-primary text-white' : 'bg-[#f0f0f0] hover:bg-[#e4e4e4]')
              }
            >
              {t.label} <b className={active === t.key ? 'text-white' : 'text-primary'}>{favorites[t.key].length}</b>
            </button>
          ))}
          <span className="w-full text-[16px] lg:mt-6 lg:ml-auto lg:w-auto">
            В избранном <b>{total} авто</b>
          </span>
        </div>
      </PageTitle>

      <Container className="mt-12 lg:mt-[70px]">
        <h2 className="text-[30px] font-bold lg:text-[44px]">{tab.title}</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
          {favorites[active].map((item) => {
            const car = tab.cars.find((c) => c.id === item.id)
            return <Card key={item.id} car={car} sold={item.sold} />
          })}
        </div>
      </Container>
      <div className="h-20 lg:h-[100px]" />
    </>
  )
}
