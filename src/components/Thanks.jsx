import Modal from './Modal'
import Icon from './Icon'

export default function Thanks({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <div className="text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red text-white">
          <Icon name="check" className="h-8 w-8" strokeWidth={3} />
        </div>
        <h3 className="text-[28px] font-bold">Спасибо!</h3>
        <p className="mt-2 text-[18px] text-muted">Мы вам перезвоним</p>
        <button type="button" onClick={onClose} className="mt-7 h-[50px] w-full rounded-md bg-red font-bold text-white uppercase hover:bg-red-dark">
          Хорошо
        </button>
      </div>
    </Modal>
  )
}
