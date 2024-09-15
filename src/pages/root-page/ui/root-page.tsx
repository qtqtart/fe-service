import { Container, Typography } from '@mui/material'
import { NextPage } from 'next'

export const RootPage: NextPage = () => {
  return (
    <Container maxWidth="xl">
      <Typography>this is root page</Typography>
    </Container>
  )
}
