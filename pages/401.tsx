import Head from "next/head";

export default function Custom401() {
    return (
    <div id="404">
        <Head>
            <title>401 - Unauthorized</title>
        </Head>
        <h1 className='text-white text-3xl text-center pt-7 bg-slate-800'>401 - Unauthorized</h1>
    </div>
    )
  }