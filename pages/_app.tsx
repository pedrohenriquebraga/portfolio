import { NextIntlProvider } from 'next-intl';
import { GlobalStyle } from '@styles/global'
import { Responsive } from '@styles/responsive'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Responsive />
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </>
  )
}

export default MyApp
