import Container from './Container'
import Slider from './Slider'
import trust from '../data/trust.json'
import { StarIcon } from './Icons'

function Stars({ rating, className = 'h-4 w-4' }) {
  return (
    <span className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <StarIcon key={n} className={className + (n <= Math.floor(rating) ? ' text-[#ffb800]' : ' text-[#dcdcdc]')} />
      ))}
    </span>
  )
}

export default function TrustSection() {
  return (
    <Container className="mt-20 lg:mt-[120px]">
      <Slider
        title="Нам доверяют"
        items={trust.sites}
        renderItem={(site) => (
          <div className="m-1 rounded-[10px] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.1)] lg:px-[22px] lg:py-6">
            <p className="text-[20px] font-bold">{site.site}</p>
            <p className="text-[18px] text-[#9a9a9a]">{trust.salon}</p>
            <div className="mt-6 flex items-center justify-between gap-2">
              <span className="text-[13px]">Рекомендуют {site.recommend}%</span>
              <span className="flex items-center gap-2">
                <Stars rating={site.rating} />
                <span className="rounded-[3px] bg-[#55bb6b] px-1.5 text-[18px] leading-[24px] text-white">{site.rating}</span>
              </span>
            </div>
          </div>
        )}
      />

      <div className="mt-6 grid gap-6 lg:mt-[50px] lg:grid-cols-2 lg:gap-[30px]">
        {trust.maps.map((map) => (
          <div key={map.name} className="flex flex-wrap items-center gap-6 rounded-[10px] bg-soft px-6 py-6 lg:flex-nowrap lg:px-[52px] lg:py-9">
            <div className="flex-1">
              <p className="text-[28px] leading-none font-medium lg:text-[34px]">{map.name}</p>
              <p className="mt-2 text-[18px] text-[#9a9a9a]">{trust.salon}</p>
            </div>
            <div className="text-[13px]">
              Рекомендуют {map.recommend}%
              <div className="mt-2">
                <Stars rating={map.rating} />
              </div>
            </div>
            <span className="rounded-[8px] bg-[#55bb6b] px-7 py-3 text-[40px] leading-none text-white lg:text-[44px]">{map.rating}</span>
          </div>
        ))}
      </div>
    </Container>
  )
}
