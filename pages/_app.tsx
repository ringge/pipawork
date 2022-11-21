import '../styles/globals.css'
import { extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { SaasProvider, theme as baseTheme } from '@saas-ui/react'

export default function App({ Component, pageProps }: AppProps) {
  const colors = {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  }
  const theme = extendTheme({ colors }, 
    // {global: () => ({
    //   'html, body': {
    //     height: '100%',
    //   },
    // })},
    baseTheme)
  return (
    <SaasProvider theme={theme}>
      <Component {...pageProps} />
    </SaasProvider>
  )
}