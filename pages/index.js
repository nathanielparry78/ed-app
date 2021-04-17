import Head from 'next/head'
import { commodities, systems } from './api/eddb'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ED</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to ED!
        </h1>

        <button onClick={() => systems("Luan Yun Di")}>
          Click the thing
        </button>

      </main>
    </div>
  )
}


// https://edassets.org/#/