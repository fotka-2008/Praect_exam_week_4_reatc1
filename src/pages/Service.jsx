import PageTitle from '../components/PageTitle'
import Box from '../components/Box'
import services from '../data/services.json'

export default function Service() {
  return (
    <>
      <PageTitle title="Техцентр" />
      <Box className="mt-10 md:mt-[50px]">
        <p className="max-w-[760px] text-[16px] leading-[1.5]">
          Специалисты нашего автосервиса имеют огромный опыт в обслуживании автомобилей разных производителей, новых и с пробегом, поэтому в короткие сроки способны обнаружить и исправить любую поломку. Все работы проводятся в соответствии с рекомендациями производителей.
        </p>
        <div className="mt-12 grid gap-x-10 gap-y-10 md:mt-[80px] md:grid-cols-2 lg:grid-cols-3 lg:gap-y-[60px]">
          {services.map((s) => (
            <div key={s.id}>
              <h3 className="flex items-center gap-5 text-[24px] font-medium">
                <span className="h-[8px] w-[32px] shrink-0 bg-red" />
                {s.title}
              </h3>
              <p className="mt-4 max-w-[420px] text-[16px] leading-[1.5] text-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </Box>
    </>
  )
}
