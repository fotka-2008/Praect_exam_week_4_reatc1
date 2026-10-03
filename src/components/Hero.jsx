import Box from './Box'
import Crumbs from './Crumbs'
import PriceForm from './PriceForm'

export default function Hero({ crumbs, image, bg = '#F0F0F0', light = false, side = null, sideClass = '', children, form = true }) {
  return (
    <section>
      <div
        className="relative mx-2 overflow-hidden rounded-[24px] bg-cover bg-center md:mx-[25px] md:rounded-[40px]"
        style={{ backgroundColor: bg, backgroundImage: image ? 'url(/images/' + image + ')' : undefined }}
      >
        {image && light && <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent md:from-black/30 md:via-transparent" />}
        {side && <div className={'pointer-events-none absolute ' + sideClass}>{side}</div>}
        <Box className={'relative pt-6 md:pt-[37px] ' + (form ? 'pb-[120px] md:pb-[120px] lg:min-h-[600px]' : 'pb-12 lg:min-h-[600px]')}>
          <Crumbs items={[{ title: 'Главная', to: '/' }, ...crumbs]} light={light} arrows />
          <div className={'mt-6 md:mt-[22px] ' + (light ? 'text-white' : 'text-dark')}>{children}</div>
        </Box>
      </div>
      {form && (
        <Box className="relative z-10 -mt-[90px] md:-mt-[80px]">
          <PriceForm />
        </Box>
      )}
    </section>
  )
}
