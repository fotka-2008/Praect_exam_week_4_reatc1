import Icon from './Icon'

export default function CardActions({ id, store, round = false, reverse = false }) {
  const fav = store.favs.includes(id)
  const cmp = store.compare.includes(id)
  const btn = round
    ? 'flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white shadow-soft '
    : 'flex h-7 w-7 items-center justify-center '

  const heart = (
    <button
      key="fav"
      type="button"
      onClick={(e) => {
        e.preventDefault()
        store.toggleFav(id)
      }}
      aria-label={fav ? 'Убрать из избранного' : 'В избранное'}
      title={fav ? 'Убрать из избранного' : 'В избранное'}
      className={btn + (fav ? 'text-red' : 'text-dark hover:text-red')}
    >
      <svg viewBox="0 0 24 24" className={round ? 'h-5 w-5' : 'h-6 w-6'} fill={fav || round ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
        <path d="M12 19s-7-4.4-9.2-8.6C1.3 7.4 3 4 6.4 4c2.4 0 3.8 1.6 5.6 3.6C13.8 5.6 15.2 4 17.6 4 21 4 22.7 7.4 21.2 10.4 19 14.6 12 19 12 19z" />
      </svg>
    </button>
  )

  const compare = (
    <button
      key="cmp"
      type="button"
      onClick={(e) => {
        e.preventDefault()
        store.toggleCompare(id)
      }}
      aria-label={cmp ? 'Убрать из сравнения' : 'Сравнить'}
      title={cmp ? 'Убрать из сравнения' : 'Сравнить'}
      className={btn + (cmp ? 'text-red' : 'text-dark hover:text-red')}
    >
      <Icon name="compare" className={round ? 'h-5 w-5' : 'h-6 w-6'} />
    </button>
  )

  return <div className="relative z-50 flex items-center gap-1.5">{reverse ? [compare, heart] : [heart, compare]}</div>
}
