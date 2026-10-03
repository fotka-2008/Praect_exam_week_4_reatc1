import { useState } from 'react'
import SectionTitle, { SliderArrows } from './SectionTitle'

export default function Slider({ title, items, renderItem, perView = 4 }) {
  const [start, setStart] = useState(0)
  const count = items.length

  const visible = []
  for (let i = 0; i < Math.min(perView, count); i++) {
    visible.push((start + i) % count)
  }

  return (
    <section>
      <SectionTitle title={title}>
        <SliderArrows
          className="hidden lg:flex"
          onPrev={() => setStart((start - 1 + count) % count)}
          onNext={() => setStart((start + 1) % count)}
        />
      </SectionTitle>

      <div className="hidden gap-[30px] lg:grid" style={{ gridTemplateColumns: `repeat(${perView}, minmax(0, 1fr))` }}>
        {visible.map((index) => (
          <div key={index}>{renderItem(items[index])}</div>
        ))}
      </div>

      <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] lg:hidden">
        {items.map((item, index) => (
          <div key={index} className="w-[80%] shrink-0 snap-start sm:w-[45%]">
            {renderItem(item)}
          </div>
        ))}
      </div>
    </section>
  )
}
