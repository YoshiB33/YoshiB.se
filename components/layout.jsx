import Navbar from './navbar'
import Footer from './Footer'
import { UserProvider } from '@auth0/nextjs-auth0';

export default function Layout({ children }) {
  return (
    <>
    <UserProvider >
      <Navbar />
      <main className='flex-1'>{children}</main>
      <div className='h-screen bg-slate-800 '>
        <link href='/favicon.ico'/>
      </div>
      <Footer />
      </UserProvider>
    </>
  )
}