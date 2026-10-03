import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import Slider from '../components/Slider'
import BanksSlider from '../components/BanksSlider'
import { AwardIcon, UserPlusIcon } from '../components/Icons'

const advantages = [
  'самые выгодные цены на автомобили в Москве;',
  'возможность выбора автомобилей более чем из двухсот моделей различных цветов и комплектаций;',
  'приобретение автомобилей с пробегом, прошедших предпродажную подготовку и юридическую экспертизу;',
  'быстрое и качественное оформление документов;',
  'высокий уровень сервиса и индивидуальный подход;',
  'выгодное приобретение автомобиля по программам Trade-in и утилизация;',
  'сотрудничество с самыми крупными банками Москвы, предлагающими наиболее выгодные условия кредитования;',
  'возможность участия в программах льготного кредитования «Семейный автомобиль», и «Первый автомобиль», а также льготное условия для медицинских работников и тех, кто сдает свой автомобиль по программе Trade-in в счёт оплаты первоначального взноса;',
  'акции и подарки от автосалона при покупке автомобиля.',
]

const photos = [
  { src: 'salon.jpg', alt: 'Зал автосалона' },
  { src: 'people-team.jpg', alt: 'Наша команда' },
  { src: 'photo-camry-showroom.jpg', alt: 'Шоурум' },
  { src: 'photo-camry-dark.jpg', alt: 'Выдача автомобилей' },
  { src: 'photo-land-cruiser.jpg', alt: 'Внедорожники в наличии' },
]

export default function AboutPage() {
  return (
    <>
      <PageTitle title="О компании" crumbs={[{ label: 'О компании' }]} />
      <Container className="mt-10 text-[16px] leading-[24px] lg:mt-[60px]">
        <p>
          Официальный дилер ABC AUTO предлагает широкий выбор автомобилей различных цветов и комплектаций на самых выгодных условиях. На
          территории автосалона представлено свыше двухсот новых автомобилей и с пробегом. Среди ассортимента представленных автомобилей
          встречаются наиболее популярные представители европейского, азиатского и российского производства. Для каждого клиента в нашем
          автосалоне предоставляется полная персональная консультация по любому из представленных автомобилей. Подробнее о представленных
          в салоне моделях Вы можете узнать на сайте и у наших менеджеров.
        </p>
        <p className="mt-6">Выбирая автосалон ABC AUTO Вы получаете:</p>
        <ul className="mt-5">
          {advantages.map((item) => (
            <li key={item} className="flex gap-8">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6">
          Все вопросы о наличии, цветах и комплектациях автомобилей, а также по работе автосалона Вы всегда можете узнать по телефону,
          указанному на сайте, а также при помощи формы обратной связи.
        </p>
        <p className="mt-6">Мы ценим каждого клиента и гарантируем высокий уровень сервиса!</p>
        <p className="mt-6">ABC AUTO — с нами Вам покорятся все направления!</p>
      </Container>
      <Container className="mt-16 lg:mt-[60px]">
        <Slider
          title="Фото автосалона"
          items={photos}
          perView={3}
          renderItem={(photo) => (
            <img src={'/images/' + photo.src} alt={photo.alt} className="h-[220px] w-full rounded-[30px] object-cover lg:h-[288px]" />
          )}
        />
      </Container>
      <Container className="mt-14 lg:mt-[70px]">
        <div className="grid items-center gap-10 rounded-[30px] bg-soft px-6 py-10 lg:grid-cols-[400px_1fr] lg:px-[110px] lg:py-[80px]">
          <div>
            <p className="text-[140px] leading-[0.8] font-medium text-primary lg:text-[240px]">12</p>
            <p className="mt-6 text-[24px] text-primary lg:text-[28px]">Городов присутствия</p>
            <div className="mt-10 flex gap-12 lg:mt-[100px]">
              <div>
                <span className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-ink text-white">
                  <UserPlusIcon className="h-8 w-8" />
                </span>
                <p className="mt-4 text-[24px] leading-tight">1000</p>
                <p className="text-[24px] leading-tight text-[#a5a5a5]">работников</p>
              </div>
              <div>
                <span className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-ink text-white">
                  <AwardIcon className="h-9 w-9" />
                </span>
                <p className="mt-4 text-[24px] leading-tight">20 лет</p>
                <p className="text-[24px] leading-tight text-[#a5a5a5]">на рынке</p>
              </div>
            </div>
          </div>
          <img src="/images/map-russia.png" alt="Карта городов присутствия" className="w-full" />
        </div>
      </Container>

      <BanksSlider />
      <div className="h-20 lg:h-[110px]" />
    </>
  )
}
