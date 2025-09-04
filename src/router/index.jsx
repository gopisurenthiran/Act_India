
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Dealership from '@/pages/Dealership'
import Service from '../pages/Services'
import HomePage from '../pages/HomePages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // Layout includes Header and Footer
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <About /> },
      { path: 'dealership', element: <Dealership /> },
      { path: 'services', element: <Service /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}