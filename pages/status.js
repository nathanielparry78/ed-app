import { useEffect, useState } from 'react'
import ndjsonParser from "ndjson-parse"
import styled from 'styled-components'

const Row = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  line-height: 1.6;
`

const Info = styled.div``;
const ModuleList = styled.div``;

const ModRow = styled.div`
  display: grid;
  grid-template-columns: 50% 30% 10% 10%;
  padding: .25rem;
  column-gap: 1rem;
`;

const HealthBar = styled.span`
  height: 100%;
  width: 100%;
  background: var(--orangeRow);
  position: relative;

  &:before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    height: 100%;
    background: var(--orange);

    ${({value}) => value && `width: ${value}%`}
  }
`


const DataRow = ({label, value}) => (
  <Row>
    <span>{label}:</span> <span>{typeof value === 'number' ? value.toLocaleString() : value}</span>
  </Row>
)

const Module = ({Slot, Item, On, Priority, Health}) => (
  <ModRow>
    <span>{Item}</span>
    <HealthBar value={Health * 100}>{Health}</HealthBar>
    <span>{On === true ? "ON" : "OFF"}</span>
    <span>{Priority + 1}</span>
  </ModRow>

)
export default function Status () {
  const [ loadout, setLoadout] = useState(null)

  useEffect(() => {
    const getLoadout = async () => {
      fetch('https://raw.githubusercontent.com/nathanielparry78/ed-app/f87ca2f8b3e559406c494751424e3e946e926dfc/public/Journal.210414220818.01.log')
        .then(res => res.text())
        .then(string => ndjsonParser(string))
        .then(blob => {
          const loadoutData = blob.filter(item => {
            return item.event === "Loadout"
          });
          console.log(loadoutData[loadoutData.length - 1])
          setLoadout(loadoutData[loadoutData.length - 1])
        })
    }
    getLoadout()
  }, [])

  const { Ship, ShipID, ShipName, ShipIdent, HullValue, ModulesValue, HullHealth, UnladenMass, CargoCapacity, MaxJumpRange, FuelCapacity, Rebuy, Modules } = loadout || {};
  return (
    <div>
        {loadout &&
          <div>
            <Info>
              <h2>{ShipName}</h2>
              <h3>{ShipIdent}</h3>
              <DataRow label={"Rebuy Cost"} value={Rebuy}/>
              <DataRow label={"Max jump range"} value={MaxJumpRange}/>
              <DataRow label={"Unladen Mass"} value={UnladenMass}/>
              <DataRow label={"Fuel Capacity"} value={FuelCapacity.Main}/>
              <DataRow label={"Cargo Capacity"} value={CargoCapacity}/>
            </Info>
            <h3>Modules</h3>
            <ModuleList>
              {Modules.map(item => (
                <Module key={item.Slot} {...item}/>
              ))}

            </ModuleList>
          </div>
        }
    </div>
  )
}