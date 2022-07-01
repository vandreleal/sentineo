import { FC } from "react"

import {
  Card,
  Description,
  Dot,
  Grid,
  Link,
  Spacer,
  Text,
  useMediaQuery,
} from "@geist-ui/core"
import { useRecoilValue } from "recoil"

import { appStateDetailed } from "@/recoil/app"
import { getOrbitViewerLink } from "@/utils/strings"

const formatNumber = (value: number) => {
  return new Intl.NumberFormat().format(value)
}

const CardObjectBasic: FC<NASA.NeoWs.NearEarthObject> = ({
  absolute_magnitude_h,
  estimated_diameter,
  is_potentially_hazardous_asteroid,
  name,
  nasa_jpl_url,
  orbital_data,
}) => {
  const mqUpSM = useMediaQuery("sm", { match: "up" })
  const settings = useRecoilValue(appStateDetailed)

  const estimatedDiameter =
    estimated_diameter[settings.estimated_diameter.value]

  return (
    <Card>
      <Text h3 margin={0}>
        {name}
      </Text>
      {is_potentially_hazardous_asteroid && (
        <Dot type="warning">Potentially Hazardous</Dot>
      )}
      <Spacer h={2} />
      <Grid.Container gap={mqUpSM ? 0 : 2}>
        <Grid md={6} sm={8} xs={24}>
          <Description
            content={absolute_magnitude_h}
            title={"Absolute Magnitude (H)"}
          />
        </Grid>
        <Grid md={6} sm={8} xs={24}>
          <Description
            content={`${formatNumber(
              estimatedDiameter.estimated_diameter_min
            )} ${settings.estimated_diameter.unit}`}
            title={"Estimated Diameter (Min)"}
          />
        </Grid>
        <Grid md={6} sm={8} xs={24}>
          <Description
            content={`${formatNumber(
              estimatedDiameter.estimated_diameter_max
            )} ${settings.estimated_diameter.unit}`}
            title={"Estimated Diameter (Max)"}
          />
        </Grid>
      </Grid.Container>
      <Card.Footer>
        <Text span>Links:</Text>
        <Link block href={nasa_jpl_url} rel="noopener" target="_blank">
          NASA JPL
        </Link>
        <Link
          block
          href={getOrbitViewerLink(name, orbital_data)}
          rel="noopener"
          target="_blank"
        >
          Orbit Viewer
        </Link>
      </Card.Footer>
    </Card>
  )
}

export default CardObjectBasic
