import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { SampleContextProvider } from 'store/contexts/sampleContext'

import theme from 'theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SampleContextProvider>
        <Component {...pageProps} />
      </SampleContextProvider>
    </ChakraProvider>
  )
}

export default App
