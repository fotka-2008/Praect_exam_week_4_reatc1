import { useState } from 'react'
import PageTitle from '../components/PageTitle'
import Box from '../components/Box'
import ReviewCard from '../components/ReviewCard'
import More from '../components/More'
import reviews from '../data/reviews.json'

export default function Reviews() {
  const [count, setCount] = useState(6)
  return (
    <>
      <PageTitle title="Отзывы" />
      <Box className="mt-10 md:mt-[60px]">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-[22px] lg:gap-y-[30px]">
          {reviews.slice(0, count).map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>
        {count < reviews.length && <More onClick={() => setCount(count + 3)} />}
      </Box>
    </>
  )
}
