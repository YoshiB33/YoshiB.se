import Head from 'next/head'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Head>
        <title>About | YoshiB.se</title>
      </Head>
      <h1 className='bg-slate-800 px-16 text-white text-center pt-5 text-3xl'>About</h1>
      <p className='bg-slate-800 px-16 text-white pt-5 text-x-1'>Hello, I am YoshiB33 and I like to program and play video games.</p>
    </div>
  )
}