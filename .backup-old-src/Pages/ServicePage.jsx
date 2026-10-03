import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import services from '../data/services.json'

export default function ServicePage() {
  return (
    <>
      <PageTitle title="Техцентр" crumbs={[{ label: 'Техцентр' }]} />

      <Container className="mt-10 lg:mt-[60px]">
        <p className="max-w-[760px] text-[16px] leading-[24px]">
          Специалисты нашего автосервиса имеют огромный опыт в обслуживании автомобилей разных производителей, новых и с пробегом, поэтому
          в короткие сроки способны обнаружить и исправить любую поломку. Все работы проводятся в соответствии с рекомендациями
          производителей.
        </p>

        <div className="mt-14 grid gap-x-[60px] gap-y-10 sm:grid-cols-2 lg:mt-[90px] lg:grid-cols-3 lg:gap-y-[50px]">
          {services.map((service) => (
            <div key={service.title}>
              <h3 className="flex items-center gap-5 text-[22px] leading-tight font-medium lg:text-[24px]">
                <span className="h-[7px] w-8 shrink-0 bg-primary" />
                {service.title}
              </h3>
              <p className="mt-5 max-w-[420px] text-[16px] leading-[24px] text-[#6f6f6f]">{service.text}</p>
            </div>
          ))}
        </div>
      </Container>
      <div className="h-20 lg:h-[100px]" />
    </>
  )
}
