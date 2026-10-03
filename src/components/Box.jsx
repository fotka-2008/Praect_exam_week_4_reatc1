export default function Box({ children, className = '', id }) {
  return (
    <div id={id} className={'mx-auto w-full max-w-[1440px] px-4 md:px-5 ' + className}>
      {children}
    </div>
  )
}
