import { Link } from 'react-router-dom'
const arrow = 'polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%)'
const arrowIn = 'polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%, 12px 50%)'

export default function ArrowButtons({ to = '#' }) {
  const base = 'flex h-12 flex-1 items-center justify-center text-[13px] font-medium text-white sm:text-[14px]'

  return (
    <div className="flex">
      <button
        onClick={() => alert('Автомобиль зарезервирован')}
        className={base + ' z-[3] rounded-l-[4px] bg-primary pr-2 hover:brightness-110'}
        style={{ clipPath: arrow }}
      >
        Резерв онлайн
      </button>
      <button className={base + ' z-[2] -ml-2 bg-ink pl-3 hover:brightness-125'} style={{ clipPath: arrowIn }}>
        Купить
      </button>
      <Link to={to} className={base + ' z-[1] -ml-2 bg-[#777] pl-3 hover:brightness-110'} style={{ clipPath: arrowIn }}>
        Подробнее
      </Link>
    </div>
  )
}
