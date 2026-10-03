import { useState } from 'react'
import Box from './Box'
import Range from './Range'
import RequestModal from './RequestModal'
import { monthly, num } from '../utils'

export default function CreditBar({ car }) {
  const [down, setDown] = useState(20)
  const [term, setTerm] = useState(24)
  const [open, setOpen] = useState(false)
  const pay = monthly(car.price * (1 - down / 100), term)

  return (
    <Box className="mt-8 md:mt-[48px]">
      <div className="grid items-center gap-8 rounded-[10px] bg-dark px-6 py-8 text-white md:px-10 lg:grid-cols-[1fr_1fr_210px_260px] lg:gap-10 lg:py-9 xl:gap-14">
        <div>
          <div className="mb-3 flex items-end justify-between">
            <span className="text-[16px]">Первоначальный взнос</span>
            <b className="text-[20px] font-bold">{down}%</b>
          </div>
          <Range min={0} max={80} value={down} onChange={setDown} marks={[0, 20, 40, 60, 80]} dark />
        </div>
        <div>
          <div className="mb-3 flex items-end justify-between">
            <span className="text-[16px]">Срок кредита</span>
            <b className="text-[20px] font-bold">{term} мес.</b>
          </div>
          <Range min={6} max={84} step={6} value={term} onChange={setTerm} marks={[6, 12, 24, 36, 48, 60, 72, 84]} dark />
        </div>
        <div>
          <p className="text-[16px]">Ежемесячный платеж *</p>
          <p className="text-[26px] leading-tight font-bold">{num(pay)} ₽/мес.</p>
          <p className="text-[11px] text-white/50">* Предварительный расчет</p>
        </div>
        <button type="button" onClick={() => setOpen(true)} className="h-[64px] rounded-[4px] bg-red px-4 text-[16px] font-bold uppercase hover:bg-red-dark">
          Подать заявку на кредит
        </button>
      </div>
      {open && <RequestModal title="Заявка на кредит" car={car.name + ' — ' + num(pay) + ' ₽/мес.'} onClose={() => setOpen(false)} />}
    </Box>
  )
}
