import { useState } from 'react'
import Box from './Box'
import Icon from './Icon'

const tabs = {
  Экстерьер: ['photo-camry-dark.jpg', 'photo-camry-road.jpg', 'photo-sedan-city.jpg', 'photo-corolla-road.jpg', 'photo-land-cruiser.jpg', 'photo-headlight.jpg'],
  Интерьер: ['photo-interior.jpg', 'photo-toyota-logo.jpg', 'salon.jpg', 'photo-camry-showroom.jpg'],
}

export default function PhotoTabs({ id }) {
  const [tab, setTab] = useState('Экстерьер')
  const [i, setI] = useState(0)
  const list = tabs[tab]
  const go = (d) => setI((i + d + list.length) % list.length)

  return (
    <Box className="mt-16 md:mt-[100px]" id={id}>
      <div className="flex items-center gap-6 md:gap-[34px]">
        {Object.keys(tabs).map((t, k) => (
          <div key={t} className="flex items-center gap-6 md:gap-[34px]">
            {k > 0 && <span className="h-8 w-px bg-line" />}
            <button
              type="button"
              onClick={() => {
                setTab(t)
                setI(0)
              }}
              className={'border-b-4 pb-4 text-[28px] font-medium md:text-[40px] ' + (tab === t ? 'border-red' : 'border-transparent text-line hover:text-muted')}
            >
              {t}
            </button>
          </div>
        ))}
      </div>
      <div className="mt-10 grid gap-5 md:mt-[60px] lg:grid-cols-[1fr_295px]">
        <div className="relative h-[260px] overflow-hidden rounded-[20px] sm:h-[400px] lg:h-[542px]">
          <img src={'/images/' + list[i]} alt={tab} className="h-full w-full object-cover" />
          <button type="button" onClick={() => go(-1)} aria-label="Предыдущее фото" className="absolute top-1/2 left-6 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-[6px] bg-dark text-white hover:bg-red">
            <Icon name="left" className="h-5 w-5" />
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Следующее фото" className="absolute top-1/2 right-6 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-[6px] bg-dark text-white hover:bg-red">
            <Icon name="right" className="h-5 w-5" />
          </button>
        </div>
        <div className="no-scrollbar flex gap-3 overflow-auto lg:h-[542px] lg:flex-col">
          {list.map((p, k) => (
            <button
              key={p + k}
              type="button"
              onClick={() => setI(k)}
              className={'h-[90px] w-[140px] shrink-0 overflow-hidden rounded-[20px] lg:h-[156px] lg:w-full ' + (k === i ? 'ring-2 ring-red' : 'opacity-70 hover:opacity-100')}
            >
              <img src={'/images/' + p} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </Box>
  )
}
