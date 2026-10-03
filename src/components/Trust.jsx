import Box from './Box'
import Slider from './Slider'
import Stars from './Stars'
import trust from '../data/trust.json'

function MapLogo({ name }) {
  if (name.startsWith('Яндекс')) {
    return (
      <span className="flex items-center gap-1 text-[30px] leading-none md:text-[36px]">
        <span className="text-red">●</span>
        <span className="font-medium text-red">Я</span>
        <span>ндекс Карты</span>
      </span>
    )
  }
  return (
    <span className="flex items-center gap-1 text-[30px] leading-none text-dark/70 md:text-[36px]">
      <span className="text-[#34A853]">●</span>
      Google Maps
    </span>
  )
}

export default function Trust({ className }) {
  return (
    <>
      <Slider
        title="Нам доверяют"
        items={trust.sites}
        per={[1, 2, 4]}
        className={className}
        render={(s) => (
          <div className="rounded-[10px] bg-white px-5 py-6 shadow-soft">
            <h3 className="text-[20px] leading-tight font-bold">{s.site}</h3>
            <p className="text-[18px] text-muted/70">{s.name}</p>
            <div className="mt-6 flex items-center justify-between gap-2">
              <span className="text-[13px]">Рекомендуют {s.recommend}%</span>
              <span className="flex items-center gap-2">
                <Stars value={s.rating} />
                <span className="rounded-[3px] bg-rate px-1.5 text-[18px] text-white">{s.rating}</span>
              </span>
            </div>
          </div>
        )}
      />
      <Box className="mt-6 grid gap-6 md:grid-cols-2 md:gap-[30px]">
        {trust.maps.map((m) => (
          <div key={m.id} className="flex flex-wrap items-center justify-between gap-4 rounded-[10px] bg-soft px-6 py-6 md:px-[50px] md:py-9">
            <div>
              <MapLogo name={m.name} />
              <p className="mt-1 text-[18px] text-muted/70">{m.place}</p>
            </div>
            <div className="text-[13px]">
              Рекомендуют {m.recommend}%
              <Stars value={m.rating} className="mt-1 block text-[16px]" />
            </div>
            <span className="flex h-[72px] w-[122px] items-center justify-center rounded-[6px] bg-rate text-[40px] text-white">{m.rating}</span>
          </div>
        ))}
      </Box>
    </>
  )
}
