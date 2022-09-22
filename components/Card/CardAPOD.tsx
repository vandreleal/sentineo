import { FC } from "react"

import { Card, Description, Divider, Grid, Image, Link } from "@geist-ui/core"
import styled from "styled-components"

const ImageBrowser = styled(Image.Browser)`
  width: auto !important;
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  box-shadow: none !important;
  text-transform: none;
`

const APOD = styled(Image)`
  img {
    max-height: min(540px, 25vh);
    object-fit: cover !important;
  }
`

const CustomDescription = styled(Description)`
  dd {
    line-height: 1.25rem !important;
  }
`

const CardAPOD: FC<NASA.NeoWs.APOD> = ({
  copyright,
  date,
  explanation,
  hdurl,
  media_type,
  title,
  url,
}) => {
  return (
    <Card key={title}>
      <Card.Content style={{ padding: 0 }}>
        {media_type === "video" ? (
          <iframe
            allowFullScreen
            frameBorder="0"
            height="540"
            src={hdurl}
            title="Video"
            width="100%"
          />
        ) : (
          <ImageBrowser
            showFullLink
            anchorProps={{ rel: "noopener" }}
            title={title}
            url={hdurl}
          >
            <APOD
              alt="Astronomy Picture of the Day"
              height="auto"
              src={url}
              width="960px"
            />
          </ImageBrowser>
        )}
      </Card.Content>
      <Divider h={0} />
      <Card.Content>
        <Grid.Container gap={3}>
          <Grid md={8} sm={12} xs={24}>
            <Description
              content={
                <Link
                  href="https://apod.NASA.gov"
                  rel="noopener"
                  target="_blank"
                >
                  {date}
                </Link>
              }
              title={"Astronomy Picture of the Day"}
            />
          </Grid>
          {copyright && (
            <Grid sm={12} xs={24}>
              <Description content={copyright} title={"Copyright"} />
            </Grid>
          )}
          <Grid xs={24}>
            <CustomDescription content={explanation} title={title} />
          </Grid>
        </Grid.Container>
      </Card.Content>
    </Card>
  )
}

export default CardAPOD
