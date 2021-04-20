import Link from 'next/link'
import styled from 'styled-components'

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export default function Nav ({className = ""}) {
  return (
    <NavContainer className={className}>
      <Link href="/">Dashboard</Link>
      {/* <Link href="">Scanners</Link>
      <Link href="">Targeting</Link> */}
      <Link href="/log">Transactions</Link>
      <Link href="/status">Status</Link>
      <Link href="/systems">Navigation</Link>
    </NavContainer>
  )
}