import Container from './Container'
import { Agreement, Input } from './FormFields'
import { sendForm } from '../utils/form'

export default function LeadForm() {
  return (
    <Container className="relative z-10 -mt-[60px] lg:-mt-[82px]">
      <form
        onSubmit={sendForm}
        className="grid gap-4 rounded-[20px] border border-[#e7e7e7] bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.06)] md:grid-cols-2 lg:grid-cols-[260px_1fr_1fr_320px] lg:gap-x-6 lg:rounded-[30px] lg:px-[42px] lg:py-[34px]"
      >
        <div className="md:col-span-2 lg:col-span-1 lg:row-span-2">
          <p className="text-[20px] leading-[29px] font-medium lg:text-[24px]">
            Получите
            <br className="hidden lg:block" /> специальную цену
          </p>
          <span className="mt-1 inline-block rounded-full bg-primary px-3 text-[16px] leading-[26px] font-medium text-white">
            Только до 10.10.21
          </span>
        </div>
        <Input look="gray" placeholder="Ваше имя" required />
        <Input look="gray" type="tel" placeholder="Ваш телефон" required />
        <button className="h-14 rounded-[4px] bg-primary text-[16px] font-bold tracking-wide text-white uppercase hover:bg-primary-dark md:col-span-2 lg:col-span-1 lg:h-16 lg:text-[17px]">
          Получить предложение
        </button>
        <Agreement button="Получить скидку" className="md:col-span-2 lg:col-start-2 lg:-mt-2" />
      </form>
    </Container>
  )
}
