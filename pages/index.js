import Head from 'next/head'
import { commodities, systems } from './api/eddb'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ED</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={main}>
        <h1 className={title}>
          Welcome to ED!
        </h1>


      </main>
    </div>
  )
}


// https://edassets.org/#/