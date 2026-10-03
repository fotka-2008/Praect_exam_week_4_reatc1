import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Taxi from './pages/Taxi'
import TaxiCar from './pages/TaxiCar'
import Reviews from './pages/Reviews'
import Service from './pages/Service'
import About from './pages/About'
import Used from './pages/Used'
import UsedCar from './pages/UsedCar'
import NewCar from './pages/NewCar'
import Credit from './pages/Credit'
import Insurance from './pages/Insurance'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound'
import { load, save } from './utils'

function ScrollTop() {
  const { pathname, search, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, search, hash])

  return null
}

export default function App() {
  const [favs, setFavs] = useState(() => load('favs'))
  const [compare, setCompare] = useState(() => load('compare'))

  useEffect(() => save('favs', favs), [favs])
  useEffect(() => save('compare', compare), [compare])

  function toggleFav(id) {
    setFavs(favs.includes(id) ? favs.filter((x) => x !== id) : [...favs, id])
  }

  function toggleCompare(id) {
    setCompare(compare.includes(id) ? compare.filter((x) => x !== id) : [...compare, id])
  }

  const store = { favs, compare, toggleFav, toggleCompare }

  return (
    <BrowserRouter>
      <ScrollTop />
      <div className="flex min-h-screen flex-col overflow-x-clip">
        <Header favs={favs.length} compare={compare.length} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Credit slug="trade-in" />} />
            <Route path="/credit/trade-in" element={<Navigate to="/" replace />} />
            <Route path="/taxi" element={<Taxi store={store} />} />
            <Route path="/taxi/:id" element={<TaxiCar store={store} />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/service" element={<Service />} />
            <Route path="/about" element={<About />} />
            <Route path="/used" element={<Used store={store} />} />
            <Route path="/used/:id" element={<UsedCar store={store} />} />
            <Route path="/new/:id" element={<NewCar store={store} />} />
            <Route path="/credit/:slug" element={<Credit />} />
            <Route path="/special/:slug" element={<Credit />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/favorites" element={<Favorites store={store} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
