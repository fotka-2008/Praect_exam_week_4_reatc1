export default function ImagePlaceholder({ label, className = '' }) {
  return (
    <div
      className={
        'flex items-center justify-center rounded-lg border border-dashed border-[#bdbdbd] bg-[#e9e9e9] p-2 text-center text-[11px] leading-tight text-muted ' +
        className
      }
    >
      {label}
    </div>
  )
}
