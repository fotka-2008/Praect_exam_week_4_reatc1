import DarkBanner from './DarkBanner'

export default function TradeInDark({ className }) {
  return (
    <DarkBanner
      className={className}
      image="hero-trade-in.jpg"
      imageClass="inset-0 h-full w-full object-cover object-[30%_center]"
      title={
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <h3 className="text-[24px] font-bold uppercase md:text-[30px]">Выгодный trade-in</h3>
          <span className="text-[44px] leading-none font-bold md:text-[64px]">от 1,9%</span>
          <span className="text-[18px] leading-tight font-medium md:text-[20px]">
            По льготной
            <br />
            ставке
          </span>
          <p className="w-full text-[18px] md:text-[20px]">Обменяйте свой автомобиль на новый с максимальной скидкой</p>
        </div>
      }
    />
  )
}
