import { useState } from 'react'
import styled from 'styled-components'

const Button = styled.div`
  height: 100px;
  width: 200px;
  max-height: 100px;
  background: var(--orangeButton);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  position: relative;
  user-select: none;
  cursor: pointer;
  margin: .5rem;
  text-align: center;
  border: 7px solid #00000040;
`

const Indicator = styled.span`
  position: absolute;
  bottom: -7px;
  background: var(--yellow);
  height: 20px;
  width: 75px;
  border: 3px solid #45210D;
  border-bottom: none;
  box-sizing: border-box;
  box-shadow: inset 0px 0px 0 4px #111;

  ${({active}) => active && `background: var(--green)`}
`

export default function ToggleButton ({text}) {
  const [ active, setActive ] = useState(false)
  return (
    <>
      <Button onClick={() => setActive(!active)}>
        {text}
        <Indicator active={active}/>
      </Button>
    </>
  )
}