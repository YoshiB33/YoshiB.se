import Head from "next/head";

export default function Custom404() {
    return (
    <div id="404">
        <Head>
            <title>404 - Sorry, we did not find the page</title>
        </Head>
        <h1 className='text-white text-3xl text-center pt-7 bg-slate-800'>404 - Sorry, we did not find the page</h1>
    </div>
    )
}