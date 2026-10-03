import { useParams } from 'react-router-dom'
import Hero from '../components/Hero'
import Icon from '../components/Icon'
import IconBenefits from '../components/IconBenefits'
import CreditCalc from '../components/CreditCalc'
import CreditCards from '../components/CreditCards'
import Purchase from '../components/Purchase'
import InfoBanner from '../components/InfoBanner'
import Banks from '../components/Banks'
import Competitor from '../components/Competitor'
import Trust from '../components/Trust'
import Reviews from '../components/Reviews'
import NotFound from './NotFound'
import programs from '../data/creditPrograms.json'
import benefits from '../data/benefits.json'

export default function Credit(props) {
  const params = useParams()
  const slug = props.slug || params.slug
  const p = programs[slug]
  if (!p) return <NotFound />

  return (
    <div key={slug}>
      <Hero crumbs={[{ title: p.crumb, to: p.crumb === 'Спецпредложения' ? '/special/recycling' : '/credit/express' }, { title: p.title }]} image={p.image} light>
        <div className="relative max-w-[640px]">
          <h1 className="text-[36px] leading-tight font-bold md:text-[60px] lg:whitespace-nowrap">{p.title}</h1>
          <p className="mt-3 max-w-[600px] text-[16px] leading-snug font-bold whitespace-pre-line md:text-[20px] md:leading-[1.2]">{p.text}</p>
          <div className={'inline-flex items-center gap-4 rounded-full bg-red py-2 pr-8 pl-6 md:h-[100px] md:gap-4 md:pr-6 md:pl-7 ' + (p.minus || p.features.length ? 'mt-8 md:mt-[36px]' : 'mt-14 md:mt-[70px]')}>
            <span className="text-[44px] leading-none font-bold md:text-[70px]">{p.pill[0]}</span>
            <span className="max-w-[140px] text-[15px] leading-tight font-bold md:text-[20px]">{p.pill[1]}</span>
          </div>
          {p.minus && (
            <div className="mt-6 flex items-center gap-2 md:mt-[34px]">
              <span className="text-[50px] leading-none font-bold md:text-[72px]">-10%</span>
              <span className="text-[14px] leading-tight md:text-[18px]">
                От стоимости
                <br />
                автомобиля
              </span>
            </div>
          )}
          {p.features.length > 0 && (
            <ul className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-6 md:mt-[50px] lg:w-[880px] lg:gap-[20px]">
              {p.features.map((f) => (
                <li key={f.text} className="flex items-center gap-3 text-[14px] leading-tight md:gap-5 md:text-[16px]">
                  <span className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-white text-dark md:h-[80px] md:w-[80px]">
                    <Icon name={f.icon} className="h-8 w-8" />
                  </span>
                  {f.text}
                </li>
              ))}
            </ul>
          )}
        </div>
        {p.bigMinus && (
          <div className="mt-6 flex items-start gap-3 lg:absolute lg:top-[12px] lg:left-[865px] lg:mt-0">
            <span className="text-[70px] leading-none font-bold md:text-[132px]">-10%</span>
            <span className="mt-2 text-[16px] leading-tight md:mt-4 md:text-[18px]">
              От стоимости
              <br />
              автомобиля
            </span>
          </div>
        )}
      </Hero>

      {p.benefits === 'credit' && <IconBenefits title={p.benefitsTitle} items={benefits.credit} rows={[[0, 4]]} className="mt-14 md:mt-[80px]" />}
      {p.benefits === 'tradein' && <IconBenefits title={p.benefitsTitle} items={benefits.tradein} rows={[[0, 3], [3, 6]]} wide className="mt-14 md:mt-[70px]" />}

      <CreditCalc program={p} />
      <CreditCards kind={p.cards} title={p.cardsTitle} />
      <Purchase />
      {p.banner && <InfoBanner kind={p.banner} title={p.bannerTitle} />}
      {p.banks && <Banks />}
      {p.competitor && <Competitor />}
      <Trust className={p.banner || p.banks || p.competitor ? undefined : 'mt-16 md:mt-[126px]'} />
      <Reviews />
    </div>
  )
}
