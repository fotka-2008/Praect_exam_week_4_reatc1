import Select from './Select'
import DualRange from './DualRange'
import brands from '../data/brands.json'
import { match, prices } from '../utils'

const marks = ['0', '500т', '800т', '1,1м', '1,4м', '1,7м', '2м', '2,3м', '2,7м', '3м']

function uniq(list) {
  return [...new Set(list)].sort()
}

export default function QuickFilter({ cars, filter, onChange, onShow }) {
  const f = filter
  const set = (patch) => onChange({ ...f, ...patch })
  const found = cars.filter((c) => match(c, f)).length
  const pool = f.brand ? cars.filter((c) => c.brand === f.brand) : cars

  return (
    <div className="grid gap-8 rounded-[20px] bg-soft p-5 md:p-8 lg:grid-cols-[1fr_368px] lg:gap-10 lg:px-7 lg:py-8">
      <div className="no-scrollbar grid grid-cols-2 gap-x-3 gap-y-1 sm:grid-cols-3 md:grid-cols-5">
        {brands.map((b) => {
          const has = cars.some((c) => c.brand === b)
          const active = f.brand === b
          return (
            <button
              key={b}
              type="button"
              onClick={() => set({ brand: active ? '' : b, model: '' })}
              className={'flex h-[41px] items-center gap-3 rounded-md px-1 text-left text-[15px] transition ' + (active ? 'bg-white font-medium text-red shadow-soft' : has ? 'hover:text-red' : 'text-dark/50 hover:text-red')}
            >
              <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-line bg-white text-[11px] font-bold text-muted">
                {b.slice(0, 2).toUpperCase()}
              </span>
              {b}
            </button>
          )
        })}
      </div>
      <div>
        <h3 className="text-[24px] font-bold">Быстрый подбор авто</h3>
        <div className="mt-4 flex justify-between text-[16px]">
          <span>Цена</span>
          <b className="font-medium">
            {marks[f.from]} - {marks[f.to]}
          </b>
        </div>
        <div className="mt-2">
          <DualRange count={prices.length} from={f.from} to={f.to} marks={marks} onChange={(from, to) => set({ from, to })} />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <Select value={f.model} onChange={(v) => set({ model: v })} options={uniq(pool.map((c) => c.model))} placeholder="Модель" className="border border-line bg-white md:!h-[50px]" />
          <Select value={f.year} onChange={(v) => set({ year: v })} options={uniq(pool.map((c) => c.year)).reverse()} placeholder="Год выпуска" className="border border-line bg-white md:!h-[50px]" />
          <Select value={f.body} onChange={(v) => set({ body: v })} options={uniq(pool.map((c) => c.body))} placeholder="Тип кузова" className="border border-line bg-white md:!h-[50px]" />
          <Select value={f.gearbox} onChange={(v) => set({ gearbox: v })} options={uniq(pool.map((c) => c.gearbox))} placeholder="Коробка" className="border border-line bg-white md:!h-[50px]" />
        </div>
        <button type="button" onClick={onShow} className="mt-4 h-[64px] w-full rounded-[4px] bg-red text-[16px] font-bold text-white uppercase hover:bg-red-dark">
          Показать {found}
        </button>
      </div>
    </div>
  )
}
