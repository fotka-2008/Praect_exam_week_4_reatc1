import Container from './Container'
import Breadcrumbs from './Breadcrumbs'
import LeadForm from './LeadForm'

export default function HeroBanner({ crumbs, bgImage, bgClass = 'bg-light', light = false, side, children }) {
  return (
    <>
      <section className={'relative overflow-hidden ' + bgClass + (light ? ' text-white' : ' text-ink')}>
        {bgImage && (
          <>
            <img
              src={'/images/' + bgImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-[70%_center] lg:object-center"
            />

            {light && <div className="absolute inset-0 bg-black/40 lg:hidden" />}
          </>
        )}

        <Container className="relative pt-5 pb-[90px] lg:min-h-[600px] lg:pt-[30px] lg:pb-[120px]">
          <Breadcrumbs variant="arrow" items={[{ label: 'Главная', to: '/' }, ...crumbs]} />
          <div className="relative z-10">{children}</div>
          {side}
        </Container>
      </section>
      <LeadForm />
    </>
  )
}

export function HeroTitle({ children, className = '' }) {
  return <h1 className={'text-[36px] leading-[1.15] font-bold sm:text-[48px] xl:text-[60px] ' + className}>{children}</h1>
}

export function HeroBadge({ big, text, small = false, className = '' }) {
  return (
    <div
      className={
        'inline-flex items-center gap-4 rounded-full bg-primary text-white ' +
        (small ? 'px-7 py-3 ' : 'px-6 py-3 lg:px-7 lg:py-4 ') +
        className
      }
    >
      <span className={'leading-none font-bold whitespace-nowrap ' + (small ? 'text-[40px] lg:text-[52px]' : 'text-[40px] lg:text-[64px]')}>
        {big}
      </span>

      <span className={'leading-tight font-bold whitespace-pre-line ' + (small ? 'text-[15px]' : 'text-[16px] lg:text-[20px]')}>
        {text}
      </span>
    </div>
  )
}
