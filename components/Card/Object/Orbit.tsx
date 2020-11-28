import { Collapse, Description, Divider, Grid, Text } from "@geist-ui/react";

function CardAsteroidOrbit({ data }) {
  const { orbital_data } = data;

  const renderData = () => {
    return (
      <Collapse.Group>
        <Collapse
          title={`Orbit Type: ${orbital_data.orbit_class.orbit_class_type}`}
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
          initialVisible
          shadow
        >
          <Divider y={3} />

          <Grid.Container gap={3} alignContent="center" alignItems="center">
            {Object.keys(orbital_data).map((key) => {
              if (typeof orbital_data[key] === "object") {
                return;
              }

              return (
                <Grid key={key} xs={24} sm={12} md={6}>
                  <Description
                    title={key.replace(/_/g, " ")}
                    content={orbital_data[key]}
                  />
                </Grid>
              );
            })}
          </Grid.Container>
        </Collapse>
      </Collapse.Group>
    );
  };

  return <>{renderData()}</>;
}

export default CardAsteroidOrbit;
