import { useState } from 'react'
import Thanks from './Thanks'
import { maskPhone, phoneOk } from '../utils'

export default function LeadForm({
  withName = true,
  button = 'Получить предложение',
  className = 'grid gap-4 md:grid-cols-3',
  inputClass = 'bg-gray',
  btnClass = '',
  phoneLabel = 'Ваш телефон',
  extra = null,
  note = null,
  onSent,
}) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function submit(e) {
    e.preventDefault()
    const next = {}
    if (withName && !name.trim()) next.name = true
    if (!phoneOk(phone)) next.phone = true
    setErrors(next)
    if (Object.keys(next).length) return
    setName('')
    setPhone('')
    setSent(true)
    if (onSent) onSent()
  }

  const base = 'h-[50px] w-full rounded-[4px] border px-4 text-[15px] outline-none placeholder:text-dark focus:border-dark/40 '

  return (
    <>
      <form onSubmit={submit} noValidate className={className}>
        {withName && (
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              setErrors({ ...errors, name: false })
            }}
            placeholder="Ваше имя"
            className={base + inputClass + (errors.name ? ' border-red' : ' border-transparent')}
          />
        )}
        <input
          value={phone}
          onChange={(e) => {
            setPhone(maskPhone(e.target.value))
            setErrors({ ...errors, phone: false })
          }}
          type="tel"
          placeholder={phoneLabel}
          className={base + inputClass + (errors.phone ? ' border-red' : ' border-transparent')}
        />
        {extra}
        <button type="submit" className={'h-[50px] rounded-[4px] bg-red px-6 text-[15px] font-bold text-white uppercase hover:bg-red-dark ' + btnClass}>
          {button}
        </button>
        {note}
      </form>
      {sent && <Thanks onClose={() => setSent(false)} />}
    </>
  )
}
