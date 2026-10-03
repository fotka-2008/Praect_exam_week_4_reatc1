import { useState } from 'react'
import Box from './Box'
import Icon from './Icon'
import { num } from '../utils'

function Dim({ src, w, label, side }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2">
        <img src={'/images/' + src} alt="" style={{ width: w }} className="max-w-full" />
        {side && (
          <span className="flex h-[112px] items-center border-l border-line pl-3 text-[15px]">{side}</span>
        )}
      </div>
      <span className="mt-2 block h-4 w-full border-x border-b border-line" />
      <span className="mt-3 text-[15px]">{label}</span>
    </div>
  )
}

export default function TechSpecs({ car, title, id }) {
  const [open, setOpen] = useState([0])
  const d = car.dims
  const all = open.length === car.specs.length

  function toggle(i) {
    setOpen(open.includes(i) ? open.filter((x) => x !== i) : [...open, i])
  }

  return (
    <Box className="mt-16 md:mt-[70px]" id={id}>
      <h2 className="text-[28px] leading-tight font-bold md:text-[44px]">{title}</h2>
      <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_335px] lg:items-start">
        <div className="flex flex-wrap items-end justify-around gap-6 pt-10">
          <Dim src="dim-side.png" w={354} label={num(d.length)} />
          <Dim src="dim-back.png" w={159} label={num(d.width)} />
          <Dim src="dim-front.png" w={155} label={num(d.width)} side={num(d.height)} />
        </div>
        <div className="rounded-[10px] border border-line px-9 py-8 text-[15px]">
          {[
            ['Длина кузова, мм', d.length],
            ['Ширина кузова, мм', d.width],
            ['Высота кузова, мм', d.height],
            ['Колесная база, мм', d.base],
            ['Дорожный просвет, мм', d.clearance],
          ].map(([k, v]) => (
            <p key={k} className="flex justify-between py-1.5">
              {k}
              <b className="font-bold">{v}</b>
            </p>
          ))}
        </div>
      </div>
      <div className="mt-10">
        {car.specs.map(([group, rows], i) => (
          <div key={group} className="border-b border-line">
            <button type="button" onClick={() => toggle(i)} className="flex w-full items-center justify-between py-4 text-left text-[20px] font-medium">
              {group}
              <Icon name={open.includes(i) ? 'up' : 'down'} className="h-6 w-6" />
            </button>
            {open.includes(i) && (
              <div className="border-t border-line pt-3 pb-4">
                {rows.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-2 gap-4 py-2.5 text-[15px] md:grid-cols-[410px_1fr]">
                    <b className="font-bold">{k}</b>
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={() => setOpen(all ? [0] : car.specs.map((_, i) => i))}
          className="h-[64px] w-full max-w-[270px] rounded-[4px] bg-red text-[16px] font-bold text-white uppercase hover:bg-red-dark"
        >
          {all ? 'Свернуть' : 'Показать еще'}
        </button>
      </div>
    </Box>
  )
}
