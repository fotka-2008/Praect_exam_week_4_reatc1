import { Link } from 'react-router-dom'
import { ChevronRightIcon } from './Icons'
export default function Breadcrumbs({ items, variant = 'slash', className = '' }) {
  if (variant === 'arrow') {
    return (
      <nav className={'flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] ' + className}>
        {items.map((item, index) => (
          <span key={item.label} className="flex items-center gap-3">
            {index > 0 && <ChevronRightIcon className="h-3 w-3 text-primary" />}
            {item.to ? (
              <Link to={item.to} className="hover:underline">
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    )
  }

  return (
    <nav className={'text-[12px] text-muted ' + className}>
      {items.map((item, index) => (
        <span key={item.label}>
          {index > 0 && ' / '}
          {item.to ? (
            <Link to={item.to} className="hover:text-primary">
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
