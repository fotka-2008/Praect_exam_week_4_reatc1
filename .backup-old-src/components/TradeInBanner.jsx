import Container from './Container'
import { Agreement, Input, Select } from './FormFields'
import { sendForm } from '../utils/form'
import brands from '../data/brands.json'

export function TradeInFormBanner() {
  return (
    <section className="relative mt-20 overflow-hidden bg-ink lg:mt-[90px]">
      <img src="/images/hero-trade-in.jpg" alt="" className="absolute inset-0 h-full w-full object-cover object-[75%_center]" />
      <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/50 lg:to-transparent" />
      <Container className="relative py-14 text-white lg:py-[85px]">
        <span className="block h-[15px] w-[66px] bg-primary" />
        <h2 className="mt-3 text-[34px] leading-tight font-bold lg:text-[56px]">Выгодный Trade-in</h2>
        <p className="mt-2 text-[18px] font-bold">Оценим вашу машину за 10 минут</p>

        <form onSubmit={sendForm} className="mt-8 grid max-w-[752px] grid-cols-2 gap-4 lg:mt-[54px] lg:grid-cols-4">
          <Select placeholder="Марка" options={brands} className="text-ink" />
          <Select placeholder="Модель" options={['Camry', 'Corolla', 'RAV4', 'Rio', 'Octavia']} className="text-ink" />
          <Select placeholder="Год выпуска" options={['2021', '2020', '2019', '2018', '2017', '2016', '2015']} className="text-ink" />
          <Select placeholder="Тип кузова" options={['Седан', 'Хэтчбек', 'Универсал', 'Кроссовер', 'Внедорожник']} className="text-ink" />
          <Input type="tel" placeholder="Ваш телефон" required className="col-span-2" />
          <button className="col-span-2 h-14 rounded-[4px] bg-primary text-[16px] font-bold uppercase hover:bg-primary-dark lg:h-16">
            Обратный звонок
          </button>
        </form>
        <Agreement button="Получить предложение" className="mt-6 max-w-[640px] text-[#bdbdbd]!" />
      </Container>
    </section>
  )
}

export function TradeInOfferBanner() {
  return (
    <Container className="mt-20 lg:mt-[70px]">
      <div className="relative overflow-hidden rounded-[30px] bg-ink">
        <img src="/images/hero-trade-in.jpg" alt="" className="absolute inset-y-0 left-0 h-full w-full object-cover object-[60%_center] lg:w-[70%]" />

        <div className="absolute inset-0 bg-ink/70 lg:bg-[linear-gradient(90deg,rgba(38,38,38,0)_20%,rgba(120,20,20,0.85)_45%,#262626_68%)]" />

        <form onSubmit={sendForm} className="relative px-5 py-10 text-white lg:ml-[477px] lg:py-[70px] lg:pr-10">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <h2 className="text-[26px] font-bold uppercase lg:text-[32px]">Выгодный Trade-in</h2>
            <span className="text-[48px] leading-none font-bold lg:text-[72px]">от 1,9%</span>
            <span className="text-[18px] leading-tight font-bold lg:text-[20px]">
              По льготной
              <br />
              ставке
            </span>
          </div>
          <p className="mt-1 text-[18px] lg:text-[20px]">Обменяйте свой автомобиль на новый с максимальной скидкой</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:mt-9 lg:max-w-[776px] lg:gap-[38px]">
            <Input type="tel" placeholder="Ваш телефон" required />
            <button className="h-14 rounded-[4px] bg-primary text-[16px] font-bold uppercase hover:bg-primary-dark lg:h-16">
              Получить предложение
            </button>
          </div>
          <Agreement button="Отправить" className="mt-4 text-[#8a8a8a]!" />
        </form>
      </div>
    </Container>
  )
}
