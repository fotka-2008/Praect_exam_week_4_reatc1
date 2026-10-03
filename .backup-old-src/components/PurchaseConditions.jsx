import Container from './Container'
import { CheckCircleIcon } from './Icons'
import benefits from '../data/benefits.json'

function CheckItem({ children }) {
  return (
    <li className="flex items-center gap-5 text-[16px] text-[#6f6f6f]">
      <CheckCircleIcon className="h-4 w-4 shrink-0" />
      {children}
    </li>
  )
}

export default function PurchaseConditions() {
  return (
    <Container className="mt-14 lg:mt-[52px]">
      <div className="grid gap-10 border-t border-line pt-10 lg:grid-cols-[878px_1fr] lg:gap-0 lg:pt-[52px]">
        <div className="lg:border-r lg:border-line lg:pb-2">
          <h3 className="text-[22px] font-medium lg:text-[24px]">Условия покупки</h3>
          <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-flow-col sm:grid-cols-[393px_1fr] sm:grid-rows-4">
            {benefits.purchase.map((item) => (
              <CheckItem key={item}>{item}</CheckItem>
            ))}
          </ul>
        </div>
        <div className="lg:pl-[68px]">
          <h3 className="text-[22px] font-medium lg:text-[24px]">Необходимые документы</h3>
          <ul className="mt-6 flex flex-col gap-3">
            {benefits.documents.map((item) => (
              <CheckItem key={item}>{item}</CheckItem>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  )
}
