import Modal from './Modal'

export default function VideoModal({ review, onClose }) {
  return (
    <Modal onClose={onClose} full className="max-w-[960px] overflow-hidden bg-black">
      <video src={review.video} controls autoPlay playsInline className="w-full" />
      <p className="px-4 py-3 text-[16px] font-medium text-white sm:px-6 sm:py-4">{review.name}</p>
    </Modal>
  )
}
