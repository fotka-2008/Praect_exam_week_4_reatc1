import { Fragment } from 'react'
import Box from './Box'
import Icon from './Icon'

export default function IconBenefits({ items, rows, title, wide = false, className = 'mt-14 md:mt-[100px]' }) {
  const w = wide ? 'lg:w-[330px]' : 'lg:w-[230px]'
  return (
    <Box className={className}>
      {title && <h2 className="mb-10 text-center text-[30px] font-bold md:mb-[60px] md:text-[44px]">{title}</h2>}
      <div className="flex flex-col gap-10 md:gap-[60px]">
        {rows.map((row, r) => (
          <div key={r} className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:flex lg:justify-center">
            {items.slice(row[0], row[1]).map((b, i) => (
              <Fragment key={b.text || b.title || b.label}>
                {i > 0 && <span className={'mt-[48px] hidden h-px shrink-0 bg-line lg:block ' + (wide ? 'mx-[28px] w-[94px]' : 'w-[50px]')} />}
                <div className={'flex flex-col items-center text-center ' + w}>
                  <Icon name={b.icon} className="h-[80px] w-[80px]" />
                  {b.value && <b className="mt-4 text-[18px] font-medium md:text-[20px]">{b.value}</b>}
                  {b.title && <b className="mt-4 text-[18px] font-medium md:text-[20px] lg:whitespace-nowrap">{b.title}</b>}
                  <p className={b.value || b.title ? 'mt-1 text-[15px] leading-snug text-muted' : 'mt-4 text-[16px] leading-snug font-medium md:text-[20px]'}>{b.label || b.text}</p>
                </div>
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </Box>
  )
}
