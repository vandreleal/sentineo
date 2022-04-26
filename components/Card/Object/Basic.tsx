import { appStateDetailed } from '@/recoil/app'
import { Card, Description, Dot, Grid, Link, Spacer, Text, useMediaQuery } from '@geist-ui/react'
import { useRecoilValue } from 'recoil'

interface Props {
  data: {
    absolute_magnitude_h: string
    estimated_diameter: string
    is_potentially_hazardous_asteroid: boolean
    name: string
    nasa_jpl_url: string
  }
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type CardObjectBasicProps = Props & NativeAttrs

const CardObjectBasic: React.FC<React.PropsWithChildren<CardObjectBasicProps>> = ({ data }): JSX.Element => {
  const mqUpSM = useMediaQuery('sm', { match: 'up' })
  const preferences = useRecoilValue(appStateDetailed)

  const estimatedDiameter = data.estimated_diameter[preferences.estimated_diameter.value]

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat().format(value)
  }

  return (
    <Card>
      <Grid>
        <Text h3 style={{ marginBottom: '0' }}>
          {data.name}
        </Text>
        {data.is_potentially_hazardous_asteroid && <Dot type="warning">Potentially Hazardous</Dot>}
      </Grid>

      <Spacer h={1} />

      <Grid.Container gap={mqUpSM ? 0 : 2}>
        <Grid xs={24} sm={8} md={6}>
          <Description title={'Absolute Magnitude (H)'} content={data.absolute_magnitude_h} />
        </Grid>

        <Grid xs={24} sm={8} md={6}>
          <Description
            title={'Estimated Diameter (Min)'}
            content={`${formatNumber(estimatedDiameter.estimated_diameter_min)} ${preferences.estimated_diameter.unit}`}
          />
        </Grid>

        <Grid xs={24} sm={8} md={6}>
          <Description
            title={'Estimated Diameter (Max)'}
            content={`${formatNumber(estimatedDiameter.estimated_diameter_max)} ${preferences.estimated_diameter.unit}`}
          />
        </Grid>
      </Grid.Container>

      <Card.Footer>
        {mqUpSM && <Text span>NASA JPL URL:</Text>}
        <Link href={data.nasa_jpl_url} rel="noopener" target="_blank" block>
          {data.nasa_jpl_url}
        </Link>
      </Card.Footer>
    </Card>
  )
}

export default CardObjectBasic
