import LeadForm from './LeadForm'

export default function PriceForm() {
  return (
    <div className="flex flex-col gap-5 rounded-[24px] border border-line bg-white p-5 md:p-8 lg:flex-row lg:items-start lg:gap-0 lg:rounded-[30px] lg:px-10 lg:py-8">
      <div className="lg:w-[350px] lg:shrink-0">
        <h3 className="text-[22px] leading-tight font-medium md:text-[24px]">
          Получите
          <br className="hidden lg:block" /> специальную цену
        </h3>
        <span className="mt-2 inline-block rounded-full bg-red px-3 py-0.5 text-[15px] font-bold text-white">Только до 10.10.21</span>
      </div>
      <LeadForm
        className="grid flex-1 gap-3 md:grid-cols-3 md:gap-6"
        inputClass="bg-gray md:h-[64px]"
        btnClass="md:h-[64px]"
        note={
          <p className="text-[12px] text-muted md:col-span-2">
            Нажимая кнопку “Получить скидку” Вы даете согласие на обработку своих <span className="underline">персональных данных</span>
          </p>
        }
      />
    </div>
  )
}
