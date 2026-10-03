
export default function CarImage({ src, hue = 0, tint, alt = '', className = '' }) {
  const url = '/images/' + src

  if (tint) {
    return (
      <span className={(className.includes('absolute') ? '' : 'relative ') + 'inline-block ' + className}>
        <img src={url} alt={alt} className="block h-full w-full object-contain" loading="lazy" />
        <span
          className="absolute inset-0"
          style={{
            backgroundColor: tint,
            mixBlendMode: 'multiply',
            maskImage: `url(${url})`,
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskImage: `url(${url})`,
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
          }}
        />
      </span>
    )
  }

  const style = hue ? { filter: `hue-rotate(${hue}deg)` } : undefined
  return <img src={url} alt={alt} style={style} className={className} loading="lazy" />
}
