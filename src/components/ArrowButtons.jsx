import { useState } from 'react'
import { Link } from 'react-router-dom'
import RequestModal from './RequestModal'

export default function ArrowButtons({ to, car, labels = ['Резерв онлайн', 'Купить', 'Подробнее'], tall = false }) {
  const [open, setOpen] = useState(null)
  const h = tall ? 'h-[46px] text-[13px] leading-tight' : 'h-[44px] text-[14px]'
  return (
    <div className="relative isolate flex">
      <button type="button" onClick={() => setOpen(labels[0])} className={'arrow-btn relative z-30 -mr-3 flex-1 bg-red px-2 font-medium text-white hover:brightness-110 ' + h}>
        {labels[0]}
      </button>
      <button type="button" onClick={() => setOpen(labels[1])} className={'arrow-btn-mid relative z-20 -mr-3 flex-1 bg-dark px-4 font-medium text-white hover:brightness-125 ' + h}>
        {labels[1]}
      </button>
      <Link to={to} className={'arrow-btn-mid relative z-10 flex flex-1 items-center justify-center bg-[#6e6e6e] px-4 text-center font-medium text-white hover:brightness-110 ' + h}>
        {labels[2]}
      </Link>
      {open && <RequestModal title={open.replace(/\n/g, ' ')} car={car} onClose={() => setOpen(null)} />}
    </div>
  )
}
