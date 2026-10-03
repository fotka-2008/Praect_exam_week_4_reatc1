import Slider from './Slider'
import Logo from './Logo'
import banks from '../data/banks.json'

export default function Banks({ title = 'Банки-партнеры', items = banks, className }) {
  return (
    <Slider
      title={title}
      items={items}
      per={[2, 3, 4]}
      className={className}
      render={(b) => (
        <div className="flex h-[100px] items-center justify-center rounded-[10px] bg-gray px-4 md:h-[133px]">
          <Logo item={b} />
        </div>
      )}
    />
  )
}
