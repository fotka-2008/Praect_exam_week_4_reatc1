export default function Range({ min, max, step = 1, value, onChange, marks, dark = false }) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div>
      <div className="relative h-4">
        <div className={'absolute top-1/2 h-1 w-full -translate-y-1/2 rounded-full ' + (dark ? 'bg-white/25' : 'bg-line')} />
        <div className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-red" style={{ width: pct + '%' }} />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="range absolute inset-0 w-full"
          style={{ pointerEvents: 'auto' }}
        />
      </div>
      {marks && (
        <div className={'mt-1.5 flex justify-between text-[11px] font-medium ' + (dark ? 'text-white/60' : 'text-muted')}>
          {marks.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      )}
    </div>
  )
}
