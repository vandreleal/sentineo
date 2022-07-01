import Head from "next/head"
import { FC } from "react"

import { Fieldset, Grid, Link, Text } from "@geist-ui/core"
import packageData from "package.json"

import glossary from "@/data/glossary"

const Glossary: FC = () => {
  return (
    <>
      <Head>
        <title>{packageData.displayName} | Glossary</title>
      </Head>
      <Grid style={{ maxWidth: 600, marginInline: "auto" }}>
        <Grid.Container direction="column" gap={3}>
          <Grid style={{ textAlign: "center" }}>
            <Text h2>Glossary</Text>
            <Link
              block
              href="https://cneos.jpl.NASA.gov/glossary"
              rel="noopener"
              target="_blank"
            >
              <Text small>https://cneos.jpl.NASA.gov/glossary</Text>
            </Link>
          </Grid>
          {glossary.map((item: GlossaryItem) => {
            return (
              <Grid key={item.term} xs>
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
