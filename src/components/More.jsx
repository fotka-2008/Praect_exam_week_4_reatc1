export default function More({ onClick }) {
  return (
    <div className="mt-8 flex justify-center">
      <button
        type="button"
        onClick={onClick}
        className="h-[64px] w-full max-w-[270px] rounded-[4px] bg-red text-[16px] font-bold text-white uppercase hover:bg-red-dark"
      >
        Показать еще
      </button>
    </div>
  )
}
