import { Link } from 'react-router-dom'
const variants = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  gray: 'bg-[#e4e4e4] text-ink hover:bg-[#d6d6d6]',
  dark: 'bg-ink text-white hover:bg-black',
  white: 'bg-white text-primary hover:bg-light',
}
export default function Button({ children, variant = 'primary', className = '', to, ...props }) {
  const classes =
    'inline-flex items-center justify-center rounded-[4px] px-4 text-center font-bold whitespace-nowrap uppercase transition-colors ' +
    variants[variant] +
    ' ' +
    className

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
