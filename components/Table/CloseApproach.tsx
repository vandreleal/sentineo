import { appStateDetailed } from '@/recoil/app'
import { Collapse, Grid, Table } from '@geist-ui/react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

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

interface TableCloseApproachProps {
  data: {
    close_approach_data: any
  }
}

const TableCloseApproach = ({ data }: TableCloseApproachProps) => {
  const { close_approach_data } = data
  const preferences = useRecoilValue(appStateDetailed)

  const getAttributeByPref = (item, attribute) => {
    const value = item[attribute][preferences[attribute].value]

    return `${new Intl.NumberFormat().format(value)} ${preferences[attribute].unit}`
  }

  const tableData = close_approach_data.map(item => ({
    ...item,
    prop_miss_distance: getAttributeByPref(item, 'miss_distance'),
    prop_relative_velocity: getAttributeByPref(item, 'relative_velocity'),
  }))
  const title = `${close_approach_data.length} close approach${close_approach_data.length > 1 ? 'es' : ''}`

  return (
    <Collapse.Group>
      <Collapse
        initialVisible
        shadow
        subtitle="Data are not available prior to 1900 A.D. nor after 2200 A.D."
        title={title}
      >
        <CloseApproachGrid>
          {data && (
            <Table data={tableData} emptyText="No close approaches">
              <Table.Column label="Orbiting" prop="orbiting_body" width={125} />
              <Table.Column label="Date" prop="close_approach_date_full" width={175} />
              <Table.Column
                label={`Miss Distance (${preferences['miss_distance'].unit})`}
                prop={`prop_miss_distance`}
              />
              <Table.Column
                label={`Relative Velocity (${preferences['relative_velocity'].unit})`}
                prop={`prop_relative_velocity`}
              />
            </Table>
          )}
        </CloseApproachGrid>
      </Collapse>
    </Collapse.Group>
  )
}

export default TableCloseApproach
