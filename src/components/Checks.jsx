import Icon from './Icon'

export default function Checks({ items, className = '' }) {
  return (
    <ul className={'grid max-w-[520px] gap-x-8 gap-y-5 sm:grid-cols-2 ' + className}>
      {items.map((t) => (
        <li key={t} className="flex items-center gap-4 text-[16px] leading-tight">
          <span className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-red text-white">
            <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full border-2 border-white">
              <Icon name="check" className="h-5 w-5" strokeWidth={3} />
            </span>
          </span>
          <span className="max-w-[160px]">{t}</span>
        </li>
      ))}
    </ul>
  )
}
