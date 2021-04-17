import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../styles/Systems.module.css'
import { systems } from './api/eddb'
import Badge from '../components/AllegianceBadge'
import Loading from '../components/Loading'

const DataRow = ({label, value}) => (
  <div className={styles.dataRow}>
    <span>{label}:</span> <span>{typeof value === 'number' ? value.toLocaleString() : value}</span>
  </div>
)

export default function Systems() {
  const [ system, setSystem ] = useState(null);
  const [ systemData, setSystemData ] = useState(null);
  const [ loading, setLoading ] = useState(false);

  const handleFetch = () => {
    setLoading(true);

    const fetchData = async () => {
      const data = await systems(system);
      setSystemData(data.docs[0]);
      setLoading(false);
    }

    fetchData();
  }

  useEffect(() => {
    console.log({systemData})
  }, [systemData])

  const { name, power, security, population, allegiance_id, controlling_minor_faction } = systemData || {};
  return (
    <div className={styles.container}>
      <Head>
        <title>ED</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          System Search
        </h1>

        <input type="text" id="system" name="system" onChange={(e) => setSystem(e.currentTarget.value)}/>
        <button type="submit" onClick={() => handleFetch()}>Fetch</button>

        <Loading loading={loading}/>

        {systemData &&
          <div className="grid">
            <div className={styles.systemName}>{name}{Badge(allegiance_id, 32, 32, "white")}</div>
            <DataRow label={"Controlled by"} value={power}/>
            <DataRow label={"Security"} value={security}/>
            <DataRow label={"Population"} value={population}/>
            <DataRow label={"Controlling Faction"} value={controlling_minor_faction}/>
          </div>
        }
      </main>
    </div>
  )
}


// https://edassets.org/#/