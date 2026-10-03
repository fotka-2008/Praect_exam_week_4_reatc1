import ImagePlaceholder from './ImagePlaceholder'
export default function BenefitsIcons({ items, perRow = 5 }) {
  const width = perRow === 5 ? 'lg:w-1/5' : perRow === 4 ? 'lg:w-1/4' : 'lg:w-1/3'
  const rows = []
  for (let i = 0; i < items.length; i += perRow) {
    rows.push(items.slice(i, i + perRow))
  }

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:flex lg:flex-col lg:gap-[70px]">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="contents lg:flex lg:justify-center">
          {row.map((item, index) => (
            <div key={item.title} className={'relative flex flex-col items-center text-center ' + width}>
              {index > 0 && <span className="absolute top-10 -left-[47px] hidden h-px w-[94px] bg-[#c9c9c9] lg:block" />}
              <ImagePlaceholder label={'иконка: ' + item.icon} className="h-16 w-16 rounded-full lg:h-20 lg:w-20" />
              <p className="mt-5 max-w-[250px] text-[16px] leading-tight font-medium text-balance lg:mt-6 lg:text-[20px]">{item.title}</p>
              {item.text && <p className="mt-2 max-w-[360px] text-[14px] text-muted lg:text-[16px]">{item.text}</p>}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
