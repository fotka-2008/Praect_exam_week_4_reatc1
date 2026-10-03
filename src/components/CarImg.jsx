export default function CarImg({ car, src, hue, tint, className = '' }) {
  const image = '/images/' + (src || car.image)
  const h = hue === undefined ? car?.hue : hue
  return (
    <span className={(className.includes('absolute') ? 'block ' : 'relative inline-block ') + className}>
      <img
        src={image}
        alt={car?.name || ''}
        className="h-full w-full object-contain"
        style={h ? { filter: 'hue-rotate(' + h + 'deg)' } : undefined}
      />
      {tint && (
        <span
          className="absolute inset-0"
          style={{
            backgroundColor: tint,
            mixBlendMode: 'multiply',
            WebkitMaskImage: 'url(' + image + ')',
            maskImage: 'url(' + image + ')',
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
          }}
        />
      )}
    </span>
  )
}
