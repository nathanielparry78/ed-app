import { useEffect, useState } from 'react'
import ndjsonParser from "ndjson-parse"
import styles from '../styles/Logs.module.css'


export default function Log () {
  const [ missions, setMissions ] = useState([]);
  const [ sortedBy, setSortedBy ] = useState(null)

  useEffect(() => {
    const getLog = async () => {
      fetch('https://raw.githubusercontent.com/nathanielparry78/ed-app/f87ca2f8b3e559406c494751424e3e946e926dfc/public/Journal.210414220818.01.log')
        .then(res => res.text())
        .then(string => ndjsonParser(string))
        .then(blob => {
          let missions = [];
          blob.map(item => {
            if (item.event === "MissionAccepted") {
              missions.push(item)
            }
            if (item.event === "MissionCompleted") {


            }
          });
          setMissions(missions)
        })
    }
    getLog()
  }, [])

  // useEffect(() => {
  //   console.log(missions)
  // }, [missions])

  const handleSort = (value) => {

    const compareValues = (key, order = 'asc') => {
      return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
          // property doesn't exist on either object
          return 0;
        }

        const varA = (typeof a[key] === 'string')
          ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string')
          ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
          comparison = 1;
        } else if (varA < varB) {
          comparison = -1;
        }
        return (
          (order === 'desc') ? (comparison * -1) : comparison
        );
      };
    }

    const sorted = [...missions].sort(compareValues(value))

    setMissions(sorted)
  }

  return (
    <table className={styles.missions}>
      <thead>
        <tr>
          <th onClick={() => handleSort("LocalisedName")}>Mission Name</th>
          <th onClick={() => handleSort("DestinationSystem")}>System</th>
          <th onClick={() => handleSort("DestinationStation")}>Station</th>
          <th onClick={() => handleSort("Expiry")}>Expires</th>
          <th onClick={() => handleSort("Reward")}>Reward</th>
          <th>Inf</th>
          <th>Rep</th>
        </tr>
      </thead>
      <tbody>
        {missions.length > 0 &&
          missions.map(({Faction, LocalisedName, DestinationSystem = "", DestinationStation = "", Expiry, Influence, Reputation, Reward = "", MissionID}) => {
            const date = new Date;
            const current = Date.now()
            const end = new Date(Expiry)

            // console.log (current, Date.parse(Expiry))

            return (
              <tr key={MissionID}>
                <td>{LocalisedName}
                  <p>{Faction}</p>
                </td>
                <td>{DestinationSystem}</td>
                <td>{DestinationStation}</td>
                <td className={styles.right}>{end.toLocaleTimeString()}</td>
                <td className={styles.right}>{Reward.toLocaleString()}</td>
                <td className={styles.em}>{Influence}</td>
                <td className={styles.em}>{Reputation}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}