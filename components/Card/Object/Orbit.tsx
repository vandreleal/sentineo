import { FC } from 'react'

import { Collapse, Description, Grid, Text } from '@geist-ui/core'

const CardObjectOrbit: FC<NASA.NeoWs.NearEarthObject> = ({ orbital_data }) => {
  if (!orbital_data) {
    return null
  }

  const {
    orbit_class: { orbit_class_description, orbit_class_range, orbit_class_type },
  } = orbital_data

  return (
    <Collapse.Group>
      <Collapse
        initialVisible
        shadow
        subtitle={
          <>
            <Text span type="secondary">
              {orbit_class_description}
            </Text>
            <Text span type="secondary">
              {orbit_class_range}
            </Text>
          </>
        }
        title={`Orbit Type: ${orbit_class_type}`}
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

export default CardObjectOrbit
