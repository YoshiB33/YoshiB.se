import Head from "next/head";

export default function Custom500() {
    return (
    <div id="404">
        <Head>
            <title>500 - The site did not load right</title>
        </Head>
        <h1 className='text-white text-3xl text-center pt-7 bg-slate-800'>500 - The site did not load right</h1>
    </div>
    )
  }