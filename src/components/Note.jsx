export default function Note({ button = 'Получить предложение', light = false, className = '' }) {
  return (
    <p className={'text-[12px] leading-[1.35] ' + (light ? 'text-white/50 ' : 'text-muted ') + className}>
      Нажимая кнопку «<b className="font-medium">{button}</b>», Вы соглашаетесь с{' '}
      <span className="underline">политикой конфиденциальности</span> и{' '}
      <span className="underline">правилами обработки персональных данных</span>
    </p>
  )
}
