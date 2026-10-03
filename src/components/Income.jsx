import Box from './Box'
import benefits from '../data/benefits.json'

export default function Income() {
  const t = benefits.income
  return (
    <Box className="mt-12 md:mt-[100px]">
      <h2 className="mb-8 text-center text-[30px] font-bold md:mb-[60px] md:text-[44px]">Таблица дохода</h2>
      <div className="no-scrollbar -mx-4 overflow-x-auto px-4 md:mx-0 md:px-0">
        <table className="w-full min-w-[760px] border-collapse text-left text-[15px]">
          <thead>
            <tr className="border-b border-line">
              <th className="h-[64px] w-1/5 px-6 font-bold uppercase">Класс автомобиля</th>
              {t.cols.map((c) => (
                <th key={c} className="w-1/5 border-l border-line px-6 font-bold uppercase">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {t.rows.map((r) => (
              <tr key={r.name} className="border-b border-line">
                <td className="h-[64px] px-6 font-bold">{r.name}</td>
                {r.values.map((v, i) => (
                  <td key={i} className="border-l border-line px-6">{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Box>
  )
}
