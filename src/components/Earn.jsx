import Box from './Box'
import Icon from './Icon'
import benefits from '../data/benefits.json'

function List({ items, plus }) {
  return (
    <ul className="mt-5 flex flex-col gap-3 text-[16px] text-white/50">
      {items.map((t) => (
        <li key={t} className="flex gap-3">
          <span className={'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white ' + (plus ? 'bg-green' : 'bg-red')}>
            <Icon name={plus ? 'plus' : 'minus'} className="h-3 w-3" strokeWidth={3.5} />
          </span>
          <span className="max-w-[300px]">{t}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Earn({ className = 'mt-16 md:mt-[94px]' }) {
  return (
    <Box className={className}>
      <div className="relative rounded-[30px] bg-dark px-6 pt-8 pb-[230px] md:px-14 md:pt-14 lg:pb-14 lg:pl-14">
        <h2 className="text-[32px] leading-tight font-bold text-white md:text-[44px]">
          Сколько можно
          <br />
          заработать на такси?
        </h2>
        <img
          src="/images/car-octavia-taxi-new.png"
          alt=""
          className="absolute bottom-[-40px] left-0 w-[340px] max-w-[95%] md:w-[480px] lg:-bottom-[70px] lg:-left-[130px] lg:w-[730px] lg:max-w-none"
        />
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:absolute lg:top-[60px] lg:right-[60px] lg:mt-0 lg:w-[57%] lg:gap-6">
          <div>
            <span className="rounded-full bg-green px-2 py-0.5 text-[11px] font-medium text-white uppercase">Преимущества</span>
            <h3 className="mt-1 text-[30px] font-medium text-white">Свое такси</h3>
            <List items={benefits.earn.own} plus />
          </div>
          <div>
            <span className="rounded-full bg-red px-2 py-0.5 text-[11px] font-medium text-white uppercase">Недостатки</span>
            <h3 className="mt-1 text-[30px] font-medium text-white">Аренда такси</h3>
            <List items={benefits.earn.rent} />
          </div>
        </div>
        <div className="hidden lg:block lg:h-[220px]" />
      </div>
    </Box>
  )
}
