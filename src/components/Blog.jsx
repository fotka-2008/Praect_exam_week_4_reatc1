import Slider from './Slider'
import blog from '../data/blog.json'

export default function Blog() {
  return (
    <Slider
      title="Блог"
      extra={<span className="rounded-[6px] bg-red px-6 py-1.5 text-[16px] text-white">Все статьи</span>}
      items={blog}
      per={[1, 2, 4]}
      render={(p) => (
        <article className="group cursor-pointer">
          <div className="overflow-hidden rounded-[20px]">
            <img src={'/images/' + p.image} alt={p.title} className="h-[200px] w-full object-cover transition duration-500 group-hover:scale-105" />
          </div>
          <p className="mt-6 text-[14px] text-muted">{p.date}</p>
          <h3 className="mt-2 text-[16px] leading-tight font-bold group-hover:text-red">{p.title}</h3>
        </article>
      )}
    />
  )
}
