import Container from '../components/Container'
import HeroBanner, { HeroTitle } from '../components/HeroBanner'
import Button from '../components/Button'
import BanksSlider from '../components/BanksSlider'
import ImagePlaceholder from '../components/ImagePlaceholder'
import { ArrowRightIcon, CheckCircleIcon } from '../components/Icons'
import insurancePartners from '../data/insurancePartners.json'

const heroChecks = ['Осаго для такси', 'Гарантия самой низкой цены полиса', 'Официальные полисы', 'Оплата после проверки', 'На все категории A B C D E', 'Возможен безналичный расчет']

const osagoPlus = [
  'Нет необходимости посещать офис для оформления или продления полиса ОСАГО',
  'Отсутствуют риски потерять бумажный экземпляр страховки. Полис всегда в почтовом ящике клиента',
  '100% гарантия достоверности полиса (аналог бумажного экземпляра)',
  'Надежная защита сведений клиента и его операций по оформлению и оплате страховки. Отсутствует риск мошенничества (только отобранные страховщики)',
]

const kaskoPlans = [
  {
    title: 'Доступное КАСКО',
    items: [
      'Единый тариф независимо от стажа и возраста - 1,9%',
      'Защита по основным рискам: угон, полная гибель, ДТП с участием третьих лиц, в котором установлена вина клиента',
      'Необходимый уровень защиты по доступной цене',
      'Нет ограничения по допущенным к управлению',
    ],
  },
  {
    title: 'Оптимальное КАСКО',
    items: [
      'Выгода до 20% от стоимости полного КАСКО',
      'Полная страховая защита по рискам "Угон" и "Ущерб"',
      'Первый страховой случай покрывается без ограничений',
      'Со 2-го страхового случая применяется безусловная франшиза',
      'Индивидуальный выгодный тариф для каждого клиента',
    ],
  },
  {
    title: 'Полное КАСКО',
    items: [
      'Полная защита по рискам "Угон" и "Ущерб"',
      'Возможность выбора франшизы при покупке за наличные',
      'Индивидуальный выгодный тариф для каждого клиента',
    ],
  },
]

function PolicyCard({ title, text, car, placeholder }) {
  return (
    <div className="flex flex-col items-center gap-5 rounded-[30px] bg-soft px-6 py-6 sm:flex-row lg:px-5 lg:py-4">
      <div className="relative h-[130px] w-[190px] shrink-0">
        <ImagePlaceholder label={placeholder} className="absolute top-0 left-0 h-[110px] w-[100px] rounded-full!" />
        <img src={'/images/' + car} alt="" className="absolute right-0 bottom-0 w-[150px]" />
      </div>
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-[22px] font-medium uppercase">{title}</h3>
        <p className="mt-1 text-[16px] leading-[19px] text-[#6f6f6f]">{text}</p>
      </div>
      <Button onClick={() => alert('Заявка на расчёт отправлена')} className="h-12 w-full shrink-0 text-[16px] sm:w-[188px]">
        Рассчитать
      </Button>
    </div>
  )
}

export default function InsurancePage() {
  return (
    <>
      <HeroBanner light bgImage="hero-insurance.jpg" crumbs={[{ label: 'Страхование' }]}>
        <HeroTitle className="mt-8 lg:mt-[50px]">
          Страховые полисы
          <br className="hidden sm:block" /> без комиссий и надбавок
        </HeroTitle>
        <p className="mt-6 max-w-[460px] text-[18px] leading-[23px] font-bold lg:mt-8 lg:text-[20px]">
          Расчет сразу в нескольких компаниях и официальное оформление страхового полиса
        </p>
        <ul className="mt-8 grid max-w-[640px] grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:mt-12">
          {heroChecks.map((item) => (
            <li key={item} className="flex items-center gap-4 text-[14px] leading-[16px]">
              <CheckCircleIcon className="h-7 w-7 shrink-0" />
              <span className="max-w-[150px] text-balance">{item}</span>
            </li>
          ))}
        </ul>
      </HeroBanner>

      <Container className="mt-10 grid gap-6 lg:mt-[46px] lg:grid-cols-2 lg:gap-[30px]">
        <PolicyCard
          title="КАСКО"
          text="Страхование транспортного средства от ущерба, хищения и угона"
          car="car-karoq-blue.png"
          placeholder="красный зонт"
        />
        <PolicyCard
          title="ОСАГО"
          text="Обязательное страхование автогражданской ответственности"
          car="car-kia-rio-red.png"
          placeholder="щит ОСАГО"
        />
      </Container>

      <Container className="mt-16 grid items-center gap-10 lg:mt-[86px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:grid-cols-[720px_1fr]">
        <div>
          <h2 className="text-[30px] leading-tight font-medium lg:text-[44px]">Оформить ОСАГО легко и удобно</h2>
          <p className="mt-6 max-w-[540px] text-[16px] leading-[24px] text-[#6f6f6f]">
            Полис ОСАГО - это обязательное страхование автогражданской ответственности за причинение вреда жизни, здоровью и имуществу
            третьих лиц при эксплуатации автомобиля.
          </p>
          <h3 className="mt-10 text-[20px] font-medium">Преимущества электронного полиса</h3>
          <ul className="mt-8 flex flex-col gap-0.5 text-[16px] leading-[24px]">
            {osagoPlus.map((item) => (
              <li key={item} className="flex gap-6">
                <ArrowRightIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="max-w-[610px]">{item}</span>
              </li>
            ))}
          </ul>
          <Button onClick={() => alert('Заявка отправлена')} className="mt-10 h-16 w-full text-[16px] sm:w-[270px]">
            Оформить полис
          </Button>
        </div>
        <img src="/images/osago-policies.png" alt="Полисы ОСАГО" className="mx-auto w-full max-w-[700px]" />
      </Container>

      <Container className="mt-16 lg:mt-[90px]">
        <h2 className="text-[30px] leading-tight font-medium lg:text-[44px]">Выбрать свое КАСКО просто и выгодно</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
          {kaskoPlans.map((plan, index) => (
            <div
              key={plan.title}
              className={'flex flex-col rounded-[30px] px-8 pt-12 pb-10 ' + (index === 2 ? 'bg-light' : 'bg-soft')}
            >
              <h3 className="text-[22px] font-medium lg:text-[24px]">{plan.title}</h3>
              <ul className="mt-8 mb-10 flex flex-col gap-6">
                {plan.items.map((item) => (
                  <li key={item} className="flex gap-4 text-[16px] leading-[19px] text-[#6f6f6f]">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button onClick={() => alert('Заявка отправлена')} className="mt-auto h-16 w-full max-w-[270px] text-[16px] tracking-wide">
                Оформить полис
              </Button>
            </div>
          ))}
        </div>
      </Container>

      <BanksSlider title="Наши партнеры" items={insurancePartners} />
      <div className="h-20 lg:h-[130px]" />
    </>
  )
}
