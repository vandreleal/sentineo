import { useRouter } from 'next/router'

import { appStateDetailed } from '@/recoil/app'
import { Button, ButtonGroup, Collapse, Dot, Grid, Table } from '@geist-ui/react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

const ReportGrid = styled(Grid)`
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

interface TableReportProps {
  data: {
    near_earth_objects: object
  }
}

const TableReport = ({ data }: TableReportProps) => {
  const { near_earth_objects } = data
  const preferences = useRecoilValue(appStateDetailed)
  const router = useRouter()

  const getAttribute = (rowData, attribute) => {
    const value = rowData[attribute]

    return <Dot type={value ? 'warning' : 'secondary'}>{value ? 'Yes' : 'No'}</Dot>
  }

  const getAttributeByPref = (item, attribute) => {
    const value = item.close_approach_data[0][attribute][preferences[attribute].value]

    return `${new Intl.NumberFormat().format(value)} ${preferences[attribute].unit}`
  }

  const getReportData = object => {
    const data = []

    object.forEach((item: object) => {
      data.push({
        ...item,
        prop_miss_distance: getAttributeByPref(item, 'miss_distance'),
      })
    })

    return data
  }

  const renderActions = (_value, rowData) => {
    const { id } = rowData

    return (
      <ButtonGroup ghost>
        <Button
          font={1.25}
          scale={1 / 3}
          onClick={() => {
            router.push(`/object/${id}`)
          }}
        >
          Details
        </Button>
      </ButtonGroup>
    )
  }

  const renderAttribute = (_value, rowData) => {
    return getAttribute(rowData, 'is_potentially_hazardous_asteroid')
  }

  if (!near_earth_objects) {
    return null
  }

  return (
    <>
      {Object.keys(near_earth_objects)
        .sort(function (a, b) {
          return b.localeCompare(a)
        })
        .map((key, index) => {
          const data = getReportData(near_earth_objects[key])
          const subtitle = `${data.length} close approach${data.length > 1 ? 'es' : ''}`

          return (
            <Collapse.Group key={key}>
              <Collapse
                shadow
                initialVisible={index === 0}
                subtitle={subtitle}
                title={index === 0 ? "Today's Report" : `${key}`}
              >
                <ReportGrid>
                  {data && (
                    <Table data={data} emptyText="No objects">
                      <Table.Column
                        label="Potentially Hazardous?"
                        prop="hazardous"
                        render={renderAttribute}
                        width={125}
                      />
                      <Table.Column label="Name" prop="name" />
                      <Table.Column
                        label={`Miss Distance (${preferences['miss_distance'].unit})`}
                        prop={`prop_miss_distance`}
                        width={200}
                      />
                      <Table.Column label="Abs Magnitude" prop="absolute_magnitude_h" />
                      <Table.Column label="" prop="actions" render={renderActions} width={50} />
                    </Table>
                  )}
                </ReportGrid>
              </Collapse>
            </Collapse.Group>
          )
        })}
    </>
  )
}

export default TableReport
