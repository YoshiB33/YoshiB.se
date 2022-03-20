import Link from 'next/link';
import { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Image from 'next/image';

export const Navbar = () => {
  const {user} = useUser()
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  if (user) {
    return (
      <>
      <nav className='flex items-center flex-wrap bg-slate-800 border-b border-b-slate-600 p-12'>
        <Link href='/'>
          <img src='/Logo.svg' height='400' width='200'/>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-slate-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-slate-700 hover:text-white '>
                Home
              </a>
            </Link>
            <Link href='/about'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-slate-700 hover:text-white'>
                About
              </a>
            </Link>
              <a href="/api/auth/logout" className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-slate-700 hover:text-white'>
                Logout
              </a>
              <img src={user.picture ?? ''} alt={user.name ?? ''} width='50' height='50' className=' rounded-3xl ml-5'/>
              <h4 className='text-white ml-2'>{user.name}</h4>
          </div>
        </div>
      </nav>
    </>
    );
  }
  return (
    <>
      <nav className='flex items-center flex-wrap bg-slate-800 border-b border-b-slate-600 p-12'>
        <Link href='/'>
          <img src='/Logo.svg' height='400' width='200'/>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-slate-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-slate-700 hover:text-white '>
                Home
              </a>
            </Link>
            <Link href='/about'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-slate-700 hover:text-white'>
                About
              </a>
            </Link>
              <a href="/api/auth/login" className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-slate-700 hover:text-white'>
                Login
              </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar; 