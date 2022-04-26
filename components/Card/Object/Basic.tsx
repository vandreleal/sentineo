import { appStateDetailed } from '@/recoil/app'
import { Card, Description, Dot, Grid, Link, Spacer, Text, useMediaQuery } from '@geist-ui/react'
import { useRecoilValue } from 'recoil'

interface CardObjectBasicProps {
  data: {
    absolute_magnitude_h: string
    estimated_diameter: string
    is_potentially_hazardous_asteroid: boolean
    name: string
    nasa_jpl_url: string
  }
}

const CardObjectBasic = ({ data }: CardObjectBasicProps) => {
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
        <Grid md={6} sm={8} xs={24}>
          <Description content={data.absolute_magnitude_h} title={'Absolute Magnitude (H)'} />
        </Grid>
        <Grid md={6} sm={8} xs={24}>
          <Description
            content={`${formatNumber(estimatedDiameter.estimated_diameter_min)} ${preferences.estimated_diameter.unit}`}
            title={'Estimated Diameter (Min)'}
          />
        </Grid>
        <Grid md={6} sm={8} xs={24}>
          <Description
            content={`${formatNumber(estimatedDiameter.estimated_diameter_max)} ${preferences.estimated_diameter.unit}`}
            title={'Estimated Diameter (Max)'}
          />
        </Grid>
      </Grid.Container>
      <Card.Footer>
        {mqUpSM && <Text span>NASA JPL URL:</Text>}
        <Link block href={data.nasa_jpl_url} rel="noopener" target="_blank">
          {data.nasa_jpl_url}
        </Link>
      </Card.Footer>
    </Card>
  )
}

export default CardObjectBasic
