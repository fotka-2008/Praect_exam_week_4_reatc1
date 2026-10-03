import { useState } from 'react'
import Select from './Select'
import LeadForm from './LeadForm'
import Note from './Note'
import cars from '../data/cars.json'

const brands = [...new Set(cars.map((c) => c.brand))].sort()
const years = Array.from({ length: 16 }, (_, i) => 2021 - i)
const bodies = ['Седан', 'Хэтчбек', 'Лифтбек', 'Универсал', 'Внедорожник']

export default function TradeInForm() {
  const [brand, setBrand] = useState('Toyota')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [body, setBody] = useState('')
  const models = [...new Set(cars.filter((c) => c.brand === brand).map((c) => c.model))]
  const sel = 'bg-white md:!h-[64px]'

  return (
    <section className="mx-2 mt-16 md:mx-[25px] md:mt-[100px]">
      <div className="relative overflow-hidden rounded-[24px] bg-dark bg-cover bg-center md:rounded-[30px]" style={{ backgroundImage: 'url(/images/hero-trade-in.jpg)' }}>
        <div className="absolute inset-0 bg-black/40 md:bg-gradient-to-r md:from-black/50 md:via-black/10 md:to-transparent" />
        <div className="relative mx-auto max-w-[1440px] px-4 py-10 md:px-5 md:py-[80px]">
          <span className="block h-[14px] w-[64px] bg-red" />
          <h2 className="mt-2 text-[36px] font-bold text-white md:text-[60px]">Выгодный Trade-in</h2>
          <p className="text-[18px] font-medium text-white">Оценим вашу машину за 10 минут</p>
          <div className="mt-8 grid max-w-[755px] grid-cols-2 gap-4 md:mt-[72px] md:grid-cols-4">
            <Select value={brand} onChange={(v) => { setBrand(v); setModel('') }} options={brands} className={sel} />
            <Select value={model} onChange={setModel} options={models} placeholder="Модель" className={sel} />
            <Select value={year} onChange={setYear} options={years} placeholder="Год выпуска" className={sel} />
            <Select value={body} onChange={setBody} options={bodies} placeholder="Тип кузова" className={sel} />
          </div>
          <LeadForm
            withName={false}
            button="Обратный звонок"
            className="mt-4 grid max-w-[755px] gap-4 sm:grid-cols-2"
            inputClass="bg-white md:h-[64px]"
            btnClass="md:h-[64px]"
            note={<Note button="Получить предложение" light className="sm:col-span-2" />}
          />
        </div>
      </div>
    </section>
  )
}
