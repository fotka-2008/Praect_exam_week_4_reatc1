import Box from './Box'
import Icon from './Icon'
import benefits from '../data/benefits.json'

function Item({ text }) {
  return (
    <li className="flex items-center gap-4 text-[16px] text-muted">
      <span className="flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full bg-red text-white">
        <Icon name="check" className="h-2.5 w-2.5" strokeWidth={4} />
      </span>
      {text}
    </li>
  )
}

export default function Purchase() {
  return (
    <Box className="mt-10 md:mt-[29px]">
      <div className="grid gap-10 border-t border-line pt-10 md:pt-[40px] lg:grid-cols-[minmax(0,820px)_1px_1fr] lg:gap-[60px]">
        <div>
          <h3 className="text-[24px] font-medium">Условия покупки</h3>
          <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 lg:grid-cols-[390px_1fr]">
            {benefits.purchase.map((t) => (
              <Item key={t} text={t} />
            ))}
          </ul>
        </div>
        <span className="hidden bg-line lg:block" />
        <div>
          <h3 className="text-[24px] font-medium">Необходимые документы</h3>
          <ul className="mt-6 flex flex-col gap-3">
            {benefits.docs.map((t) => (
              <Item key={t} text={t} />
            ))}
          </ul>
        </div>
      </div>
    </Box>
  )
}
