import Container from './Container'
import ReviewCard from './ReviewCard'
import SectionTitle from './SectionTitle'
import reviews from '../data/reviews.json'

export default function ReviewsSection({ title = 'Отзывы', count = 3 }) {
  return (
    <Container className="mt-20 lg:mt-[120px]">
      <SectionTitle title={title} />
      <div className="-mx-4 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-[30px] lg:overflow-visible lg:px-0">
        {reviews.slice(0, count).map((review) => (
          <div key={review.id} className="w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-auto">
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </Container>
  )
}
