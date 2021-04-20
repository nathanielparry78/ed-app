import Head from 'next/head'
import ToggleButton from '../components/ToggleButton'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ED</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome CMDR!
        </h1>

        <ToggleButton text="Landing Gear"/>
        <ToggleButton text="Cargo Scoop"/>
        <ToggleButton text="External Lights"/>
        <ToggleButton text="Night Vision"/>
        <ToggleButton text="Hardpoints"/>


      </main>
    </div>
  )
}


// https://edassets.org/#/