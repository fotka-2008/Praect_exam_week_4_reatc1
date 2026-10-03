import PageTitle from '../components/PageTitle'
import Box from '../components/Box'
import Slider from '../components/Slider'
import Banks from '../components/Banks'
import Icon from '../components/Icon'

const gets = [
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
  { id: 1, src: 'salon.jpg' },
  { id: 2, src: 'people-team.jpg' },
  { id: 3, src: 'photo-camry-showroom.jpg' },
  { id: 4, src: 'salon.jpg' },
  { id: 5, src: 'photo-interior.jpg' },
]

export default function About() {
  return (
    <>
      <PageTitle title="О компании" />
      <Box className="mt-10 text-[16px] leading-[1.5] md:mt-[50px]">
        <p>
          Официальный дилер ABC AUTO предлагает широкий выбор автомобилей различных цветов и комплектаций на самых выгодных условиях. На территории автосалона представлено свыше двухсот новых автомобилей и с пробегом. Среди ассортимента представленных автомобилей встречаются наиболее популярные представители европейского, азиатского и российского производства. Для каждого клиента в нашем автосалоне предоставляется полная персональная консультация по любому из представленных автомобилей. Подробнее о представленных в салоне моделях Вы можете узнать на сайте и у наших менеджеров.
        </p>
        <p className="mt-6">Выбирая автосалон ABC AUTO Вы получаете:</p>
        <ul className="mt-4 flex flex-col">
          {gets.map((g) => (
            <li key={g} className="relative pl-9 before:absolute before:top-[10px] before:left-0 before:h-[5px] before:w-[5px] before:rounded-full before:bg-red">
              {g}
            </li>
          ))}
        </ul>
        <p className="mt-6">Все вопросы о наличии, цветах и комплектациях автомобилей, а также по работе автосалона Вы всегда можете узнать по телефону, указанному на сайте, а также при помощи формы обратной связи.</p>
        <p className="mt-6">Мы ценим каждого клиента и гарантируем высокий уровень сервиса!</p>
        <p className="mt-6">ABC AUTO — с нами Вам покорятся все направления!</p>
      </Box>

      <Slider
        title="Фото автосалона"
        items={photos}
        per={[1, 2, 3]}
        render={(p) => <img src={'/images/' + p.src} alt="Фото автосалона" className="h-[240px] w-full rounded-[30px] object-cover md:h-[288px]" />}
      />

      <Box className="mt-12 md:mt-[50px]" id="contacts">
        <div className="relative grid gap-8 overflow-hidden rounded-[30px] bg-soft p-6 md:p-12 lg:grid-cols-[460px_1fr] lg:px-[110px] lg:py-[60px]">
          <div>
            <p className="text-[140px] leading-none font-medium text-red md:text-[260px]">12</p>
            <p className="ml-2 text-[28px] text-red">Городов присутствия</p>
            <div className="mt-10 flex gap-12 md:mt-[80px]">
              {[
                ['user', '1000', 'работников'],
                ['award', '20 лет', 'на рынке'],
              ].map(([icon, a, b]) => (
                <div key={a}>
                  <span className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-dark text-white">
                    <Icon name={icon} className="h-8 w-8" />
                  </span>
                  <p className="mt-4 text-[24px] leading-tight">{a}</p>
                  <p className="text-[24px] leading-tight text-muted/60">{b}</p>
                </div>
              ))}
            </div>
          </div>
          <img src="/images/map-russia.png" alt="Карта городов присутствия" className="w-full self-center" />
        </div>
      </Box>

      <Banks />
    </>
  )
}
