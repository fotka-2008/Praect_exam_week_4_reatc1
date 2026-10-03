import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'

export default function Crumbs({ items, light = false, arrows = false }) {
  const color = light ? 'text-white' : arrows ? 'text-dark' : 'text-dark/70'
  return (
    <nav className={'flex flex-wrap items-center gap-x-2 gap-y-1 ' + (arrows ? 'text-[14px] ' : 'text-[12px] ') + color}>
      {items.map((it, i) => (
        <Fragment key={it.title}>
          {i > 0 &&
            (arrows ? <Icon name="right" className="h-3 w-3 text-red" strokeWidth={3} /> : <span>/</span>)}
          {it.to ? (
            <Link to={it.to} className="hover:text-red">
              {it.title}
            </Link>
          ) : (
            <span className={arrows && !light ? 'text-dark/60' : ''}>{it.title}</span>
          )}
        </Fragment>
      ))}
    </nav>
  )
}
