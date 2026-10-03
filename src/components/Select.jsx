import Icon from './Icon'

export default function Select({ value, onChange, options, placeholder, className = 'bg-white border border-line', error = false }) {
  return (
    <label className={'relative block h-[50px] rounded-[4px] md:h-[64px] ' + className + (error ? ' !border-red' : '')}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-full w-full cursor-pointer appearance-none bg-transparent pr-10 pl-4 text-[15px] outline-none"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((o) => {
          const v = typeof o === 'object' ? o.value : o
          const t = typeof o === 'object' ? o.title : o
          return (
            <option key={v} value={v}>
              {t}
            </option>
          )
        })}
      </select>
      <Icon name="down" className="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2" />
    </label>
  )
}
