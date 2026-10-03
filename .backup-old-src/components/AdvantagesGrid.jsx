import Container from './Container'
export default function AdvantagesGrid({ title, items, columns = 4 }) {
  const grid = columns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'

  return (
    <Container className="mt-14 lg:mt-[70px]">
      <h2 className="text-[26px] font-medium lg:text-[32px]">{title}</h2>
      <div className={'mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:gap-[30px] ' + grid}>
        {items.map((item) => (
          <div key={item.text} className="flex min-h-[135px] items-center overflow-hidden rounded-[10px] bg-soft">
            {item.big ? (
              <span className="w-[135px] shrink-0 text-center text-[52px] font-bold tracking-tight text-primary lg:w-[136px] lg:text-[56px]">
                {item.big}
              </span>
            ) : (
              <img src={'/images/' + item.image} alt="" className="h-[135px] w-[124px] shrink-0 object-contain object-left-bottom" />
            )}
            <p className="py-4 pr-5 pl-3 text-[16px] leading-[24px] text-balance text-[#6f6f6f]">
              {item.title && (
                <b className="font-medium text-[#6f6f6f]">
                  {item.title}
                  <br />
                </b>
              )}
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </Container>
  )
}
