import Head from "next/head";
import Image from "next/image";
import { Grid, Text } from "@geist-ui/react";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>SentiNEO | 404</title>
      </Head>

      <Grid.Container
        gap={3}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ textAlign: "center" }}
      >
        <Grid>
          <Image
            src="/spaceship.svg"
            alt="404"
            width="fill"
            height="fill"
            css={`
              transform: rotate(60deg);
            `}
          />
        </Grid>
        <Grid>
          <Text h4>Station not found </Text>
          <Text h5 type="secondary">
            Go back to the previous checkpoint
          </Text>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default Custom404;
