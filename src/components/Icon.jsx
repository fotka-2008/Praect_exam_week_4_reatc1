const ui = {
  heart: <path d="M12 20s-7-4.4-9.2-8.6C1.3 8.4 3 5 6.4 5c2 0 3.2 1.1 3.9 2.2h3.4C14.4 6.1 15.6 5 17.6 5 21 5 22.7 8.4 21.2 11.4 19 15.6 12 20 12 20z" transform="translate(0 -1)" />,
  compare: <><rect x="5" y="4" width="4" height="16" rx="2" /><rect x="13" y="10" width="4" height="10" rx="2" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></>,
  down: <path d="M6 9l6 6 6-6" />,
  up: <path d="M6 15l6-6 6 6" />,
  left: <path d="M15 6l-6 6 6 6" />,
  right: <path d="M9 6l6 6-6 6" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  burger: <path d="M3 6h18M3 12h18M3 18h18" />,
  pin: <><path d="M12 21s-6-5.7-6-11a6 6 0 0112 0c0 5.3-6 11-6 11z" /><circle cx="12" cy="10" r="2" /></>,
  clock: <><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></>,
  check: <path d="M5 12l4 4 10-10" />,
  eye: <><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  arrow: <path d="M4 12h15M13 6l6 6-6 6" />,
  list: <path d="M4 7h16M4 12h16M4 17h10" />,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" /></>,
  drive: <><circle cx="6" cy="6" r="2" /><circle cx="18" cy="6" r="2" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="18" r="2" /><path d="M8 6h8M8 18h8M12 6v12" /></>,
  gearbox: <><circle cx="6" cy="5" r="1.5" /><circle cx="12" cy="5" r="1.5" /><circle cx="18" cy="5" r="1.5" /><path d="M6 7v12M12 7v12M18 7v5H6" /></>,
  engine: <path d="M4 10h3l2-3h6v3h3l2 2v5h-2v2H8l-2-2H4z" />,
  fuel: <><rect x="5" y="4" width="9" height="16" rx="1" /><path d="M7 8h5M14 9h2l2 2v7a1.5 1.5 0 01-3 0v-3h-1" /></>,
  speed: <><path d="M4 16a8 8 0 1116 0" /><path d="M12 16l4-5" /></>,
  timer: <><circle cx="12" cy="13" r="7" /><path d="M12 13V9M10 3h4M18 6l1.5-1.5" /></>,
  phone: <path d="M6 3h3l2 5-2.5 1.5a11 11 0 006 6L16 13l5 2v3a2 2 0 01-2 2A16 16 0 014 5a2 2 0 012-2z" />,
  gift: <><rect x="4" y="9" width="16" height="11" rx="1" /><path d="M3 9h18M12 9v11M12 9c-2-4-6-4-6-1.5S12 9 12 9zM12 9c2-4 6-4 6-1.5S12 9 12 9z" /></>,
  play: <path d="M9 7l8 5-8 5z" />,
  user: <><circle cx="10" cy="8" r="4" /><path d="M3 20c0-4 3-6 7-6s7 2 7 6M19 8v6M16 11h6" /></>,
  refresh: <><path d="M20 11a8 8 0 00-14.5-4.5M4 13a8 8 0 0014.5 4.5" /><path d="M5 3v4h4M19 21v-4h-4" /></>,
  like: <path d="M7 11v9H4v-9zM7 11l4-7c1.5 0 2.5 1 2.2 2.6L12.6 10H19a2 2 0 012 2.3l-1.2 6A2 2 0 0117.8 20H7" />,
  percent: <><path d="M19 5L5 19" /><circle cx="7" cy="7" r="2.5" /><circle cx="17" cy="17" r="2.5" /></>,
  card: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h4" /></>,
  ruble: <path d="M8 20V4h6a4 4 0 010 8H6M6 16h9" />,
  tag: <><path d="M3 12V4h8l10 10-8 8z" /><circle cx="8" cy="9" r="1.5" /></>,
  wallet: <><rect x="3" y="6" width="18" height="14" rx="2" /><path d="M16 13h5M6 6l9-3 1 3" /></>,
  recycle: <path d="M7 19H4l3-5M17 19h3l-3-5M12 4l-2 4M12 4l2 4M7 14l-3-5 4-1M17 14l3-5-4-1M9 19h6" />,
  eagle: <><path d="M12 4v4M8 8c-4 0-5 4-5 6 2-1 4-1 5 0M16 8c4 0 5 4 5 6-2-1-4-1-5 0" /><path d="M8 8h8v6a4 4 0 01-8 0zM10 20h4M12 18v2" /></>,
  whatsapp: <><path d="M4 20l1.3-4A8 8 0 1112 20a8 8 0 01-4-1z" /><path d="M9 9c0 3 3 6 6 6l1-1.5-2-1-1 1c-1-.5-2-1.5-2.5-2.5l1-1-1-2z" /></>,
  award: <><circle cx="12" cy="10" r="6" /><path d="M9 15l-2 6 5-3 5 3-2-6M12 7l1 2h2l-1.5 1.5.5 2-2-1-2 1 .5-2L9 9h2z" /></>,
}

const solid = ['play']

export default function Icon({ name, className = 'w-6 h-6', strokeWidth = 2 }) {
  if (big[name]) return <BigIcon name={name} className={className} />
  const fill = solid.includes(name)
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={fill ? 'currentColor' : 'none'}
      stroke={fill ? 'none' : 'currentColor'}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {ui[name]}
    </svg>
  )
}

