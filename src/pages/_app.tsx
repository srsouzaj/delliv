import type { AppProps } from 'next/app'
import "../../styles/globals.css"
import { NavBar } from '../components/navBar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>

  )
}

export default MyApp
