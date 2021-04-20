import { ThemeProvider } from 'styled-components'
import '../styles/globals.css'
import Nav from '../components/Nav'

const theme = {};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}/>
      <Nav/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
