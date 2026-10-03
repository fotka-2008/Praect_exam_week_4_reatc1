import Modal from './Modal'
import LeadForm from './LeadForm'
import Note from './Note'

export default function RequestModal({ title = 'Оставить заявку', car, onClose }) {
  return (
    <Modal onClose={onClose}>
      <h3 className="text-[28px] leading-tight font-bold">{title}</h3>
      {car && <p className="mt-2 text-[16px] font-medium">{car}</p>}
      <p className="mt-2 mb-6 text-[15px] text-muted">Менеджер свяжется с вами и ответит на все вопросы</p>
      <LeadForm button="Отправить заявку" className="grid gap-3" note={<Note button="Отправить заявку" />} />
    </Modal>
  )
}
