import { ProviderMessage } from '../context/MessageProvider'
import MainLayout from '../layouts/MainLayout'
import { Toaster } from 'react-hot-toast'

import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <ProviderMessage>
          <Component {...pageProps} />
        </ProviderMessage>
        <Toaster
          position='bottom-center'
          reverseOrder={false}
        />
      </MainLayout>
    </>
  )
}
