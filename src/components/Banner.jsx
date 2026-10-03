import LeadForm from './LeadForm'
import Note from './Note'

export default function Banner({ image, bg = '#F2F2F2', side, sideClass, button = 'Получить предложение', children, form = true, wide = true, className = 'mt-16 md:mt-[100px]' }) {
  return (
    <section className={(wide ? 'mx-2 md:mx-[25px] ' : 'mx-auto max-w-[1440px] px-4 md:px-5 ') + className}>
      <div className="relative">
        <div className="relative overflow-hidden rounded-[24px] md:rounded-[30px]" style={{ backgroundColor: bg }}>
          {image && <img src={'/images/' + image} alt="" className="absolute inset-0 h-full w-full scale-110 object-cover blur-[6px]" />}
          {image && <div className="absolute inset-0 bg-white/60 md:bg-gradient-to-r md:from-white/80 md:via-white/40 md:to-transparent" />}
          <div className={'relative mx-auto max-w-[1440px] px-5 py-10 md:py-[60px] ' + (wide ? 'md:px-5' : 'md:px-[58px]')}>
            <div className="relative z-10 max-w-[760px]">
              {children}
              {form && (
                <LeadForm
                  button={button}
                  className="mt-8 grid gap-4 sm:grid-cols-[1fr_1fr_1.15fr] md:max-w-[660px] md:gap-[20px]"
                  inputClass="bg-white md:h-[64px]"
                  btnClass="md:h-[64px] px-2"
                  note={<Note button="Получить предложение" className="sm:col-span-3 md:-mt-2" />}
                />
              )}
            </div>
          </div>
        </div>
        {side && <img src={'/images/' + side} alt="" className={'pointer-events-none absolute ' + sideClass} />}
      </div>
    </section>
  )
}
