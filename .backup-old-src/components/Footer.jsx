import { Link } from 'react-router-dom'
import Container from './Container'
import brands from '../data/brands.json'
import links from '../data/footerLinks.json'
import { ChevronDownIcon, ClockIcon, PhoneIcon, PinIcon, StarIcon } from './Icons'

function ColumnTitle({ children }) {
  return (
    <h4 className="relative pb-2 text-[14px] font-bold text-white uppercase after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-[34px] after:bg-primary">
      {children}
    </h4>
  )
}

function RoundIcon({ children }) {
  return <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-primary text-white">{children}</span>
}

const linkClass = 'text-[16px] text-[#8a8a8a] underline underline-offset-2 hover:text-white'

export default function Footer() {
  const footerBrands = brands.slice(0, 36)

  return (
    <footer className="bg-ink text-white">

      <div className="border-b border-[#4c4c4c]">
        <Container className="flex flex-wrap justify-between gap-x-8 gap-y-3 py-6 lg:py-9">
          {links.nav.map((item) => (
            <Link key={item.label} to={item.to} className="text-[14px] font-bold uppercase hover:text-primary lg:text-[17px]">
              {item.label}
            </Link>
          ))}
        </Container>
      </div>

      <Container className="grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_200px_325px] lg:gap-6 lg:py-[60px] xl:grid-cols-[620px_214px_241px_325px] xl:gap-0">

        <div className="xl:col-span-1">
          <div className="mb-8 flex items-end gap-5">
            <ColumnTitle>Каталог авто</ColumnTitle>
            <Link to="/used" className="pb-2 text-[16px] font-bold text-[#8a8a8a] underline">
              Подробнее
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-y-[9px] sm:grid-cols-6 xl:grid-cols-5 xl:grid-flow-col xl:grid-rows-6">
            {footerBrands.slice(0, 30).map((brand) => (
              <Link key={brand} to="/used" className={linkClass}>
                {brand}
              </Link>
            ))}

            {footerBrands.slice(30).map((brand) => (
              <Link key={brand} to="/used" className={linkClass + ' xl:hidden'}>
                {brand}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden xl:block">
          <a href="#" className={linkClass + ' mb-[37px] block'}>
            Карта сайта
          </a>
          <div className="grid gap-y-[9px]">
            {footerBrands.slice(30).map((brand) => (
              <Link key={brand} to="/used" className={linkClass}>
                {brand}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-8">
            <ColumnTitle>Кредит и рассрочка</ColumnTitle>
          </div>
          <div className="grid gap-y-[9px]">
            {links.credit.map((item) => (
              <Link key={item.label} to={item.to} className={linkClass}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-8">
            <ColumnTitle>Контакты</ColumnTitle>
          </div>
          <div className="flex flex-col gap-3 text-[16px] text-[#a0a0a0]">
            <div className="flex gap-3">
              <RoundIcon>
                <PhoneIcon className="h-3 w-3" />
              </RoundIcon>
              <div>
                {links.phones.map((phone) => (
                  <a key={phone} href={'tel:' + phone.replace(/\D/g, '')} className="block hover:text-white">
                    {phone}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <RoundIcon>
                <ClockIcon className="h-3.5 w-3.5" />
              </RoundIcon>
              {links.hours}
            </div>
            <div className="flex gap-3">
              <RoundIcon>
                <PinIcon className="h-3.5 w-3.5" />
              </RoundIcon>
              <div>
                {links.address}
                <a href="#" className="block leading-none text-primary underline">
                  Схема проезда
                </a>
              </div>
            </div>

            <div className="relative mt-2">
              <select className="h-10 w-full appearance-none rounded-[6px] bg-[#3a3a3a] px-4 text-[16px] text-white outline-none">
                {links.cities.map((city) => (
                  <option key={city}>{city}</option>
                ))}
              </select>
              <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </Container>

      <div className="bg-ink-2">
        <Container className="flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:gap-[86px]">
          <div className="lg:w-[445px] lg:shrink-0">
            <p className="text-[16px] lg:text-[18px]">© 2021 Автосалон "ABC AUTO". Официальный дилер</p>
            <div className="mt-4 flex flex-wrap gap-x-9 gap-y-2">
              {links.legal.map((item) => (
                <a key={item} href="#" className="text-[14px] text-[#5c5c5c] underline hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <p className="text-[13px] leading-[20px] text-[#5c5c5c] lg:text-[14px]">{links.disclaimer}</p>

          <div className="w-[218px] shrink-0 overflow-hidden rounded-[4px] bg-white text-ink">
            <div className="flex items-center gap-2 px-3 pt-2">
              <span className="text-[32px] leading-none font-medium text-[#f00]">Я</span>
              <StarIcon className="h-6 w-6 text-[#fc0]" />
              <span className="text-[26px] font-bold">5,0</span>
              <span className="text-[11px] text-muted">/5</span>
              <span className="ml-auto border-l border-line pl-2 text-[11px] leading-tight text-muted">
                Ваша
                <br />
                оценка
              </span>
            </div>
            <div className="mt-1 bg-[#ebebeb] py-1 text-center text-[10px] text-muted">Рейтинг организации в Яндексе</div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
