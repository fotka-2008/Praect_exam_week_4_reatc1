import Box from './Box'
import benefits from '../data/benefits.json'

export default function CreditCards({ kind, title }) {
  const trade = kind === 'tradein'
  const list = trade ? benefits.tradeinCards : benefits.creditCards
  return (
    <Box className="mt-14 md:mt-[40px]">
      <h2 className="mb-8 text-[26px] font-medium md:mb-[50px] md:text-[30px]">{title}</h2>
      <div className={'grid gap-5 sm:grid-cols-2 ' + (trade ? 'lg:grid-cols-3 lg:gap-x-[22px] lg:gap-y-[32px]' : 'lg:grid-cols-4 lg:gap-x-[22px] lg:gap-y-[30px]')}>
        {list.map((c) => (
          <div key={c.text} className="flex h-[135px] items-end overflow-hidden rounded-[10px] bg-soft">
            <div className="flex h-full w-[130px] shrink-0 items-end justify-center">
              {c.image ? (
                <img src={'/images/' + c.image} alt="" className={trade && c.image === 'adv-papers.png' ? 'w-[130px]' : 'max-h-[135px]'} />
              ) : (
                <b className="self-center text-[48px] font-bold tracking-tight text-red">{c.big}</b>
              )}
            </div>
            <p className="self-center pr-4 text-[16px] leading-[1.4] text-muted">
              {c.title && <b className="block font-medium text-dark/80">{c.title}</b>}
              {c.text}
            </p>
          </div>
        ))}
      </div>
    </Box>
  )
}
