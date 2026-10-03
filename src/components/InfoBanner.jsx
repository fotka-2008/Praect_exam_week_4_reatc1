import Icon from './Icon'
import benefits from '../data/benefits.json'

function Check({ big }) {
  return (
    <span className={'flex shrink-0 items-center justify-center rounded-full bg-red text-white ' + (big ? 'h-[30px] w-[30px]' : 'h-[30px] w-[30px]')}>
      <Icon name="check" className="h-4 w-4" strokeWidth={3} />
    </span>
  )
}

export default function InfoBanner({ kind, title }) {
  const subsidy = kind === 'subsidy'
  const s = benefits.subsidy
  return (
    <section className="mx-2 mt-16 md:mx-[25px] md:mt-[80px]">
      <div className="relative overflow-hidden rounded-[24px] bg-[#F2F2F2] md:rounded-[30px]">
        <img src={subsidy ? '/images/salon.jpg' : '/images/hero-city.jpg'} alt="" className={'absolute inset-0 h-full w-full object-cover ' + (subsidy ? 'scale-110 opacity-40 blur-[6px]' : 'opacity-60')} />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent" />
        {subsidy ? (
          <img src="/images/people-couple.png" alt="" className="absolute right-[6%] bottom-0 hidden h-[95%] lg:block" />
        ) : (
          <>
            <img src="/images/car-superb-silver.png" alt="" className="absolute right-[24%] bottom-[24%] hidden w-[32%] max-w-[480px] lg:block" />
            <img src="/images/car-hyundai-creta.png" alt="" className="absolute right-[8%] bottom-[10%] hidden w-[34%] max-w-[600px] lg:block" />
          </>
        )}
        <div className="relative mx-auto max-w-[1440px] px-5 py-10 md:py-[70px]">
          <div className="max-w-[760px]">
            <h2 className="max-w-[560px] text-[34px] leading-[1.1] font-bold md:text-[60px]">{title}</h2>
            {subsidy ? (
              <>
                <p className="mt-6 text-[15px] leading-snug md:max-w-[740px]">{s.text}</p>
                <div className="mt-10 grid gap-8 sm:grid-cols-2">
                  {[
                    ['Основные условия программ', s.main],
                    ['Общие требования для участия', s.rules],
                  ].map(([t, list]) => (
                    <div key={t}>
                      <h3 className="text-[20px] font-medium">{t}</h3>
                      <ul className="mt-6 flex flex-col gap-6">
                        {list.map((x) => (
                          <li key={x} className="flex items-start gap-4 text-[15px] leading-snug">
                            <Check />
                            {x}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <ul className="mt-8 flex flex-col gap-8 md:max-w-[560px]">
                {benefits.conditions.map((c) => (
                  <li key={c.title}>
                    <h3 className="flex items-center gap-4 text-[24px] font-medium md:text-[30px]">
                      <Check big />
                      {c.title}
                    </h3>
                    <p className="mt-2 pl-[46px] text-[15px] leading-snug text-muted">{c.text}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {!subsidy && <img src="/images/car-hyundai-creta.png" alt="" className="mt-6 w-full lg:hidden" />}
        </div>
      </div>
    </section>
  )
}
