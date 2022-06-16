import { FC } from 'react'

import { Grid, Link, Page, Text } from '@geist-ui/core'
import packageData from 'package.json'

const PageFooter: FC = () => {
  return (
    <Page.Footer
      style={{
        position: 'initial',
        padding: '1rem 0',
      }}
    >
      <Grid.Container
        alignContent="center"
        alignItems="center"
        direction="column"
        gap={0}
        justify="center"
        style={{ textAlign: 'center' }}
      >
        <Grid>
          <Text b span font={0.875}>
            <Link href={packageData.homepage} rel="noopener noreferrer" target="_blank">
              Version {packageData.version}
            </Link>
          </Text>
        </Grid>
        <Grid>
          <Text span font={0.625}>
            Icon made by{' '}
            <a
              href="https://www.flaticon.com/authors/good-ware"
              rel="noopener noreferrer"
              target="_blank"
              title="Good Ware"
            >
              Good Ware
            </a>
          </Text>
        </Grid>
      </Grid.Container>
    </Page.Footer>
  )
}

export default PageFooter
