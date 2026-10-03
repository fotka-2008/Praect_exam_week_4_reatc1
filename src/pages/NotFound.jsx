import { Link } from 'react-router-dom'
import Box from '../components/Box'

export default function NotFound() {
  return (
    <Box className="py-24 text-center">
      <h1 className="text-[72px] font-bold text-red">404</h1>
      <p className="mt-2 text-[20px]">Страница не найдена</p>
      <Link to="/" className="mt-8 inline-flex h-[50px] items-center rounded-[4px] bg-red px-8 font-bold text-white uppercase">
        На главную
      </Link>
    </Box>
  )
}
