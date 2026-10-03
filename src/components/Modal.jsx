import { useEffect } from 'react'
import Icon from './Icon'

export default function Modal({ onClose, children, full = false, className = 'max-w-[480px] bg-white p-8 md:p-10' }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className={'fixed inset-0 z-[100] flex items-center justify-center bg-black/80 ' + (full ? 'p-0 sm:p-4' : 'p-4')} onClick={onClose}>
      <div className={'relative w-full ' + (full ? 'rounded-none sm:rounded-[20px] ' : 'rounded-[20px] ') + className} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-dark hover:text-red"
        >
          <Icon name="close" className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  )
}
