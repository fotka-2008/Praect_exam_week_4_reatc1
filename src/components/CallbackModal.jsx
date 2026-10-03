import Modal from './Modal'
import LeadForm from './LeadForm'
import Note from './Note'

export default function CallbackModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <h3 className="text-[28px] leading-tight font-bold">Обратный звонок</h3>
      <p className="mt-2 mb-6 text-[15px] text-muted">Оставьте номер — перезвоним в течение 5 минут</p>
      <LeadForm button="Перезвоните мне" className="grid gap-3" note={<Note button="Перезвоните мне" />} />
    </Modal>
  )
}
