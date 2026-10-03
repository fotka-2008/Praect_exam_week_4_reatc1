import Box from './Box'
import Crumbs from './Crumbs'

export default function PageTitle({ title, crumbs, children }) {
  return (
    <Box className="pt-6 md:pt-[45px]">
      <Crumbs items={[{ title: 'Главная', to: '/' }, ...(crumbs || [{ title }])]} />
      <div className="flex flex-wrap items-center gap-x-10 gap-y-4 border-b border-line pt-3 pb-6 md:pb-[30px]">
        <h1 className="text-[40px] leading-none font-bold md:text-[60px] lg:text-[72px]">{title}</h1>
        {children}
      </div>
    </Box>
  )
}
