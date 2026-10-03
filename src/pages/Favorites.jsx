import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageTitle from '../components/PageTitle'
import Box from '../components/Box'
import CarCardNew from '../components/CarCardNew'
import CarCardUsed from '../components/CarCardUsed'
import CarCardTaxi from '../components/CarCardTaxi'
import cars from '../data/cars.json'

const tabs = [
  ['new', 'Новые авто'],
  ['used', 'С пробегом'],
  ['taxi', 'Такси'],
]

export default function Favorites({ store }) {
  const list = cars.filter((c) => store.favs.includes(c.id))
  const first = tabs.find(([t]) => list.some((c) => c.type === t))
  const [tab, setTab] = useState(first ? first[0] : 'new')
  const shown = list.filter((c) => c.type === tab)
  const title = tabs.find(([t]) => t === tab)[1]

  return (
    <>
      <PageTitle title="Избранное">
        <div className="flex flex-wrap gap-2.5">
          {tabs.map(([t, name]) => {
            const n = list.filter((c) => c.type === t).length
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={'h-[36px] rounded-[6px] px-3 text-[16px] transition ' + (tab === t ? 'bg-red text-white' : 'bg-gray hover:bg-line')}
              >
                {name} <b className={tab === t ? 'text-white' : 'text-red'}>{n}</b>
              </button>
            )
          })}
        </div>
        <p className="text-[16px] lg:ml-auto">
          В избранном <b>{list.length} авто</b>
        </p>
      </PageTitle>

      <Box className="mt-10 md:mt-[60px]">
        {list.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-[24px] font-medium">В избранном пока нет автомобилей</p>
            <p className="mt-3 text-muted">Нажмите на сердечко на карточке автомобиля, чтобы добавить его сюда</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/taxi" className="flex h-[50px] items-center rounded-[4px] bg-red px-6 font-bold text-white uppercase">Такси в кредит</Link>
              <Link to="/used" className="flex h-[50px] items-center rounded-[4px] bg-gray px-6 font-bold uppercase">Авто с пробегом</Link>
            </div>
          </div>
        ) : (
          <>
            <h2 className="mb-6 text-[30px] font-bold md:text-[44px]">{title}</h2>
            {shown.length === 0 && <p className="py-10 text-[18px] text-muted">В этом разделе избранного пока нет автомобилей</p>}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-[22px]">
              {shown.map((c) =>
                c.type === 'new' ? (
                  <CarCardNew key={c.id} car={c} store={store} />
                ) : c.type === 'used' ? (
                  <CarCardUsed key={c.id} car={c} store={store} />
                ) : (
                  <CarCardTaxi key={c.id} car={c} store={store} />
                ),
              )}
            </div>
          </>
        )}
      </Box>
    </>
  )
}
