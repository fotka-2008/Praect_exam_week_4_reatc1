import Container from './Container'
import Breadcrumbs from './Breadcrumbs'

export default function PageTitle({ title, crumbs, children }) {
  return (
    <Container className="pt-6 lg:pt-10">
      <Breadcrumbs items={[{ label: 'Главная', to: '/' }, ...crumbs]} />
      <div className="flex flex-col gap-4 border-b border-line pt-4 pb-6 lg:flex-row lg:items-center lg:gap-14 lg:pt-6 lg:pb-8">
        <h1 className="text-[40px] leading-none font-bold sm:text-[56px] xl:text-[72px]">{title}</h1>
        {children}
      </div>
    </Container>
  )
}
