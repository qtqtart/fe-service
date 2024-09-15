import { RootProvider } from '@app/providers/root-provider'
import { AppPropsWithLayout } from '@shared/types/next'
import { FC } from 'react'

const App: FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <RootProvider>
      <Component {...pageProps} />
    </RootProvider>,
  )
}

export default App
