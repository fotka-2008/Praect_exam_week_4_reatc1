import equipment from '../data/equipment.json'

export default function Equipment({ lines = false, limit = 99 }) {
  return (
    <div className="grid gap-8 md:grid-cols-3 md:gap-10">
      {equipment.map((g) => (
        <div key={g.title} className={lines ? 'border-b border-line pb-6' : ''}>
          <h4 className={'text-[18px] font-medium ' + (lines ? 'border-b border-line pb-4' : '')}>{g.title}</h4>
          <ul className="mt-4 flex flex-col gap-1 text-[15px]">
            {g.items.slice(0, limit).map((it) => (
              <li key={it} className="relative pl-5 before:absolute before:top-[9px] before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-red">
                {it}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
