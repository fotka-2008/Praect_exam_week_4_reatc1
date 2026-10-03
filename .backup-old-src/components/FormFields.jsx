import { ChevronDownIcon } from './Icons'

const looks = {
  white: 'border border-line bg-white',
  gray: 'border border-[#e4e4e4] bg-light',
}

export function Input({ look = 'white', className = '', ...props }) {
  return (
    <input
      className={
        'h-14 w-full rounded-[4px] px-4 text-[15px] text-ink outline-none placeholder:text-ink focus:border-primary lg:h-16 ' +
        looks[look] +
        ' ' +
        className
      }
      {...props}
    />
  )
}

export function Select({ options = [], placeholder, look = 'white', className = '', ...props }) {

  if (props.value === undefined && props.defaultValue === undefined) {
    props.defaultValue = ''
  }

  return (
    <div className={'relative ' + className}>
      <select
        className={
          'h-14 w-full cursor-pointer appearance-none rounded-[4px] pr-10 pl-4 text-[15px] text-ink outline-none focus:border-primary lg:h-16 ' +
          looks[look]
        }
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) =>
          typeof option === 'string' ? (
            <option key={option}>{option}</option>
          ) : (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ),
        )}
      </select>
      <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2" />
    </div>
  )
}

export function Agreement({ button = 'Получить предложение', className = '' }) {
  return (
    <p className={'text-[12px] leading-snug text-muted ' + className}>
      Нажимая кнопку «{button}», Вы даете согласие на обработку своих{' '}
      <a href="#" className="underline">
        персональных данных
      </a>
    </p>
  )
}

