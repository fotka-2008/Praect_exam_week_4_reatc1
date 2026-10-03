import Container from './Container'
import { CheckCircleIcon } from './Icons'

const items = [
  {
    title: 'Без подтверждения дохода',
    text: 'Чтобы получить кредит, вам нужны паспорт и водительское удостоверение. Банк не требует подтверждение дохода, информацию о продавце и оформление КАСКО.',
  },
  {
    title: 'Без первоначального взноса',
    text: 'Кредит выдаётся без первоначального взноса на карту, с которой без процентов можно снять наличные. Банк доставит карту бесплатно.',
  },
  {
    title: 'Без сложностей с регистрацией',
    text: 'Для регистрации автомобиля после покупки нужны только копии договора купли-продажи и паспорта транспортного средства. Да, это всё.',
  },
]
export default function ConditionsBanner({ title }) {
  return (
    <section className="relative mt-20 overflow-hidden bg-gradient-to-b from-[#f4f4f4] to-[#e4e4e4] lg:mt-[86px]">
      <img src="/images/hero-city.jpg" alt="" className="absolute top-0 right-0 hidden w-[75%] opacity-70 mix-blend-multiply lg:block" />
      <Container className="relative grid items-center gap-8 py-14 lg:grid-cols-[640px_1fr] lg:py-[70px]">
        <div>
          <h2 className="max-w-[560px] text-[34px] leading-[1.1] font-bold lg:text-[56px]">{title}</h2>
          <ul className="mt-8 flex flex-col gap-8 lg:mt-[50px]">
            {items.map((item) => (
              <li key={item.title} className="flex gap-7">
                <CheckCircleIcon className="mt-1 h-7 w-7 shrink-0" />
                <div>
                  <p className="text-[22px] leading-tight font-medium lg:text-[32px]">{item.title}</p>
                  <p className="mt-3 text-[15px] leading-[19px] text-[#6f6f6f] lg:text-[16px]">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-[230px] sm:h-[340px] lg:h-[420px]">
          <img src="/images/car-superb-silver.png" alt="Skoda Superb" className="absolute top-0 left-[-4%] w-[56%]" />
          <img src="/images/car-hyundai-creta.png" alt="Hyundai Creta" className="absolute right-[-20px] bottom-0 w-[79%] lg:right-[-110px]" />
        </div>
      </Container>
    </section>
  )
}
