import { useEffect, useState } from 'react'
import Box from './Box'
import Arrows from './Arrows'

function perView(width, per) {
  if (width >= 1024) return per[2]
  if (width >= 640) return per[1]
  return per[0]
}

export default function Slider({ title, extra, items, render, per = [1, 2, 4], className = 'mt-16 md:mt-[100px]' }) {
  const [width, setWidth] = useState(window.innerWidth)
  const [start, setStart] = useState(0)
  const [touch, setTouch] = useState(null)

  useEffect(() => {
    function onResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const view = perView(width, per)
  const max = Math.max(0, items.length - view)
  const pos = Math.min(start, max)

  function go(step) {
    setStart(Math.max(0, Math.min(max, pos + step)))
  }

  return (
    <Box className={className}>
      <div className="mb-6 flex items-center justify-between gap-4 md:mb-10">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <h2 className="text-[30px] leading-tight font-bold md:text-[44px]">{title}</h2>
          {extra}
        </div>
        {max > 0 && <Arrows onPrev={() => go(-1)} onNext={() => go(1)} prev={pos > 0} next={pos < max} />}
      </div>
      <div
        className="-mx-[11px] overflow-hidden"
        onTouchStart={(e) => setTouch(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touch === null) return
          const dx = e.changedTouches[0].clientX - touch
          if (dx < -40) go(1)
          if (dx > 40) go(-1)
          setTouch(null)
        }}
      >
        <div className="flex py-4">
          {items.map((item, i) => (
            <div
              key={item.id || i}
              className="shrink-0 px-[11px] transition-transform duration-500"
              style={{ width: 100 / view + '%', transform: 'translateX(' + -pos * 100 + '%)' }}
            >
              {render(item)}
            </div>
          ))}
        </div>
      </div>
    </Box>
  )
}
