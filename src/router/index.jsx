
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Contact from '@/pages/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // Layout includes Header and Footer
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}