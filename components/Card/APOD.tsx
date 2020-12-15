import { Card, Description, Divider, Grid, Image, Link } from "@geist-ui/react";
import styled from "styled-components";

const ImageBrowser = styled(Image.Browser)`
  width: auto !important;
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  box-shadow: none !important;
  text-transform: none;
`;

const APOD = styled(Image)`
  filter: grayscale(100%);
  transition: all ease-in 1s;

  img {
    max-height: 540px;
    object-fit: cover !important;
  }

  &:hover {
    filter: grayscale(0%);
  }
`;

function CardAPOD({ data }) {
  return (
    <Card key={data.id}>
      <Card.Content style={{ padding: 0 }}>
        {data.media_type === "video" ? (
          <iframe
            width="100%"
            height="540"
            src={data.url}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <ImageBrowser
            title={data.title}
            url={data.hdurl}
            showFullLink
            anchorProps={{ rel: "noopener" }}
          >
            <APOD
              src={data.url}
              alt="Astronomy Picture of the Day"
              width={960}
              height={540}
            />
          </ImageBrowser>
        )}
      </Card.Content>

      <Divider y={0} />

      <Card.Content>
        <Grid.Container gap={3}>
          <Grid xs={24} sm={12} md={8}>
            <Description
              title={"Astronomy Picture of the Day"}
              content={
                <Link
                  href="https://apod.nasa.gov"
                  rel="noopener"
                  target="_blank"
                >
                  {data.date}
                </Link>
              }
            />
          </Grid>

          {data.copyright && (
            <Grid xs={24} sm={12}>
              <Description title={"Copyright"} content={data.copyright} />
            </Grid>
          )}

          <Grid xs={24}>
            <Description
              title={data.title}
              content={data.explanation}
              css={`
                dd {
                  line-height: 1.15rem !important;
                }
              `}
            />
          </Grid>
        </Grid.Container>
      </Card.Content>
    </Card>
  );
}

export default CardAPOD;
