import dynamic from 'next/dynamic'

import { Grid, Link, Page, Text } from '@geist-ui/react'
import GitHub from '@geist-ui/react-icons/github'

const ButtonRound = dynamic(() => import('@/components/Button/Round'))

const PageFooter = () => {
  return (
    <Page.Footer
      style={{
        padding: '2rem 0',
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
          <Text b span font={0.875} style={{ display: 'block' }}>
            Built by{' '}
            <Link href="https://vandreleal.github.io" rel="noopener" target="_blank">
              Vandré Leal
            </Link>
          </Text>
          <Text span font={0.625}>
            Icons made by{' '}
            <a
              href="https://www.flaticon.com/authors/good-ware"
              rel="noopener noreferrer"
              target="_blank"
              title="Good Ware"
            >
              Good Ware
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" rel="noopener noreferrer" target="_blank" title="Flaticon">
              www.flaticon.com
            </a>
          </Text>
          <ButtonRound
            aria-label="Star on GitHub"
            icon={<GitHub />}
            style={{
              zIndex: 10,
              position: 'fixed',
              right: 16,
              bottom: 16,
            }}
            onClick={() => {
              window.open('https://github.com/vandreleal/sentineo')
            }}
          />
        </Grid>
      </Grid.Container>
    </Page.Footer>
  )
}

export default PageFooter
