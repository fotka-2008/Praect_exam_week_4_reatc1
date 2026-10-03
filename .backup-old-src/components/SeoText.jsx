import Container from './Container'

export default function SeoText({ title, blocks }) {
  return (
    <Container className="mt-20 lg:mt-[70px]">
      <h2 className="text-[28px] font-medium lg:text-[40px]">{title}</h2>
      {blocks.map((block, index) => (
        <div key={index} className="mt-4 lg:mt-5">
          {block.subtitle && <h3 className="mt-8 mb-3 text-[22px] font-medium lg:text-[24px]">{block.subtitle}</h3>}
          <p className="text-[16px] leading-[24px] text-[#6f6f6f]">{block.text}</p>
        </div>
      ))}
    </Container>
  )
}
