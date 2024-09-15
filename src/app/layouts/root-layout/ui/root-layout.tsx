import { Stack } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

export const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Stack flexDirection="column" minHeight="100vh">
      <header>header</header>

      <Stack component="main" flexGrow={1}>
        {children}
      </Stack>

      <footer>footer</footer>
    </Stack>
  )
}
