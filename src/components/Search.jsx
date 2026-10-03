import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import CarImg from './CarImg'
import cars from '../data/cars.json'
import { carLink, price } from '../utils'

const types = { new: 'Новый', used: 'С пробегом', taxi: 'Такси' }

export default function Search({ onClose }) {
  const [q, setQ] = useState('')
  const text = q.trim().toLowerCase()
  const list = text
    ? cars.filter((c) => (c.name + ' ' + c.trim + ' ' + c.brand).toLowerCase().includes(text)).slice(0, 8)
    : []

  return (
    <div className="absolute top-full right-0 left-0 z-50 border-t border-line bg-white shadow-card">
      <div className="mx-auto max-w-[1440px] px-4 py-4 md:px-5">
        <div className="flex items-center gap-3 rounded-md bg-gray px-4">
          <Icon name="search" className="h-5 w-5 text-muted" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Поиск по автомобилям: марка, модель..."
            className="h-[50px] flex-1 bg-transparent text-[16px] outline-none"
          />
          <button type="button" onClick={onClose} aria-label="Закрыть поиск">
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>
        {text && (
          <div className="mt-3 max-h-[60vh] overflow-y-auto">
            {list.length === 0 && <p className="py-3 text-muted">Ничего не найдено</p>}
            {list.map((c) => (
              <Link key={c.id} to={carLink(c)} className="flex items-center gap-4 rounded-md px-2 py-2 hover:bg-soft">
                <CarImg car={c} className="h-12 w-20 object-contain" />
                <span className="flex-1">
                  <b className="block font-medium">{c.name}</b>
                  <span className="text-[13px] text-muted">{c.trim} · {types[c.type]}</span>
                </span>
                <span className="font-medium whitespace-nowrap">{price(c.price)}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
