export default function DualRange({ count, from, to, onChange, marks }) {
  const max = count - 1
  const left = (from / max) * 100
  const right = (to / max) * 100
  return (
    <div>
      <div className="relative h-4">
        <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-line" />
        <div className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-red" style={{ left: left + '%', width: right - left + '%' }} />
        <input
          type="range"
          min={0}
          max={max}
          value={from}
          aria-label="Цена от"
          onChange={(e) => onChange(Math.min(Number(e.target.value), to - 1), to)}
          className="range absolute inset-0 w-full"
        />
        <input
          type="range"
          min={0}
          max={max}
          value={to}
          aria-label="Цена до"
          onChange={(e) => onChange(from, Math.max(Number(e.target.value), from + 1))}
          className="range absolute inset-0 w-full"
        />
      </div>
      <div className="mt-2 flex justify-between text-[11px] text-muted">
        {marks.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </div>
  )
}
