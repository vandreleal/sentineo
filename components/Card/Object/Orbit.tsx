import { Collapse, Description, Grid, Text } from '@geist-ui/react'

interface CardObjectOrbitProps {
  data: {
    orbital_data: {
      orbit_class: {
        orbit_class_description: string
        orbit_class_range: string
        orbit_class_type: string
      }
    }
  }
}

const CardObjectOrbit = ({ data }: CardObjectOrbitProps) => {
  const { orbital_data } = data

  const renderData = (): JSX.Element => {
    return (
      <Collapse.Group>
        <Collapse
          initialVisible
          shadow
          subtitle={
            <>
              <Text span type="secondary">
                {orbital_data.orbit_class.orbit_class_description}
              </Text>
              <Text span type="secondary">
                {orbital_data.orbit_class.orbit_class_range}
              </Text>
            </>
          }
          title={`Orbit Type: ${orbital_data.orbit_class.orbit_class_type}`}
        >
          <Grid.Container alignContent="center" alignItems="center" gap={3}>
            {Object.keys(orbital_data).map(key => {
              if (typeof orbital_data[key] === 'object') {
                return
              }

              return (
                <Grid key={key} md={6} sm={12} xs={24}>
                  <Description content={orbital_data[key]} title={key.replace(/_/g, ' ')} />
                </Grid>
              )
            })}
          </Grid.Container>
        </Collapse>
      </Collapse.Group>
    )
  }

  return renderData()
}

export default CardObjectOrbit
