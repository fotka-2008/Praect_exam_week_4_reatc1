import { useState } from 'react'
import Icon from './Icon'
import VideoModal from './VideoModal'

function Play() {
  return (
    <span className="relative flex h-[44px] w-[44px] items-center justify-center rounded-full bg-red text-white shadow-[0_0_25px_12px_rgba(203,1,1,0.75)] transition group-hover:scale-110">
      <Icon name="play" className="ml-0.5 h-4 w-4" />
    </span>
  )
}

function Preview({ review, open }) {
  return (
    <button type="button" aria-label={'Смотреть видео: ' + review.name} className="group relative flex h-[240px] w-full items-center justify-center overflow-hidden bg-dark md:h-[290px]">
      {open ? (
        <img src={'/images/' + review.photo} alt={review.name} className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <span className="absolute h-[164px] w-[164px] overflow-hidden rounded-full opacity-[0.08]">
          <img src="/images/logo.png" alt="" className="h-[164px] max-w-none" style={{ filter: 'brightness(0) invert(1)' }} />
        </span>
      )}
      <Play />
    </button>
  )
}

function Body({ review, open, onToggle }) {
  return (
    <div className="relative px-6 pt-5 pb-7 md:px-[30px]">
      <span className="absolute top-3 left-1/2 h-1 w-1 rounded-full bg-muted/60" />
      <h3 className="text-[20px] font-medium">{review.name}</h3>
      <p className={'mt-5 text-[15px] leading-[1.6] text-muted ' + (open ? '' : 'line-clamp-5')}>{review.text}</p>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onToggle()
        }}
        className="mt-3 flex h-[36px] w-[188px] items-center justify-between rounded-full bg-[#E0E0E0] px-5 text-[13px] font-bold hover:bg-line">
        {open ? 'Свернуть' : 'Подробнее'}
        <Icon name={open ? 'up' : 'down'} className="h-4 w-4" strokeWidth={2.5} />
      </button>
    </div>
  )
}

export default function ReviewCard({ review }) {
  const [open, setOpen] = useState(false)
  const [video, setVideo] = useState(false)

  return (
    <div className="relative h-full">
      <div onClick={() => setVideo(true)} className={'h-full cursor-pointer overflow-hidden rounded-[30px] bg-[#F2F2F2] ' + (open ? 'invisible' : '')}>
        <Preview review={review} open={false} />
        <Body review={review} open={false} onToggle={() => setOpen(true)} />
      </div>
      {open && (
        <div onClick={() => setVideo(true)} className="absolute inset-x-0 top-0 z-30 cursor-pointer overflow-hidden rounded-t-[0px] rounded-b-[10px] bg-white shadow-card">
          <Preview review={review} open />
          <Body review={review} open onToggle={() => setOpen(false)} />
        </div>
      )}
      {video && <VideoModal review={review} onClose={() => setVideo(false)} />}
    </div>
  )
}
