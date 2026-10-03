import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from './Container'
import menu from '../data/menu.json'
import {
  BurgerIcon,
  ChevronDownIcon,
  ClockIcon,
  CloseIcon,
  CompareIcon,
  HeartIcon,
  PhoneIcon,
  PinIcon,
  SearchIcon,
  WhatsappIcon,
} from './Icons'

function Counter({ value }) {
  return (
    <span className="absolute -top-2.5 -right-3 rounded-full bg-primary px-1.5 text-[11px] leading-[17px] font-medium text-white">
      {value}
    </span>
  )
}

function HeaderIcons({ className = '' }) {
  return (
    <div className={'flex items-center gap-7 ' + className}>
      <Link to="/favorites" className="relative hover:text-primary" aria-label="Избранное">
        <HeartIcon className="h-7 w-7" />
        <Counter value={10} />
      </Link>
      <button className="relative hover:text-primary" aria-label="Сравнение">
        <CompareIcon className="h-7 w-7" />
        <Counter value={12} />
      </button>
      <button className="hover:text-primary" aria-label="Поиск">
        <SearchIcon className="h-6 w-6" />
      </button>
    </div>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState(null)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="relative z-40 bg-white">

      <div className="hidden bg-light text-[14px] text-[#6f6f6f] lg:block">
        <Container className="flex h-[43px] items-center">
          <span className="flex w-[460px] items-center gap-2">
            <PinIcon className="h-4 w-4" /> Россия, Москва, 38КМ МКАД, 6Бс1
          </span>
          <span className="flex items-center gap-2">
            <ClockIcon className="h-4 w-4" /> Время работы: с 08:00 до 21:00
          </span>
          <a href="https://wa.me/78005519431" className="ml-auto flex items-center gap-2 underline hover:text-ink">
            <WhatsappIcon className="h-5 w-5" /> Whatsapp
          </a>
        </Container>
      </div>

      <Container className="flex items-center gap-4 py-3 lg:pt-[22px] lg:pb-2">
        <button onClick={() => setMenuOpen(true)} aria-label="Открыть меню" className="shrink-0 hover:text-primary">
          <BurgerIcon className="h-6 w-7" />
        </button>

        <Link to="/" className="shrink-0">
          <img src="/images/logo.png" alt="ABC AUTO — официальный дилер" className="h-11 w-auto lg:h-[58px]" />
        </Link>

        <div className="hidden shrink-0 border-l border-[#cfcfcf] py-1 pl-5 text-[15px] leading-[19px] font-bold xl:block">
          <span className="rounded-full bg-primary px-1.5 text-white">10 лет</span> превосходим
          <br />
          ваши ожидания
        </div>

        <nav className="ml-auto hidden gap-4 text-[14px] whitespace-nowrap xl:ml-[35px] xl:flex">
          {menu.topLinks.map((link) => (
            <NavLink key={link.label} to={link.to} className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/favorites" className="relative ml-auto lg:hidden" aria-label="Избранное">
          <HeartIcon className="h-7 w-7" />
          <Counter value={10} />
        </Link>

        <div className="flex shrink-0 items-center gap-2.5 whitespace-nowrap lg:ml-auto xl:ml-5">
          <a href="tel:+78005519431" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white lg:h-8 lg:w-8">
            <PhoneIcon className="h-4 w-4" />
          </a>
          <div className="hidden text-right sm:block">
            <a href="tel:+78005519431" className="block text-[18px] leading-tight font-medium lg:text-[24px]">
              +7 (800) 551-94-31
            </a>
            <a href="tel:+74952921867" className="block text-[13px] lg:text-[16px]">
              +7 (495) 292-18-67
            </a>
          </div>
        </div>

        <button className="hidden h-[50px] shrink-0 rounded-[4px] bg-primary px-7 text-[16px] font-bold text-white uppercase hover:bg-primary-dark lg:block">
          Обратный звонок
        </button>
      </Container>

      <Container className="hidden h-[69px] items-center lg:flex">
        <nav className="flex flex-1 justify-between pr-14 xl:pr-[84px]">
          {menu.main.map((item) =>
            item.items ? (

              <div key={item.label} className="group relative">
                <button className="flex items-center gap-2 py-5 text-[15px] font-medium uppercase group-hover:text-primary xl:text-[17px]">
                  {item.label}
                  <ChevronDownIcon className="h-5 w-5 transition-transform group-hover:rotate-180" />
                </button>
                <div className="invisible absolute top-full left-0 z-50 min-w-[260px] rounded-b-lg bg-white py-2 opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition group-hover:visible group-hover:opacity-100">
                  {item.items.map((sub) => (
                    <Link key={sub.label} to={sub.to} className="block px-5 py-2.5 text-[15px] hover:bg-light hover:text-primary">
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  'flex items-center py-5 text-[15px] font-medium uppercase hover:text-primary xl:text-[17px] ' + (isActive ? 'text-primary' : '')
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>
        <HeaderIcons />
      </Container>

      {menuOpen && <div className="fixed inset-0 z-50 bg-black/50" onClick={closeMenu} />}

      <aside
        className={
          'fixed top-0 bottom-0 left-0 z-50 flex w-[320px] max-w-[88vw] flex-col gap-6 overflow-y-auto bg-white p-5 transition-transform duration-300 ' +
          (menuOpen ? 'translate-x-0' : '-translate-x-full')
        }
      >
        <div className="flex items-center justify-between">
          <img src="/images/logo.png" alt="ABC AUTO" className="h-10 w-auto" />
          <button onClick={closeMenu} aria-label="Закрыть меню" className="hover:text-primary">
            <CloseIcon className="h-7 w-7" />
          </button>
        </div>

        <nav className="flex flex-col">
          {menu.main.map((item) =>
            item.items ? (
              <div key={item.label} className="border-b border-line">
                <button
                  onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
                  className="flex w-full items-center justify-between py-3 text-left text-[15px] font-medium uppercase"
                >
                  {item.label}
                  <ChevronDownIcon className={'h-5 w-5 transition-transform ' + (openGroup === item.label ? 'rotate-180' : '')} />
                </button>
                {openGroup === item.label && (
                  <div className="flex flex-col pb-2 pl-3">
                    {item.items.map((sub) => (
                      <Link key={sub.label} to={sub.to} onClick={closeMenu} className="py-2 text-[15px] text-muted hover:text-primary">
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.label} to={item.to} onClick={closeMenu} className="border-b border-line py-3 text-[15px] font-medium uppercase">
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <nav className="flex flex-col gap-3 text-[15px]">
          {menu.topLinks.map((link) => (
            <Link key={link.label} to={link.to} onClick={closeMenu} className="hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-2 text-[14px] text-muted">
          <span className="flex items-center gap-2">
            <PinIcon /> Россия, Москва, 38КМ МКАД, 6Бс1
          </span>
          <span className="flex items-center gap-2">
            <ClockIcon /> Ежедневно с 08:00 до 21:00
          </span>
          <a href="tel:+78005519431" className="mt-2 text-[20px] font-medium text-ink">
            +7 (800) 551-94-31
          </a>
          <a href="tel:+74952921867" className="text-[16px] text-ink">
            +7 (495) 292-18-67
          </a>
          <button className="mt-3 h-12 rounded-[4px] bg-primary font-bold text-white uppercase">Обратный звонок</button>
        </div>
      </aside>
    </header>
  )
}
