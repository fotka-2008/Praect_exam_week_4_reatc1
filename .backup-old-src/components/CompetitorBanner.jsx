import Container from './Container'
import { Agreement, Input } from './FormFields'
import { sendForm } from '../utils/form'

export default function CompetitorBanner() {
  return (
    <Container className="mt-20 lg:mt-[110px]">
      <div className="relative overflow-hidden rounded-[30px] bg-ink">
        <div className="absolute inset-y-0 left-0 w-[60%] bg-[radial-gradient(circle_at_20%_55%,#8c0f0f_0%,rgba(38,38,38,0)_65%)]" />
        <img
          src="/images/boxing-glove.png"
          alt=""
          className="relative mx-auto -mb-4 w-[300px] -scale-x-100 lg:absolute lg:top-1/2 lg:left-[-150px] lg:mb-0 lg:w-[640px] lg:-translate-y-1/2"
        />

        <form onSubmit={sendForm} className="relative px-5 pb-8 lg:ml-[477px] lg:px-0 lg:py-[70px] lg:pr-10">
          <h2 className="text-[24px] leading-tight font-bold text-white uppercase lg:text-[32px]">Перебьем предложения от конкурентов!</h2>
          <p className="mt-1 text-[18px] text-white lg:text-[20px]">
            Скидки <span className="text-primary">от 10 до 25%</span> на стоимость автомобиля
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:mt-[35px] lg:max-w-[776px] lg:gap-[38px]">
            <Input type="tel" placeholder="Ваш телефон" required />
            <button className="h-14 rounded-[4px] bg-primary text-[16px] font-bold text-white uppercase hover:bg-primary-dark lg:h-16">
              Получить предложение
            </button>
          </div>
          <Agreement button="Отправить" className="mt-4 text-[#8a8a8a]!" />
        </form>
      </div>
    </Container>
  )
}
