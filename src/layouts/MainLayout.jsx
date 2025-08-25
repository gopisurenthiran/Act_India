import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4">
        <Outlet />  {/* This renders the nested route */}
      </main>
      <Footer />
    </div>
  )
}
