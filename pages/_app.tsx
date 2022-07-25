import { GlobalStyle } from '@styles/global'
import { Responsive } from '@styles/responsive'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Responsive />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
