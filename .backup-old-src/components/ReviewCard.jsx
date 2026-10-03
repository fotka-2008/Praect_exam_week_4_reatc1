import { useState } from 'react'
import { ChevronDownIcon, PlayIcon } from './Icons'

export default function ReviewCard({ review }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={
        'overflow-hidden rounded-[30px] transition-shadow ' +
        (open ? 'bg-white shadow-[0_10px_40px_rgba(0,0,0,0.12)]' : 'bg-[#f2f2f2]')
      }
    >

      <div className="relative flex h-[230px] items-center justify-center bg-ink lg:h-[291px]">
        {review.photo && open ? (
          <img src={'/images/' + review.photo} alt={review.name} className="absolute inset-0 h-full w-full object-cover" />
        ) : (

          <span className="h-[150px] w-[150px] overflow-hidden rounded-full opacity-15 lg:h-[164px] lg:w-[164px]">
            <img src="/images/logo.png" alt="" className="h-full w-auto max-w-none grayscale" />
          </span>
        )}
        <button
          aria-label="Смотреть видео"
          className="absolute flex h-[46px] w-[46px] items-center justify-center rounded-full bg-primary text-white shadow-[0_0_0_8px_rgba(203,1,1,0.35),0_0_30px_10px_rgba(203,1,1,0.5)]"
        >
          <PlayIcon className="h-3 w-3" />
        </button>
      </div>

      <div className="px-6 pt-4 pb-8 lg:px-[30px] lg:pb-10">
        <span className="mx-auto block h-1 w-1 rounded-full bg-[#bdbdbd]" />
        <h3 className="mt-3 text-[20px] font-medium lg:text-[22px]">{review.name}</h3>

        <p className={'mt-6 text-[15px] leading-[24px] text-[#6f6f6f] lg:text-[16px] ' + (open ? '' : 'line-clamp-5')}>{review.text}</p>
        <button
          onClick={() => setOpen(!open)}
          className="mt-3 flex h-9 w-[188px] items-center justify-between rounded-full bg-[#e2e2e2] px-5 text-[14px] font-medium hover:bg-[#d6d6d6]"
        >
          {open ? 'Свернуть' : 'Подробнее'}
          <ChevronDownIcon className={'h-5 w-5 transition-transform ' + (open ? 'rotate-180' : '')} />
        </button>
      </div>
    </div>
  )
}
