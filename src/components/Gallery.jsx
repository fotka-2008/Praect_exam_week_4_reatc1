import { useState } from 'react'
import Icon from './Icon'
import CarImg from './CarImg'

function Slide({ car, src, big }) {
  if (!src) {
    return (
      <span className="relative block h-full w-full bg-gradient-to-b from-[#f5f5f5] to-[#d9d9d9]">
        <span className="absolute inset-x-0 bottom-0 h-[35%] bg-[#bdbdbd]/40" />
        <CarImg car={car} className={'absolute ' + (big ? 'inset-x-[8%] top-[15%] bottom-[10%]' : 'inset-1')} />
      </span>
    )
  }
  return <img src={'/images/' + src} alt={car.name} className="h-full w-full object-cover" />
}

export default function Gallery({ car, slides, actions }) {
  const [i, setI] = useState(0)
  const [touch, setTouch] = useState(null)
  const go = (d) => setI((i + d + slides.length) % slides.length)

  return (
    <div className="min-w-0">
      <div
        className="relative h-[260px] overflow-hidden rounded-[20px] sm:h-[400px] lg:h-[537px]"
        onTouchStart={(e) => setTouch(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touch === null) return
          const dx = e.changedTouches[0].clientX - touch
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1)
          setTouch(null)
        }}
      >
        <Slide car={car} src={slides[i]} big />
        <div className="absolute top-6 right-6 z-50">{actions}</div>
        <button type="button" onClick={() => go(-1)} aria-label="Предыдущее фото" className="absolute top-1/2 left-6 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-[6px] bg-dark text-white hover:bg-red">
          <Icon name="left" className="h-5 w-5" />
        </button>
        <button type="button" onClick={() => go(1)} aria-label="Следующее фото" className="absolute top-1/2 right-6 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-[6px] bg-dark text-white hover:bg-red">
          <Icon name="right" className="h-5 w-5" />
        </button>
      </div>
      <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto">
        {slides.map((s, k) => (
          <button
            key={k}
            type="button"
            onClick={() => setI(k)}
            aria-label={'Фото ' + (k + 1)}
            className={'h-[70px] w-[105px] shrink-0 overflow-hidden rounded-[6px] transition ' + (k === i ? 'ring-2 ring-red' : 'opacity-60 hover:opacity-100')}
          >
            <Slide car={car} src={s} />
          </button>
        ))}
      </div>
    </div>
  )
}
