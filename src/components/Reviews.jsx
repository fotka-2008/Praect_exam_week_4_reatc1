import Box from './Box'
import ReviewCard from './ReviewCard'
import reviews from '../data/reviews.json'

export default function Reviews({ className = 'mt-16 md:mt-[80px]' }) {
  return (
    <Box className={className}>
      <h2 className="mb-6 text-[30px] font-bold md:mb-10 md:text-[44px]">Отзывы</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-[22px]">
        {reviews.slice(0, 3).map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>
    </Box>
  )
}
