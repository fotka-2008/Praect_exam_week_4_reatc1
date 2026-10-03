import Icon from './Icon'

export default function SortHead({ cols, sort, onSort, className }) {
  return (
    <div className={'hidden px-6 pb-3 text-[13px] text-muted md:grid ' + className}>
      {cols.map(([key, title]) => (
        <button
          key={title}
          type="button"
          disabled={!key}
          onClick={() => onSort(key)}
          className={'flex items-center gap-1 text-left ' + (sort.key === key ? 'text-dark' : '') + (key ? ' hover:text-dark' : '')}
        >
          {title}
          {key && <Icon name={sort.key === key && sort.dir < 0 ? 'up' : 'down'} className="h-3 w-3" strokeWidth={2.5} />}
        </button>
      ))}
    </div>
  )
}
