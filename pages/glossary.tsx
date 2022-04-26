import Head from 'next/head'

import glossary from '@/data/glossary'
import { Fieldset, Grid, Link, Text } from '@geist-ui/react'

const Glossary = () => {
  return (
    <>
      <Head>
        <title>SentiNEO | Glossary</title>
      </Head>
      <Grid style={{ maxWidth: 600, margin: '0 auto' }}>
        <Grid.Container direction="column" gap={3}>
          <Grid style={{ textAlign: 'center' }}>
            <Text h3>Glossary</Text>
            <Link block href="https://cneos.jpl.NASA.gov/glossary" rel="noopener" target="_blank">
              <Text small>https://cneos.jpl.NASA.gov/glossary</Text>
            </Link>
          </Grid>
          {glossary.map((item: GlossaryItem, key: number) => {
            return (
              <Grid key={key} xs>
                <Fieldset style={{ flexGrow: 1 }}>
                  <Fieldset.Content>
                    <Fieldset.Title>
                      <Text span type="secondary">
                        {item.term}
                      </Text>
                    </Fieldset.Title>
                    <Text p>{item.definition}</Text>
                  </Fieldset.Content>
                </Fieldset>
              </Grid>
            )
          })}
        </Grid.Container>
      </Grid>
    </>
  )
}

export default Glossary
