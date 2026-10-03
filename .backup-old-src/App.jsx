import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import TaxiPage from './Pages/TaxiPage'
import TaxiCarPage from './Pages/TaxiCarPage'
import ReviewsPage from './Pages/ReviewsPage'
import ServicePage from './Pages/ServicePage'
import AboutPage from './Pages/AboutPage'
import UsedPage from './Pages/UsedPage'
import UsedCarPage from './Pages/UsedCarPage'
import NewCarPage from './Pages/NewCarPage'
import CreditProgramPage from './Pages/CreditProgramPage'
import InsurancePage from './Pages/InsurancePage'
import FavoritesPage from './Pages/FavoritesPage'
import NotFoundPage from './Pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/taxi" replace /> },
      { path: 'taxi', element: <TaxiPage /> },
      { path: 'taxi/:id', element: <TaxiCarPage /> },
      { path: 'reviews', element: <ReviewsPage /> },
      { path: 'service', element: <ServicePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'used', element: <UsedPage /> },
      { path: 'used/:id', element: <UsedCarPage /> },
      { path: 'new/:id', element: <NewCarPage /> },

      { path: 'credit/:slug', element: <CreditProgramPage /> },
      { path: 'special/:slug', element: <CreditProgramPage /> },
      { path: 'insurance', element: <InsurancePage /> },
      { path: 'favorites', element: <FavoritesPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
