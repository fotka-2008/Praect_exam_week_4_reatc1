import Box from './Box'

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar auctor tellus, id volutpat dui dictum vitae. Sed ac mauris nisi. Maecenas quis sollicitudin dolor, eget molestie dolor. Vivamus sed magna euismod, iaculis eros vitae, vehicula justo. Ut id consequat risus, vitae accumsan ligula. Proin egestas odio sit amet laoreet vulputate. Suspendisse vitae vestibulum quam. Vivamus lectus justo, bibendum at laoreet vel, rhoncus nec sem. Phasellus at mollis magna, in bibendum massa. Praesent malesuada sit amet nibh ut vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla iaculis a orci sit amet iaculis. Nulla in magna posuere nunc pharetra faucibus. Phasellus id enim libero.'

export default function Seo() {
  return (
    <Box className="mt-16 text-[16px] leading-[1.5] text-muted md:mt-[70px]">
      <h2 className="mb-4 text-[30px] font-bold text-dark md:text-[44px]">Заголовок</h2>
      <p>{lorem}</p>
      <h3 className="mt-6 mb-3 text-[24px] font-medium text-dark">Подзаголовок</h3>
      <p>{lorem}</p>
      <h3 className="mt-6 mb-3 text-[24px] font-medium text-dark">Подзаголовок</h3>
      <p>{lorem}</p>
    </Box>
  )
}
