import Icon from './Icon'

export default function Arrows({ onPrev, onNext, prev = true, next = true }) {
  return (
    <div className="flex shrink-0 gap-2">
      <button
        type="button"
        onClick={onPrev}
        disabled={!prev}
        aria-label="Назад"
        className="flex h-12 w-12 items-center justify-center rounded-[6px] bg-white text-dark shadow-soft transition hover:bg-red hover:text-white disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-dark"
      >
        <Icon name="left" className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={!next}
        aria-label="Вперёд"
        className="flex h-12 w-12 items-center justify-center rounded-[6px] bg-red text-white transition hover:bg-red-dark disabled:opacity-40"
      >
        <Icon name="right" className="h-5 w-5" />
      </button>
    </div>
  )
}
