import { useState } from 'react'
import { CompareIcon, HeartIcon } from './Icons'
export default function CardActions({ round = false, liked = false, className = '' }) {
  const [isLiked, setIsLiked] = useState(liked)
  const [isCompared, setIsCompared] = useState(false)

  const base = round
    ? 'flex h-9 w-9 items-center justify-center rounded-full bg-white shadow'
    : 'flex h-7 w-7 items-center justify-center'

  const heart = (
    <button
      key="heart"
      aria-label="В избранное"
      onClick={() => setIsLiked(!isLiked)}
      className={base + (isLiked ? ' text-primary' : ' text-ink')}
    >
      <HeartIcon className="h-5 w-5" filled={isLiked || round} />
    </button>
  )

  const compare = (
    <button
      key="compare"
      aria-label="Сравнить"
      onClick={() => setIsCompared(!isCompared)}
      className={base + (isCompared ? ' text-primary' : ' text-ink')}
    >
      <CompareIcon className="h-5 w-5" />
    </button>
  )

  return <div className={'flex items-center gap-1.5 ' + className}>{round ? [compare, heart] : [heart, compare]}</div>
}
