import { ChevronLeftIcon, ChevronRightIcon } from './Icons'

export default function SectionTitle({ children, title, center = false, className = '' }) {
  return (
    <div className={'mb-6 flex items-center gap-4 lg:mb-10 ' + (center ? 'justify-center text-center ' : 'justify-between ') + className}>
      <h2 className="text-[28px] leading-tight font-bold sm:text-[36px] xl:text-[44px]">{title}</h2>
      {children}
    </div>
  )
}

export function SliderArrows({ onPrev, onNext, className = '' }) {
  return (
    <div className={'flex shrink-0 gap-3 ' + className}>
      <button
        onClick={onPrev}
        aria-label="Назад"
        className="flex h-12 w-12 items-center justify-center rounded-[4px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:bg-light"
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
      <button
        onClick={onNext}
        aria-label="Вперёд"
        className="flex h-12 w-12 items-center justify-center rounded-[4px] bg-primary text-white hover:bg-primary-dark"
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  )
}
