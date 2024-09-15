import { AppProps } from 'next/app'
import { FC } from 'react'

import { ThemeProvider } from '../../theme-provider'

export const RootProvider: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
