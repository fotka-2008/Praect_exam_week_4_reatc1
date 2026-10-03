import { useState } from 'react'
import { ChevronDownIcon } from './Icons'
export default function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-line">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-[18px] font-medium lg:text-[20px]"
      >
        {title}
        <ChevronDownIcon className={'h-6 w-6 shrink-0 transition-transform ' + (open ? 'rotate-180' : '')} />
      </button>
      {open && <div className="pb-6">{children}</div>}
    </div>
  )
}
