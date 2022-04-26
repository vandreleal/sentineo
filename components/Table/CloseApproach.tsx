import { appStateDetailed } from '@/recoil/app'
import { Collapse, Grid, Loading, Table } from '@geist-ui/react'
import { useRecoilValue } from 'recoil'

interface Props {
  data: {
    close_approach_data: object
  }
}

const defaultProps = {
  data: null,
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type TableCloseApproachProps = Props & typeof defaultProps & NativeAttrs

const TableCloseApproach: React.FC<React.PropsWithChildren<TableCloseApproachProps>> = ({ data }): JSX.Element => {
  const { close_approach_data } = data
  const preferences = useRecoilValue(appStateDetailed)

  const getAttributeByPref = (item: any, attribute: string) => {
    const value = item[attribute][preferences[attribute].value]

    return `${new Intl.NumberFormat().format(value)} ${preferences[attribute].unit}`
  }

  const tableData = close_approach_data.map((item: any) => ({
    ...item,
    prop_miss_distance: getAttributeByPref(item, 'miss_distance'),
    prop_relative_velocity: getAttributeByPref(item, 'relative_velocity'),
  }))

  const renderData = () => {
    const title = `${close_approach_data.length} close approach${close_approach_data.length > 1 ? 'es' : ''}`

    return (
      <Collapse.Group>
        <Collapse
          title={title}
          subtitle="Data are not available prior to 1900 A.D. nor after 2200 A.D."
          initialVisible
          shadow
        >
          <Grid
            css={`
              overflow: auto;
              max-height: ${(props: any) => props.children.props.data.length > 20 && '600px'};

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
            `}
          >
            {data && (
              <Table data={tableData} emptyText="No close approaches">
                <Table.Column prop="orbiting_body" label="Orbiting" width={125} />
                <Table.Column prop="close_approach_date_full" label="Date" width={175} />
                <Table.Column
                  prop={`prop_miss_distance`}
                  label={`Miss Distance (${preferences['miss_distance'].unit})`}
                />
                <Table.Column
                  prop={`prop_relative_velocity`}
                  label={`Relative Velocity (${preferences['relative_velocity'].unit})`}
                />
              </Table>
            )}
          </Grid>
        </Collapse>
      </Collapse.Group>
    )
  }

  return <>{renderData()}</>
}

export default TableCloseApproach
