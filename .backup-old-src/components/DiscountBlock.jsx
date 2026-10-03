import Container from './Container'
import { CheckCircleIcon } from './Icons'

const conditions = [
  '10% размер субсидии от стоимости автомобиля без дополнительного оборудования',
  'Стоимость автомобиля не более 2 млн рублей',
  'Автомобиль 2021 года выпуска, произведён в России',
]

const requirements = [
  'Гражданство РФ и водительское удостоверение',
  'Нет других автокредитов, оформленных в этом году',
  'Покупка первого автомобиля или семья с детьми',
]

export default function DiscountBlock() {
  return (
    <section className="relative mt-20 overflow-hidden bg-[#f3f3f3] lg:mt-[86px]">
      <img src="/images/hero-city.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-40 blur-[3px]" />
      <img
        src="/images/car-mazda3-red.png"
        alt=""
        className="absolute top-[60px] right-[180px] hidden w-[560px] opacity-80 blur-[2px] lg:block"
      />
      <Container className="relative grid lg:grid-cols-[1fr_460px]">
        <div className="py-14 lg:py-[80px]">
          <h2 className="text-[34px] leading-[1.1] font-bold lg:text-[64px]">
            Получите скидку
            <br className="hidden sm:block" /> на покупку нового авто!
          </h2>
          <p className="mt-6 max-w-[740px] text-[16px] leading-[19px]">
            Помогаем молодым семьям не только встать на ноги, но и сесть за руль! Если вы — будущие клиенты, государство оплатит 10% от
            общей суммы кредита на покупку нового автомобиля (для Дальнего Востока — 25%).
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-[70px] lg:max-w-[920px]">
            {[
              ['Основные условия программ', conditions],
              ['Общие требования для участия', requirements],
            ].map(([title, list]) => (
              <div key={title}>
                <h3 className="text-[20px] font-medium">{title}</h3>
                <ul className="mt-8 flex flex-col gap-7">
                  {list.map((item) => (
                    <li key={item} className="flex gap-4 text-[16px] leading-[19px]">
                      <CheckCircleIcon className="h-7 w-7 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <img src="/images/people-couple.png" alt="" className="hidden self-end lg:block lg:w-[520px] lg:max-w-none" />
      </Container>
    </section>
  )
}
