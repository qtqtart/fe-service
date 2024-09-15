import { RootLayout } from '@app/layouts/root-layout'
import { DarkMode, LightMode } from '@mui/icons-material'
import { Button, Container, IconButton } from '@mui/material'
import { useThemeMode } from '@shared/hooks/use-theme-mode'
import { NextPageWithLayout } from '@shared/types/next'
import { ReactElement } from 'react'

const getLayout = (page: ReactElement) => <RootLayout>{page}</RootLayout>

export const RootPage: NextPageWithLayout = () => {
  const { themeMode, toggleThemeMode } = useThemeMode()

  return (
    <Container maxWidth="xl">
      <IconButton onClick={toggleThemeMode}>{themeMode === 'dark' ? <DarkMode /> : <LightMode />}</IconButton>

      <Button variant="contained">click</Button>
    </Container>
  )
}

RootPage.getLayout = getLayout