const R = '#CB0101'

const big = {
  zero: <><path d="M6 44h8l10 5h14l14-7c3-2 1-6-2-5l-12 4" /><path d="M14 41l7-3h12a3 3 0 010 6H24" /><path d="M6 40v12" /><circle cx="38" cy="18" r="12" stroke={R} strokeDasharray="3 2" /><text x="38" y="23" textAnchor="middle" fontSize="12" fontWeight="700" fill="#262626" stroke="none">0%</text></>,
  rate: <><path d="M6 44h8l10 5h14l14-7c3-2 1-6-2-5l-12 4" /><path d="M14 41l7-3h12a3 3 0 010 6H24" /><path d="M6 40v12" /><circle cx="38" cy="18" r="12" stroke={R} strokeDasharray="3 2" /><text x="38" y="22" textAnchor="middle" fontSize="9" fontWeight="700" fill="#262626" stroke="none">1,9%</text></>,
  operator: <><circle cx="32" cy="26" r="9" /><path d="M20 26a12 12 0 0124 0M22 28v4M42 28v4M42 32c0 4-4 6-8 6" /><path d="M10 40c4 8 10 12 16 13" stroke={R} /><path d="M54 24c-1-8-6-13-12-15" stroke={R} /><rect x="44" y="6" width="14" height="10" rx="2" stroke={R} /><path d="M18 56c2-6 8-9 14-9s12 3 14 9" /></>,
  docs: <><path d="M18 6h22l10 10v42H18z" /><path d="M40 6v10h10" /><path d="M24 22h12M24 30h20M24 36h20M24 42h20M24 48h14" stroke={R} /></>,
  tradein: <><path d="M14 22a20 20 0 0134-6M50 42a20 20 0 01-34 6" /><path d="M48 8v8h-8M16 56v-8h8" /><path d="M22 34l3-6h10l3 6v6H22z" stroke={R} /><path d="M30 28l3-5h9l3 5v5h-6" stroke={R} /></>,
  taxi: <><path d="M8 40v-8l6-10h28l8 10h6v8z" /><circle cx="18" cy="42" r="5" stroke={R} /><circle cx="46" cy="42" r="5" stroke={R} /><rect x="24" y="14" width="14" height="6" rx="1" /><path d="M24 32h4M32 32h4M28 36h4" stroke={R} /></>,
  manager: <><circle cx="32" cy="18" r="8" /><path d="M24 14c2-6 14-6 16 0" stroke={R} /><path d="M18 40c2-8 8-12 14-12s12 4 14 12" /><path d="M8 40h48v8H8zM14 48v8M50 48v8" /><rect x="36" y="36" width="10" height="4" stroke={R} /></>,
  tire: <><ellipse cx="38" cy="32" rx="12" ry="22" /><ellipse cx="38" cy="32" rx="6" ry="12" /><path d="M38 10H24c-7 0-12 10-12 22s5 22 12 22h14" /><path d="M16 18l4 3M14 26l4 2M14 34l4 1M14 42l4 0M17 49l4-2" /></>,
  osago: <><path d="M14 6h28l8 8v44H14z" /><path d="M20 34h18M20 40h12" /><path d="M24 22l3-5h10l3 5v4H24z" stroke={R} /><circle cx="44" cy="48" r="7" stroke={R} /><path d="M41 48l2 2 4-4" stroke={R} /></>,
  shield: <><path d="M32 6l20 6v16c0 14-9 24-20 30C21 52 12 42 12 28V12z" /><path d="M32 12l14 4v12c0 10-6 18-14 22-8-4-14-12-14-22V16z" stroke={R} /><circle cx="32" cy="29" r="7" stroke={R} /><path d="M29 29l2 2 4-4" stroke={R} /></>,
  handshake: <><path d="M6 30l10-10 8 4 8-4 8 4 8-4 10 10-12 12-6-2-6 6-6-6-6 2z" stroke={R} /><path d="M24 34l6 6M30 32l6 6M36 30l4 4" /><path d="M32 4v6M20 8l3 5M44 8l-3 5" stroke={R} /></>,
  stopwatch: <><circle cx="34" cy="36" r="18" /><circle cx="34" cy="36" r="13" stroke={R} /><path d="M34 28v8l5 4M30 12h8M34 12v6" /><path d="M6 30h8M4 38h10M8 46h8" /></>,
  'car-ruble': <><path d="M6 44v-8l6-8h26l8 8h6v8z" /><circle cx="16" cy="46" r="4" /><circle cx="42" cy="46" r="4" /><circle cx="46" cy="18" r="11" stroke={R} /><path d="M43 24V12h5a3 3 0 010 6h-7M41 21h6" stroke={R} /></>,
  driver: <><path d="M14 58V26a18 18 0 0136 0v32" /><circle cx="32" cy="22" r="7" /><path d="M20 50c0-8 5-14 12-14s12 6 12 14" /><circle cx="32" cy="48" r="6" stroke={R} /><path d="M8 58h48" /></>,
  monitor: <><rect x="8" y="10" width="48" height="32" rx="2" /><path d="M24 54h16M32 42v12" /><path d="M24 26l3-5h10l3 5v4H24z" stroke={R} /><path d="M14 34h6M44 34h6M14 18h4M46 18h4" stroke={R} /></>,
}

function BigIcon({ name, className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {big[name]}
    </svg>
  )
}
