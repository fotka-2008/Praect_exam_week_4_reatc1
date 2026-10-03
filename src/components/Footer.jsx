import { Link } from 'react-router-dom'
import Icon from './Icon'
import links from '../data/footerLinks.json'

function Title({ children }) {
  return (
    <h4 className="relative pb-3 text-[13px] font-bold text-white uppercase after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-[34px] after:bg-red">
      {children}
    </h4>
  )
}

function Contact({ icon, children }) {
  return (
    <li className="flex gap-3">
      <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-red text-white">
        <Icon name={icon} className="h-3 w-3" strokeWidth={2.5} />
      </span>
      <span>{children}</span>
    </li>
  )
}

export default function Footer() {
  return (
    <footer className="mx-0 mt-16 overflow-hidden bg-dark md:mt-[100px] text-[15px] text-white/50 md:mx-[25px] md:rounded-t-[30px]">
      <div className="border-b border-white/15">
        <nav className="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-x-6 gap-y-3 px-4 py-6 md:px-5 md:py-[30px]">
          {links.nav.map((l) => (
            <Link key={l.title} to={l.to} className="text-[15px] font-medium text-white uppercase hover:text-red">
              {l.title}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-10 md:grid-cols-2 md:px-5 md:py-[60px] lg:grid-cols-[1fr_220px_300px] lg:gap-8 xl:grid-cols-[835px_240px_1fr] xl:gap-0">
        <div className="md:col-span-2 lg:col-span-1">
          <div className="flex items-start gap-5">
            <Title>Каталог авто</Title>
            <Link to="/used" className="text-[13px] font-bold underline hover:text-white">Подробнее</Link>
            <Link to="/about" className="ml-auto hidden text-[14px] underline hover:text-white lg:mr-[110px] lg:block">Карта сайта</Link>
          </div>
          <ul className="mt-6 grid grid-cols-3 gap-x-4 gap-y-2 sm:grid-cols-4 lg:grid-flow-col lg:grid-cols-6 lg:grid-rows-6 lg:gap-y-[6px]">
            {links.brands.map((b) => (
              <li key={b}>
                <Link to={'/used?brand=' + encodeURIComponent(b)} className="underline hover:text-white">
                  {b}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Title>Кредит и рассрочка</Title>
          <ul className="mt-6 flex flex-col gap-[6px]">
            {links.credit.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="whitespace-nowrap underline hover:text-white">{l.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div id="contacts">
          <Title>Контакты</Title>
          <ul className="mt-6 flex flex-col gap-3">
            <Contact icon="phone">
              <span className="hidden cursor-default md:block">+7 (800) 551-94-31</span>
              <a href="tel:+78005519431" className="block md:hidden outline-none [-webkit-tap-highlight-color:transparent]">+7 (800) 551-94-31</a>
              <span className="hidden cursor-default md:block">+7 (495) 292-18-67</span>
              <a href="tel:+74952921867" className="block md:hidden outline-none [-webkit-tap-highlight-color:transparent]">+7 (495) 292-18-67</a>
            </Contact>
            <Contact icon="clock">Ежедневно с 08:00 до 21:00</Contact>
            <Contact icon="pin">
              Россия, Москва, 38КМ МКАД, 6Бс1
              <a href="https://yandex.ru/maps/?text=Москва, 38КМ МКАД, 6Бс1" target="_blank" rel="noreferrer" className="block text-red underline">
                Схема проезда
              </a>
            </Contact>
          </ul>
          <select className="mt-5 h-[40px] w-full cursor-pointer rounded-md bg-white/15 px-3 text-white outline-none">
            {links.cities.map((c) => (
              <option key={c} className="text-dark">{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-darker">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-4 py-6 md:px-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[18px] text-white">© 2021 Автосалон "ABC AUTO". Официальный дилер</p>
            <div className="mt-3 flex flex-wrap gap-x-8 gap-y-1 text-[13px] text-white/30">
              {links.legal.map((l) => (
                <Link key={l.title} to={l.to} className="underline hover:text-white">{l.title}</Link>
              ))}
            </div>
          </div>
          <p className="max-w-[590px] text-[13px] leading-snug text-white/25">
            Обращаем Ваше внимание на то, что данный интернет-сайт носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации.
          </p>
          <div className="flex w-[218px] shrink-0 flex-col overflow-hidden rounded-md bg-white text-dark">
            <div className="flex items-center gap-2 px-3 py-2">
              <span className="text-[24px] font-bold text-red">Я</span>
              <span className="text-[24px] text-star">★</span>
              <span className="text-[26px] font-bold">5,0</span>
              <span className="ml-auto text-[24px] text-line">☆</span>
              <span className="text-[11px] leading-tight text-muted">Ваша<br />оценка</span>
            </div>
            <span className="bg-gray py-0.5 text-center text-[10px] text-muted">Рейтинг организации в Яндексе</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
