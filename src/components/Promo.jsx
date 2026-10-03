import { Link } from 'react-router-dom'
import Box from './Box'
import Icon from './Icon'
import benefits from '../data/benefits.json'

function Badge({ icon }) {
  if (icon === 'ВТБ') return <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0A2973] text-[9px] font-bold text-white">ВТБ</span>
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red text-white">
      <Icon name={icon === 'tradein' ? 'refresh' : 'percent'} className="h-4 w-4" strokeWidth={2.5} />
    </span>
  )
}

export function PromoCards({ white = false }) {
  return (
    <div className="grid gap-5 md:grid-cols-3 md:gap-[22px]">
      {benefits.usedPromo.map((p) => (
        <div key={p.title} className={'relative flex h-[180px] overflow-hidden rounded-[30px] lg:h-[185px] ' + (white ? 'bg-white' : 'bg-soft')}>
          <img src={'/images/' + p.image} alt="" className="mt-4 h-[200px] w-[38%] shrink-0 object-contain object-bottom" />
          <div className="flex flex-col py-6 pr-4 pl-2">
            <h3 className="flex items-start gap-2 text-[20px] leading-tight font-medium md:text-[22px]">
              <Badge icon={p.icon} />
              <span>{p.title}</span>
            </h3>
            <p className="mt-3 max-w-[160px] text-[12px] text-muted">{p.text}</p>
            <Link to={p.to} className={'mt-auto inline-flex h-[40px] w-fit items-center rounded-full px-5 text-[13px] font-bold ' + (p.blue ? 'bg-[#D5ECFA]' : 'bg-line')}>
              {p.button}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Promo() {
  return (
    <Box className="mt-12 md:mt-[60px]">
      <PromoCards />
    </Box>
  )
}
