import Banner from './Banner'

export default function OfferBanner() {
  return (
    <Banner
      wide={false}
      image="salon.jpg"
      side="people-businesswoman.png"
      sideClass="right-[5%] bottom-0 hidden h-[120%] lg:block"
      button="Заказать звонок"
      className="mt-24 md:mt-[140px]"
    >
      <h2 className="text-[30px] leading-tight font-bold md:text-[36px]">
        Получите спецпредложение
        <br />с максимальной скидкой!
      </h2>
      <p className="mt-3 text-[16px]">Воспользуйтесь спецпредложением, которое откроет Вам простой путь покупки автомобиля с максимальной скидкой, а также упростит оформление всех документов за 1 день</p>
    </Banner>
  )
}
