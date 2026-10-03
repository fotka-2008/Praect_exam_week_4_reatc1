export default function RangeSlider({ label, valueLabel, min, max, step = 1, value, onChange, marks = [], dark = false }) {
  const percent = ((value - min) / (max - min)) * 100

  return (
    <div>
      <div className="mb-3 flex items-end justify-between gap-4 text-[15px] lg:text-[16px]">
        <span>{label}</span>
        <b className="text-[18px] lg:text-[20px]">{valueLabel}</b>
      </div>

      <div className="relative h-4">

        <div className={'absolute top-1/2 h-[5px] w-full -translate-y-1/2 rounded-full ' + (dark ? 'bg-[#4b4b4b]' : 'bg-[#dcdcdc]')} />

        <div className="absolute top-1/2 h-[5px] -translate-y-1/2 rounded-full bg-primary" style={{ width: percent + '%' }} />

        <div
          className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-primary shadow"
          style={{ left: percent + '%' }}
        />

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute -top-2 left-0 h-8 w-full cursor-pointer opacity-0"
        />
      </div>

      {marks.length > 0 && (
        <div className={'mt-3 flex justify-between text-[11px] font-medium ' + (dark ? 'text-[#9a9a9a]' : 'text-muted')}>
          {marks.map((mark) => (
            <span key={mark}>{mark}</span>
          ))}
        </div>
      )}
    </div>
  )
}

const thumbClasses =
  'pointer-events-none absolute inset-x-0 top-0 h-4 w-full appearance-none bg-transparent ' +
  '[&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary ' +
  '[&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-primary'

export function DoubleRangeSlider({ min, max, step, from, to, onChange }) {
  const left = ((from - min) / (max - min)) * 100
  const right = ((to - min) / (max - min)) * 100

  return (
    <div className="relative h-4">
      <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-[#dcdcdc]" />
      <div className="absolute top-1/2 h-1 -translate-y-1/2 bg-primary" style={{ left: left + '%', width: right - left + '%' }} />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={from}
        onChange={(e) => onChange(Math.min(Number(e.target.value), to - step), to)}
        className={thumbClasses}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={to}
        onChange={(e) => onChange(from, Math.max(Number(e.target.value), from + step))}
        className={thumbClasses}
      />
    </div>
  )
}
