import Head from 'next/head'
import Image from 'next/image'

import { Grid, Text } from '@geist-ui/core'
import packageData from 'package.json'
import styled from 'styled-components'

const Logo = styled(Image)`
  transform: rotate(60deg);
`

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>{packageData.displayName} | 404</title>
      </Head>
      <Grid.Container alignItems="center" direction="column" gap={3} justify="center" style={{ textAlign: 'center' }}>
        <Grid>
          <Logo alt="404" height="120" src="/spaceship.svg" width="120" />
        </Grid>
        <Grid>
          <Text h1>Lost in space?</Text>
        </Grid>
      </Grid.Container>
    </>
  )
}

export default Custom404
