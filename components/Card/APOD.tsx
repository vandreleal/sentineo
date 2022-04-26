import { Card, Description, Divider, Grid, Image, Link } from '@geist-ui/react'
import styled from 'styled-components'

const ImageBrowser = styled(Image.Browser)`
  width: auto !important;
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  box-shadow: none !important;
  text-transform: none;
`

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
`

const CustomDescription = styled(Description)`
  dd {
    line-height: 1.15rem !important;
  }
`

interface CardAPODProps {
  data: {
    id: string
    copyright: string
    date: string
    explanation: string
    hdurl: string
    media_type: string
    title: string
    url: string
  }
}

const CardAPOD = ({ data }: CardAPODProps) => {
  return (
    <Card key={data.id}>
      <Card.Content style={{ padding: 0 }}>
        {data.media_type === 'video' ? (
          <iframe allowFullScreen frameBorder="0" height="540" src={data.url} width="100%" />
        ) : (
          <ImageBrowser showFullLink anchorProps={{ rel: 'noopener' }} title={data.title} url={data.hdurl}>
            <APOD alt="Astronomy Picture of the Day" height="540px" src={data.url} width="960px" />
          </ImageBrowser>
        )}
      </Card.Content>
      <Divider h={0} />
      <Card.Content>
        <Grid.Container gap={3}>
          <Grid md={8} sm={12} xs={24}>
            <Description
              content={
                <Link href="https://apod.nasa.gov" rel="noopener" target="_blank">
                  {data.date}
                </Link>
              }
              title={'Astronomy Picture of the Day'}
            />
          </Grid>
          {data.copyright && (
            <Grid sm={12} xs={24}>
              <Description content={data.copyright} title={'Copyright'} />
            </Grid>
          )}
          <Grid xs={24}>
            <CustomDescription content={data.explanation} title={data.title} />
          </Grid>
        </Grid.Container>
      </Card.Content>
    </Card>
  )
}

export default CardAPOD
