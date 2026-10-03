import Icon from './Icon'

export default function Colors({ colors, value, onChange, small = false }) {
  if (small) {
    return (
      <div className="flex gap-1.5">
        {colors.map((c, i) => (
          <button
            key={c.name}
            type="button"
            title={c.name}
            onClick={() => onChange(i)}
            className={'h-[9px] w-[9px] rounded-full border ' + (i === value ? 'border-red ring-1 ring-red' : 'border-line')}
            style={{ background: c.hex }}
          />
        ))}
      </div>
    )
  }
  return (
    <div>
      <p className="text-[16px]">Цвет: {colors[value].name}</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {colors.map((c, i) => (
          <button
            key={c.name}
            type="button"
            title={c.name}
            aria-label={c.name}
            onClick={() => onChange(i)}
            className="relative h-[30px] w-[30px] rounded-full border border-line"
            style={{ background: c.hex }}
          >
            {i === value && (
              <span className="absolute -top-1.5 -right-1.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-red text-white">
                <Icon name="check" className="h-3 w-3" strokeWidth={3} />
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
