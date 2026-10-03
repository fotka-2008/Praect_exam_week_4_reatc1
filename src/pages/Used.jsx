import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageTitle from '../components/PageTitle'
import Box from '../components/Box'
import QuickFilter from '../components/QuickFilter'
import CarCardUsed from '../components/CarCardUsed'
import More from '../components/More'
import Blog from '../components/Blog'
import Seo from '../components/Seo'
import cars from '../data/cars.json'
import { match } from '../utils'

const used = cars.filter((c) => c.type === 'used')
const empty = { brand: '', model: '', year: '', body: '', gearbox: '', from: 0, to: 9 }

export default function Used({ store }) {
  const [params] = useSearchParams()
  const brand = params.get('brand') || ''
  const start = brand ? { ...empty, brand } : { ...empty, to: 1 }
  const [filter, setFilter] = useState(start)
  const [applied, setApplied] = useState(start.brand ? start : null)
  const [count, setCount] = useState(6)
  const [brandParam, setBrandParam] = useState(start.brand)

  if (brandParam !== start.brand) {
    setBrandParam(start.brand)
    setFilter(start)
    setApplied(start.brand ? start : null)
    setCount(6)
  }

  const list = applied ? used.filter((c) => match(c, applied)) : used

  function show() {
    setApplied(filter)
    setCount(6)
    document.getElementById('used-list')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <PageTitle title="Авто с пробегом" />
      <Box className="mt-8 md:mt-[38px]">
        <QuickFilter cars={used} filter={filter} onChange={setFilter} onShow={show} />
      </Box>
      <Box className="mt-8 scroll-mt-4" id="used-list">
        {applied && (
          <div className="mb-5 flex flex-wrap items-center gap-4 text-[15px]">
            <span>
              Найдено: <b>{list.length}</b>
            </span>
            <button
              type="button"
              onClick={() => {
                setFilter(empty)
                setApplied(null)
                setCount(6)
              }}
              className="text-red underline"
            >
              Сбросить фильтр
            </button>
          </div>
        )}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
          {list.slice(0, count).map((c) => (
            <CarCardUsed key={c.id} car={c} store={store} />
          ))}
        </div>
        {list.length === 0 && <p className="py-10 text-center text-[18px] text-muted">По выбранным параметрам автомобилей нет</p>}
        {count < list.length && <More onClick={() => setCount(count + 3)} />}
      </Box>
      <Blog />
      <Seo />
    </>
  )
}
