import { FC, PropsWithChildren } from 'react'

import { ThemeProvider } from '../../theme-provider'

export const RootProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}
