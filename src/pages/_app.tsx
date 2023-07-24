import type { AppProps } from 'next/app'
import "../../styles/globals.css"
import { NavBar } from '../components/navBar'
import { AuthProvider } from '../store/auth.context'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <NavBar />
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </AuthProvider>

  )
}

export default MyApp
