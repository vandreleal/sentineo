import Head from "next/head";
import { Fieldset, Grid, Link, Text } from "@geist-ui/react";
import glossary from "@/data/glossary.json";

const Glossary = () => {
  return (
    <>
      <Head>
        <title>SentiNEO | Glossary</title>
      </Head>

      <Grid style={{ maxWidth: 600, margin: "0 auto" }}>
        <Grid.Container gap={3} direction="column">
          <Grid style={{ textAlign: "center" }}>
            <Text h3>Glossary</Text>
            <Link
              block
              href="https://cneos.jpl.nasa.gov/glossary"
              rel="noopener"
              target="_blank"
            >
              <Text small>https://cneos.jpl.nasa.gov/glossary</Text>
            </Link>
          </Grid>

          {glossary.map((item: any, key: number) => {
            return (
              <Grid xs key={key}>
                <Fieldset>
                  <Fieldset.Content>
                    <Fieldset.Title>
                      <Text span type="secondary">
                        {item.term}
                      </Text>
                    </Fieldset.Title>
                    <Text p size={14}>
                      {item.definition}
                    </Text>
                  </Fieldset.Content>
                </Fieldset>
              </Grid>
            );
          })}
        </Grid.Container>
      </Grid>
    </>
  );
};

export default Glossary;
