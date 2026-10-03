export default function Stars({ value, className = 'text-[16px]' }) {
  return (
    <span className={'tracking-[2px] whitespace-nowrap ' + className}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= Math.floor(value) ? 'text-star' : 'text-line'}>
          ★
        </span>
      ))}
    </span>
  )
}
