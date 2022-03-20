import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className='flex-1'>{children}</main>
      <div className='h-screen bg-slate-800 '>
        <link href='/favicon.ico'/>
      </div>
      <Footer />
    </>
  )
}