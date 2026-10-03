import Container from '../components/Container'
import Button from '../components/Button'

export default function NotFoundPage() {
  return (
    <Container className="py-24 text-center lg:py-40">
      <p className="text-[120px] leading-none font-bold text-primary">404</p>
      <h1 className="mt-4 text-[28px] font-bold lg:text-[40px]">Такой страницы нет</h1>
      <p className="mt-3 text-muted">Возможно, автомобиль уже продан или ссылка устарела.</p>
      <Button to="/taxi" className="mt-8 h-14 px-8">
        На главную
      </Button>
    </Container>
  )
}
