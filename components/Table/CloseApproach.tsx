import { FC } from "react"

import { Collapse, Grid, Table } from "@geist-ui/core"
import { useRecoilValue } from "recoil"
import styled from "styled-components"

import { appStateDetailed } from "@/recoil/app"

const CloseApproachGrid = styled(Grid)`
  overflow: auto;
  max-height: auto;

  table {
    td,
    th {
      &:nth-child(3),
      &:nth-child(4) {
        & .cell,
        & .thead-box {
          justify-content: flex-end;
          text-align: right;
        }
      }
    }
  }
`

const TableCloseApproach: FC<NASA.NeoWs.NearEarthObject> = ({
  close_approach_data,
}) => {
  const settings = useRecoilValue(appStateDetailed)

  if (!close_approach_data) {
    return null
  }

  const getAttributeByPref = (
    item: NASA.NeoWs.CloseApproach,
    attribute: string
  ) => {
    const value = item[attribute][settings[attribute].value]

    return `${new Intl.NumberFormat().format(value)} ${
      settings[attribute].unit
    }`
  }

  const tableData = close_approach_data.map(
    (item: NASA.NeoWs.CloseApproach) => ({
      ...item,
      prop_miss_distance: getAttributeByPref(item, "miss_distance"),
      prop_relative_velocity: getAttributeByPref(item, "relative_velocity"),
    })
  )
  const title = `${close_approach_data.length} close approach${
    close_approach_data.length > 1 ? "es" : ""
  }`

  return (
    <Collapse.Group>
      <Collapse
        initialVisible
        shadow
        subtitle="Data are not available prior to 1900 A.D. nor after 2200 A.D."
        title={title}
      >
        <CloseApproachGrid>
          <Table data={tableData} emptyText="No close approaches">
            <Table.Column label="Orbiting" prop="orbiting_body" width={125} />
            <Table.Column
              label="Date"
              prop="close_approach_date_full"
              width={175}
            />
            <Table.Column
              label={`Miss Distance (${settings["miss_distance"].unit})`}
              prop={`prop_miss_distance`}
            />
            <Table.Column
              label={`Relative Velocity (${settings["relative_velocity"].unit})`}
              prop={`prop_relative_velocity`}
            />
          </Table>
        </CloseApproachGrid>
      </Collapse>
    </Collapse.Group>
  )
}

export default TableCloseApproach
