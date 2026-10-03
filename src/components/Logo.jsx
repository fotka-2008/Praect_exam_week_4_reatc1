export default function Logo({ item, small = false }) {
  if (item.logo) return <img src={'/images/' + item.logo} alt={item.name} className={small ? 'max-h-6' : 'max-h-12'} />
  return (
    <span
      className={'text-center leading-tight font-bold tracking-tight ' + (small ? 'text-[11px]' : 'text-[22px] md:text-[26px]')}
      style={{ color: item.color }}
    >
      {item.label}
    </span>
  )
}
