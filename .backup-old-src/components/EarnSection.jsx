import Container from './Container'
import { MinusCircleIcon, PlusCircleIcon } from './Icons'

const pros = [
  'Авто в личной собственности по ПТС',
  'Платеж по кредиту от 90 руб. в день',
  'Рассрочка 0% без первоначального взноса',
  'Бесплатная установка ГБО для экономии топлива',
  'Оклейка автомобиля по ГОСТу',
  'Быстрое оформление всех документов под ключ',
]

const cons = [
  'Авто в собственности автопарка',
  'Платеж за арендованное такси от 1200 руб. в день',
  'Риск скрытых комиссий и переплат',
  'Нельзя установить доп. оборудование',
  'Возможно несоответствие нормам ГОСТ',
  'Долгое оформление документов',
]

function Column({ badge, badgeClass, title, items, Icon }) {
  return (
    <div>
      <span className={'rounded-full px-2.5 py-0.5 text-[12px] text-white uppercase ' + badgeClass}>{badge}</span>
      <h3 className="mt-1 text-[28px] lg:text-[32px]">{title}</h3>
      <ul className="mt-5 flex flex-col gap-4 text-[16px] leading-[19px] text-[#8b8b8b]">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <Icon className="mt-0 h-5 w-5 shrink-0" />
            <span className="max-w-[290px]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function EarnSection() {
  return (
    <Container className="mt-20 lg:mt-[94px]">
      <div className="relative rounded-[30px] bg-ink px-6 pt-10 pb-6 text-white lg:min-h-[446px] lg:px-14 lg:pt-[60px] lg:pb-14">
        <div className="lg:grid lg:grid-cols-[540px_1fr]">
          <h2 className="max-w-[440px] text-[30px] leading-tight font-bold lg:text-[40px]">Сколько можно заработать на такси?</h2>
          <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:mt-0 lg:grid-cols-[357px_1fr] lg:gap-0">
            <Column badge="Преимущества" badgeClass="bg-success" title="Свое такси" items={pros} Icon={PlusCircleIcon} />
            <Column badge="Недостатки" badgeClass="bg-primary" title="Аренда такси" items={cons} Icon={MinusCircleIcon} />
          </div>
        </div>
        <img
          src="/images/car-octavia-taxi-new.png"
          alt="Skoda Octavia такси"
          className="mx-auto mt-6 w-full max-w-[520px] lg:absolute lg:bottom-[-70px] lg:left-[-90px] lg:mt-0 lg:w-[700px] lg:max-w-none"
        />
      </div>
    </Container>
  )
}
