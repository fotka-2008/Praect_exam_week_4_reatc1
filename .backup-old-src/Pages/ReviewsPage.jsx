import { useState } from 'react'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import ReviewCard from '../components/ReviewCard'
import Button from '../components/Button'
import reviews from '../data/reviews.json'

export default function ReviewsPage() {
  const [visible, setVisible] = useState(6)

  return (
    <>
      <PageTitle title="Отзывы" crumbs={[{ label: 'Отзывы' }]} />

      <Container className="mt-10 lg:mt-[62px]">

        <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
          {reviews.slice(0, visible).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {visible < reviews.length && (
          <div className="mt-8 text-center">
            <Button onClick={() => setVisible(visible + 3)} className="h-16 w-full text-[16px] sm:w-[270px]">
              Показать еще
            </Button>
          </div>
        )}
      </Container>
      <div className="h-20 lg:h-[100px]" />
    </>
  )
}
