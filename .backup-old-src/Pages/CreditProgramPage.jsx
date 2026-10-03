import { useParams } from 'react-router-dom'
import Container from '../components/Container'
import HeroBanner, { HeroBadge, HeroTitle } from '../components/HeroBanner'
import BenefitsIcons from '../components/BenefitsIcons'
import SectionTitle from '../components/SectionTitle'
import CreditCalculatorSteps from '../components/CreditCalculatorSteps'
import AdvantagesGrid from '../components/AdvantagesGrid'
import PurchaseConditions from '../components/PurchaseConditions'
import ConditionsBanner from '../components/ConditionsBanner'
import DiscountBlock from '../components/DiscountBlock'
import BanksSlider from '../components/BanksSlider'
import CompetitorBanner from '../components/CompetitorBanner'
import TrustSection from '../components/TrustSection'
import ReviewsSection from '../components/ReviewsSection'
import NotFoundPage from './NotFoundPage'
import { CardIcon, GearIcon, GiftIcon, PercentIcon, ThumbUpIcon, TimerIcon } from '../components/Icons'
import programs from '../data/creditPrograms.json'
import benefits from '../data/benefits.json'

const heroIcons = { thumb: ThumbUpIcon, timer: TimerIcon, percent: PercentIcon, gear: GearIcon, gift: GiftIcon, card: CardIcon }

const sectionLinks = { 'Кредит и рассрочка': '/credit/installment', Спецпредложения: '/special/recycling' }

export default function CreditProgramPage() {
  const { slug } = useParams()
  const program = programs[slug]
  if (!program) return <NotFoundPage />

  const discount = program.discount && (
    <div
      className={
        'mt-6 flex items-center gap-3 ' +
        (program.discount.top ? 'lg:absolute lg:top-[20px] lg:right-[130px] lg:mt-0' : 'lg:mt-[30px]')
      }
    >
      <span className={'leading-none font-bold ' + (program.discount.top ? 'text-[64px] lg:text-[144px]' : 'text-[64px] lg:text-[72px]')}>
        {program.discount.big}
      </span>
      <span className={'max-w-[110px] text-[16px] leading-tight ' + (program.discount.top ? '' : 'opacity-80')}>{program.discount.text}</span>
    </div>
  )

  return (
    <>
      <HeroBanner
        light
        crumbs={[{ label: program.section, to: sectionLinks[program.section] }, { label: program.title }]}
        bgImage={program.hero}
        side={program.discount?.top && discount}
      >
        <HeroTitle className="mt-8 lg:mt-[36px]">{program.title}</HeroTitle>
        <p className="mt-3 max-w-[620px] text-[18px] leading-[23px] font-bold lg:text-[20px]">{program.subtitle}</p>
        <HeroBadge big={program.badgeBig} text={program.badgeText} className="mt-8 lg:mt-[38px]" />
        {!program.discount?.top && discount}

        {program.heroIcons.length > 0 && (
          <ul className="mt-8 grid gap-4 sm:grid-cols-3 lg:mt-[40px] lg:max-w-[880px]">
            {program.heroIcons.map((item) => {
              const Icon = heroIcons[item.icon]
              return (
                <li key={item.text} className="flex items-center gap-5 text-[16px] leading-[19px] font-medium">
                  <span className="flex h-[78px] w-[78px] shrink-0 items-center justify-center rounded-full bg-white text-ink">
                    <Icon className="h-9 w-9" />
                  </span>
                  <span className="max-w-[170px]">{item.text}</span>
                </li>
              )
            })}
          </ul>
        )}
      </HeroBanner>

      {program.benefits && (
        <Container className="mt-16 lg:mt-[86px]">
          <SectionTitle title={program.benefitsTitle} center />
          <BenefitsIcons items={benefits[program.benefits]} perRow={program.benefits === 'tradeIn' ? 3 : 4} />
        </Container>
      )}

      <Container className="mt-14 lg:mt-[70px]">
        <CreditCalculatorSteps key={slug} steps={program.steps} />
      </Container>

      {program.advantages === 'tradeIn' ? (
        <AdvantagesGrid title={program.advantagesTitle} items={benefits.tradeInAdvantages} columns={3} />
      ) : (
        <AdvantagesGrid title={program.advantagesTitle} items={benefits.creditAdvantages} />
      )}

      <PurchaseConditions />

      {program.conditionsTitle && <ConditionsBanner title={program.conditionsTitle} />}
      {program.discountBlock && <DiscountBlock />}
      {program.banks && <BanksSlider />}
      {program.competitor && <CompetitorBanner />}
      <TrustSection />
      <ReviewsSection />
      <div className="h-20 lg:h-[100px]" />
    </>
  )
}
