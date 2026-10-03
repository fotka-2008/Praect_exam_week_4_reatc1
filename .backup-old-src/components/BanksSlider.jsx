import Container from './Container'
import Slider from './Slider'
import banks from '../data/banks.json'
export default function BanksSlider({ title = 'Банки-партнеры', items = banks }) {
  return (
    <Container className="mt-20 lg:mt-[120px]">
      <Slider
        title={title}
        items={items}
        renderItem={(bank) => (
          <div className="flex h-[110px] flex-col items-center justify-center rounded-[10px] bg-light px-4 text-center lg:h-[133px]">
            <span className="text-[22px] leading-tight font-bold lg:text-[26px]" style={{ color: bank.color }}>
              {bank.name}
            </span>
            <span className="mt-1 text-[11px] text-muted">(здесь будет логотип)</span>
          </div>
        )}
      />
    </Container>
  )
}
