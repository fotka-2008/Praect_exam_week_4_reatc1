import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from './Icon'
import CallbackModal from './CallbackModal'
import Search from './Search'
import menu from '../data/menu.json'
import cars from '../data/cars.json'

const catalog = cars
  .filter((c) => c.type === 'new')
  .map((c) => ({ title: c.name, to: '/new/' + c.id }))

function itemsOf(m) {
  return m.catalog ? catalog : m.items
}

function Badge({ n }) {
  return (
    <span className="absolute -top-2 -right-2 flex h-[18px] min-w-[22px] items-center justify-center rounded-full bg-red px-1 text-[11px] font-bold text-white">
      {n}
    </span>
  )
}

export default function Header({ favs, compare }) {
  const [burger, setBurger] = useState(false)
  const [drop, setDrop] = useState(null)
  const [search, setSearch] = useState(false)
  const [call, setCall] = useState(false)
  const [sub, setSub] = useState(null)
  const location = useLocation()

  const [page, setPage] = useState(location.pathname + location.search)

  if (page !== location.pathname + location.search) {
    setPage(location.pathname + location.search)
    setBurger(false)
    setDrop(null)
    setSearch(false)
  }

  useEffect(() => {
    document.body.style.overflow = burger ? 'hidden' : ''
  }, [burger])

  return (
    <header className="relative z-50 bg-white">
      <div className="hidden bg-gray md:block">
        <div className="mx-auto flex h-[42px] max-w-[1440px] items-center justify-between px-5 text-[14px] text-dark/80">
          <span className="flex items-center gap-2">
            <Icon name="pin" className="h-4 w-4 text-muted" />
            Россия, Москва, 38КМ МКАД, 6Бс1
          </span>
          <span className="flex items-center gap-2">
            <Icon name="clock" className="h-4 w-4 text-muted" />
            Время работы: с 08:00 до 21:00
          </span>
          <a href="https://wa.me/78005519431" target="_blank" rel="noreferrer" className="flex items-center gap-2 underline">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-dark/70 text-white">
              <Icon name="whatsapp" className="h-3.5 w-3.5" />
            </span>
            Whatsapp
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1440px] items-center gap-3 px-4 py-3 md:px-5 lg:h-[100px] lg:py-0">
        <button type="button" onClick={() => setBurger(true)} aria-label="Меню" className="shrink-0 text-dark hover:text-red">
          <Icon name="burger" className="h-8 w-8" strokeWidth={2.5} />
        </button>
        <Link to="/" className="shrink-0">
          <img src="/images/logo.png" alt="ABC AUTO" className="h-[44px] w-auto md:h-[58px]" />
        </Link>
        <div className="ml-2 hidden border-l border-line pl-4 text-[15px] leading-tight font-medium xl:block">
          <span className="rounded-full bg-red px-2 text-white">10 лет</span> превосходим
          <br />
          ваши ожидания
        </div>
        <nav className="ml-auto hidden items-center gap-4 text-[15px] xl:ml-6 xl:flex">
          {menu.top.map((m) => (
            <Link key={m.title} to={m.to} className={(m.red ? 'text-red ' : '') + 'hover:text-red'}>
              {m.title}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <span className="hidden h-9 w-9 cursor-default items-center justify-center rounded-full bg-red text-white md:flex">
            <Icon name="phone" className="h-5 w-5" />
          </span>
          <div className="hidden text-right md:block">
            <span className="block cursor-default text-[24px] leading-tight font-medium">+7 (800) 551-94-31</span>
            <span className="block cursor-default text-[16px] leading-tight">+7 (495) 292-18-67</span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setCall(true)}
          className="hidden h-[50px] shrink-0 rounded-[6px] bg-red px-7 text-[16px] font-bold text-white uppercase hover:bg-red-dark lg:block"
        >
          Обратный звонок
        </button>
        <div className="flex items-center gap-4 lg:hidden">
          <a href="tel:+78005519431" aria-label="Позвонить" className="flex h-9 w-9 items-center justify-center rounded-full bg-red text-white md:hidden outline-none [-webkit-tap-highlight-color:transparent]">
            <Icon name="phone" className="h-5 w-5" />
          </a>
          <Link to="/favorites" aria-label="Избранное" className="relative">
            <Icon name="heart" />
            <Badge n={favs} />
          </Link>
          <button type="button" onClick={() => setSearch(!search)} aria-label="Поиск">
            <Icon name="search" />
          </button>
        </div>
      </div>

      <div className="mx-auto hidden h-[57px] max-w-[1440px] items-center px-5 lg:flex">
        <nav className="flex flex-1 items-center justify-between pr-14">
          {menu.main.map((m, i) => (
            <div key={m.title} className="relative" onMouseEnter={() => setDrop(i)} onMouseLeave={() => setDrop(null)}>
              {m.to ? (
                <Link to={m.to} className="flex h-[57px] items-center text-[16px] font-medium uppercase hover:text-red">
                  {m.title}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => setDrop(drop === i ? null : i)}
                  className={'flex h-[57px] items-center gap-2 text-[16px] font-medium uppercase hover:text-red ' + (drop === i ? 'text-red' : '')}
                >
                  {m.title}
                  <Icon name="down" className={'h-4 w-4 transition ' + (drop === i ? 'rotate-180' : '')} />
                </button>
              )}
              {drop === i && !m.to && (
                <div className="absolute top-full left-0 z-50 max-h-[420px] min-w-[260px] overflow-y-auto rounded-b-[12px] bg-white py-3 shadow-card">
                  {itemsOf(m).map((it) => (
                    <Link key={it.title + it.to} to={it.to} className="block px-5 py-2 text-[15px] hover:bg-soft hover:text-red">
                      {it.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-8">
          <Link to="/favorites" aria-label="Избранное" className="relative hover:text-red">
            <Icon name="heart" className="h-7 w-7" />
            <Badge n={favs} />
          </Link>
          <span title="Сравнение" className="relative">
            <Icon name="compare" className="h-7 w-7" />
            <Badge n={compare} />
          </span>
          <button type="button" onClick={() => setSearch(!search)} aria-label="Поиск" className="hover:text-red">
            <Icon name="search" className="h-7 w-7" />
          </button>
        </div>
      </div>

      {search && <Search onClose={() => setSearch(false)} />}

      {burger && (
        <div className="fixed inset-0 z-[90] bg-black/60" onClick={() => setBurger(false)}>
          <div className="h-full w-[340px] max-w-[88vw] overflow-y-auto bg-white p-6" onClick={(e) => e.stopPropagation()}>
            <div className="mb-6 flex items-center justify-between">
              <img src="/images/logo.png" alt="ABC AUTO" className="h-[44px]" />
              <button type="button" onClick={() => setBurger(false)} aria-label="Закрыть">
                <Icon name="close" className="h-7 w-7" />
              </button>
            </div>
            {menu.main.map((m, i) => (
              <div key={m.title} className="border-b border-line">
                {m.to ? (
                  <Link to={m.to} className="block py-3 text-[16px] font-medium uppercase">{m.title}</Link>
                ) : (
                  <>
                    <button type="button" onClick={() => setSub(sub === i ? null : i)} className="flex w-full items-center justify-between py-3 text-[16px] font-medium uppercase">
                      {m.title}
                      <Icon name="down" className={'h-4 w-4 transition ' + (sub === i ? 'rotate-180' : '')} />
                    </button>
                    {sub === i && (
                      <div className="pb-3">
                        {itemsOf(m).map((it) => (
                          <Link key={it.title + it.to} to={it.to} className="block py-1.5 pl-3 text-[15px] text-dark/80 hover:text-red">
                            {it.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              {menu.top.map((m) => (
                <Link key={m.title} to={m.to} className={'py-1 text-[15px] ' + (m.red ? 'text-red' : '')}>
                  {m.title}
                </Link>
              ))}
              <Link to="/insurance" className="py-1 text-[15px]">Страхование</Link>
              <Link to="/favorites" className="py-1 text-[15px]">Избранное ({favs})</Link>
            </div>
            <span className="mt-6 hidden cursor-default text-[22px] font-medium md:block">+7 (800) 551-94-31</span>
            <a href="tel:+78005519431" className="mt-6 block text-[22px] font-medium md:hidden outline-none [-webkit-tap-highlight-color:transparent]">+7 (800) 551-94-31</a>
            <span className="hidden cursor-default text-[15px] md:block">+7 (495) 292-18-67</span>
            <a href="tel:+74952921867" className="block text-[15px] md:hidden outline-none [-webkit-tap-highlight-color:transparent]">+7 (495) 292-18-67</a>
            <button
              type="button"
              onClick={() => {
                setBurger(false)
                setCall(true)
              }}
              className="mt-5 h-[50px] w-full rounded-[6px] bg-red font-bold text-white uppercase"
            >
              Обратный звонок
            </button>
          </div>
        </div>
      )}

      {call && <CallbackModal onClose={() => setCall(false)} />}
    </header>
  )
}
