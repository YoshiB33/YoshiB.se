import Head from 'next/head'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | YoshiB.se</title>
      </Head>
      <h1 className='text-white text-3xl text-center pt-7 bg-slate-800'>Welcome to YoshiB.se!</h1>
    </div>
  )
}
