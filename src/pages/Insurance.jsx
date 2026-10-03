import { useState } from 'react'
import Hero from '../components/Hero'
import Box from '../components/Box'
import Icon from '../components/Icon'
import Banks from '../components/Banks'
import RequestModal from '../components/RequestModal'
import data from '../data/insurance.json'

function Btn({ children, onClick, className = '' }) {
  return (
    <button type="button" onClick={onClick} className={'h-[64px] rounded-[4px] bg-red px-8 text-[16px] font-bold tracking-wide text-white uppercase hover:bg-red-dark ' + className}>
      {children}
    </button>
  )
}

export default function Insurance() {
  const [req, setReq] = useState(null)
  return (
    <>
      <Hero crumbs={[{ title: 'Спецпредложения', to: '/special/recycling' }, { title: 'Страховые полисы' }]} image="hero-insurance.jpg" light>
        <h1 className="max-w-[760px] text-[36px] leading-[1.15] font-bold md:text-[60px]">Страховые полисы без комиссий и надбавок</h1>
        <p className="mt-6 max-w-[460px] text-[16px] leading-snug font-bold md:text-[18px]">Расчет сразу в нескольких компаниях и официальное оформление страхового полиса</p>
        <ul className="mt-10 grid max-w-[620px] grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
          {data.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-[14px] leading-tight">
              <span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-red text-white">
                <Icon name="check" className="h-4 w-4" strokeWidth={3} />
              </span>
              <span className="max-w-[130px]">{f}</span>
            </li>
          ))}
        </ul>
      </Hero>

      <Box className="mt-10 md:mt-[46px]">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-[30px]">
          {data.products.map((p) => (
            <div key={p.title} className="flex flex-col gap-4 rounded-[30px] bg-soft p-6 sm:flex-row sm:items-center lg:h-[170px] lg:py-0 lg:pr-7 lg:pl-5">
              <div className="relative h-[130px] w-[190px] shrink-0">
                {p.kind === 'kasko' ? (
                  <span className="absolute top-2 left-2 h-[110px] w-[120px] rounded-t-full bg-red/90" />
                ) : (
                  <span className="absolute top-0 left-2 flex h-[130px] w-[100px] items-start justify-center rounded-b-[50px] bg-gradient-to-b from-[#e8e8e8] to-[#9a9a9a] pt-6">
                    <span className="rounded-[3px] bg-red px-1.5 text-[13px] font-bold text-white">ОСАГО</span>
                  </span>
                )}
                <img src={'/images/' + p.image} alt="" className="absolute right-0 bottom-0 w-[150px]" />
              </div>
              <div className="flex-1">
                <h3 className="text-[22px] font-medium">{p.title}</h3>
                <p className="mt-1 text-[16px] leading-snug text-muted">{p.text}</p>
              </div>
              <Btn onClick={() => setReq('Рассчитать ' + p.title)} className="h-[48px] shrink-0 px-8">
                Рассчитать
              </Btn>
            </div>
          ))}
        </div>
      </Box>

      <Box className="mt-14 md:mt-[100px]">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-[30px] leading-tight font-bold md:text-[44px]">Оформить ОСАГО легко и удобно</h2>
            <p className="mt-8 max-w-[540px] text-[16px] leading-[1.5] text-muted">
              Полис ОСАГО - это обязательное страхование автогражданской ответственности за причинение вреда жизни, здоровью и имуществу третьих лиц при эксплуатации автомобиля.
            </p>
            <h3 className="mt-8 text-[18px] font-medium">Преимущества электронного полиса</h3>
            <ul className="mt-6 flex flex-col gap-1">
              {data.osago.map((t) => (
                <li key={t} className="flex gap-4 text-[16px] leading-[1.5]">
                  <Icon name="arrow" className="mt-0.5 h-5 w-5 shrink-0 text-red" />
                  <span className="max-w-[610px]">{t}</span>
                </li>
              ))}
            </ul>
            <Btn onClick={() => setReq('Оформить ОСАГО')} className="mt-10 w-[270px]">
              Оформить полис
            </Btn>
          </div>
          <img src="/images/osago-policies.png" alt="Полисы ОСАГО" className="w-full max-w-[640px]" />
        </div>
      </Box>

      <Box className="mt-14 md:mt-[90px]">
        <h2 className="text-[30px] leading-tight font-bold md:text-[44px]">Выбрать свое КАСКО просто и выгодно</h2>
        <div className="mt-8 grid gap-6 md:mt-[50px] lg:grid-cols-3 lg:gap-[22px]">
          {data.kasko.map((k, i) => (
            <div key={k.title} className={'flex flex-col rounded-[30px] p-8 md:p-[35px] ' + ['bg-soft', 'bg-[#F4F4F4]', 'bg-gray'][i]}>
              <h3 className="text-[22px] font-medium">{k.title}</h3>
              <ul className="mt-8 mb-10 flex flex-col gap-5">
                {k.items.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] leading-tight text-muted">
                    <span className="mt-0.5 flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full bg-red text-white">
                      <Icon name="check" className="h-2 w-2" strokeWidth={4} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <Btn onClick={() => setReq('Оформить ' + k.title)} className="mt-auto w-[270px] max-w-full">
                Оформить полис
              </Btn>
            </div>
          ))}
        </div>
      </Box>

      <Banks title="Наши партнеры" items={data.partners} />
      {req && <RequestModal title={req} onClose={() => setReq(null)} />}
    </>
  )
}
