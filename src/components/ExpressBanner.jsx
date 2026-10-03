import Banner from './Banner'
import Icon from './Icon'
import benefits from '../data/benefits.json'

export default function ExpressBanner() {
  return (
    <Banner
      image="hero-city.jpg"
      side="people-woman-glasses.png"
      sideClass="right-[4%] bottom-0 hidden h-[110%] lg:block"
      button="Обратный звонок"
    >
      <h2 className="text-[34px] leading-tight font-bold md:text-[60px]">Экспресс-заявка на кредит</h2>
      <p className="mt-1 text-[18px] md:text-[20px]">Узнай предварительное решение банков не выходя из дома!</p>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2">
        {benefits.express.map((b) => (
          <li key={b.title} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red text-white">
              <Icon name="check" className="h-4 w-4" strokeWidth={3} />
            </span>
            <span className="text-[16px]">
              <b className="block font-medium">{b.title}</b>
              {b.text}
            </span>
          </li>
        ))}
      </ul>
    </Banner>
  )
}
