import DarkBanner from './DarkBanner'

export default function Competitor({ className }) {
  return (
    <DarkBanner
      className={className}
      image="boxing-glove.png"
      imageClass="-left-[6%] top-1/2 w-[110%] max-w-[480px] -translate-y-1/2 md:left-0 md:w-[80%]"
      title={
        <>
          <h3 className="text-[24px] leading-tight font-bold uppercase md:text-[30px]">Перебьем предложения от конкурентов!</h3>
          <p className="text-[18px] md:text-[20px]">
            Скидки <span className="text-red">от 10 до 25%</span> на стоимость автомобиля
          </p>
        </>
      }
    />
  )
}
