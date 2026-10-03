import Box from './Box'
import LeadForm from './LeadForm'

export default function DarkBanner({ image, imageClass, title, children, className = 'mt-16 md:mt-[100px]' }) {
  return (
    <Box className={className}>
      <div className="relative overflow-hidden rounded-[30px] bg-dark">
        <div className="absolute inset-y-0 left-0 w-full md:w-[48%]">
          <img src={'/images/' + image} alt="" className={'absolute ' + imageClass} />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-dark" />
        </div>
        <div className="relative px-6 pt-[200px] pb-8 md:ml-[48%] md:px-0 md:py-[60px] md:pr-10">
          <div className="text-white">{title}</div>
          {children}
          <LeadForm
            withName={false}
            className="mt-6 grid gap-3 sm:grid-cols-2 md:mt-8 md:max-w-[780px] md:gap-[38px]"
            inputClass="bg-white md:h-[64px]"
            btnClass="md:h-[64px]"
            note={
              <p className="text-[12px] text-white/40 sm:col-span-2 md:-mt-6">
                Нажимая кнопку "Отправить" Вы даете согласие на обработку своих <span className="underline">персональных данных</span>
              </p>
            }
          />
        </div>
      </div>
    </Box>
  )
}
