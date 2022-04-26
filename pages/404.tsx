import Head from 'next/head'
import Image from 'next/image'

import { Grid, Text } from '@geist-ui/react'
import styled from 'styled-components'

const Logo = styled(Image)`
  transform: rotate(60deg);
`

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>SentiNEO | 404</title>
      </Head>
      <Grid.Container alignItems="center" direction="column" gap={3} justify="center" style={{ textAlign: 'center' }}>
        <Grid>
          <Logo alt="404" height="fill" src="/spaceship.svg" width="fill" />
        </Grid>
        <Grid>
          <Text h4>Station not found </Text>
          <Text h5 type="secondary">
            Go back to the previous checkpoint
          </Text>
        </Grid>
      </Grid.Container>
    </>
  )
}

export default Custom404
