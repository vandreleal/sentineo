import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { appStateDetailed } from "@/recoil/app";
import {
  Button,
  ButtonGroup,
  Collapse,
  Dot,
  Grid,
  Table,
} from "@geist-ui/react";

interface Props {
  data: {
    near_earth_objects: object;
  };
  loading: boolean;
}

const defaultProps = {
  data: null,
};

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export type TableReportProps = Props & typeof defaultProps & NativeAttrs;

const TableReport: React.FC<React.PropsWithChildren<TableReportProps>> = ({
  data,
}) => {
  const { near_earth_objects } = data;
  const preferences = useRecoilValue(appStateDetailed);
  const router = useRouter();

  const getActions = (actions: any, rowData: any) => {
    const { id } = rowData.rowValue;

    return (
      <ButtonGroup size="mini" ghost>
        <Button
          onClick={() => {
            router.push(`/object/${id}`);
          }}
        >
          Details
        </Button>
      </ButtonGroup>
    );
  };

  const getAttribute = (rowData: any, attribute: string) => {
    const value = rowData.rowValue[attribute];

    return (
      <Dot type={value ? "warning" : "secondary"}>{value ? "Yes" : "No"}</Dot>
    );
  };

  const getAttributeByPref = (item: any, attribute: string) => {
    const value =
      item.close_approach_data[0][attribute][preferences[attribute].value];

    return `${new Intl.NumberFormat().format(value)} ${
      preferences[attribute].unit
    }`;
  };

  const getReportData = (object: any) => {
    let data = [];

    object.forEach((item: object) => {
      data.push({
        ...item,
        hazardous: (actions: any, rowData: any) =>
          getAttribute(rowData, "is_potentially_hazardous_asteroid"),
        prop_miss_distance: getAttributeByPref(item, "miss_distance"),
        actions: getActions,
      });
    });

    return data;
  };

  const renderReport = () => {
    return (
      near_earth_objects &&
      Object.keys(near_earth_objects)
        .sort(function (a, b) {
          return b.localeCompare(a);
        })
        .map((key, index) => {
          const data = getReportData(near_earth_objects[key]);
          const subtitle = `${data.length} close approach${
            data.length > 1 ? "es" : ""
          }`;

          return (
            <Collapse.Group key={key}>
              <Collapse
                title={index === 0 ? "Today's Report" : `${key}`}
                subtitle={subtitle}
                initialVisible={index === 0}
                shadow
              >
                <Grid
                  css={`
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
                  `}
                >
                  {data && (
                    <Table data={data} emptyText="No objects">
                      <Table.Column
                        prop="hazardous"
                        label="Potentially Hazardous?"
                        width={125}
                      />
                      <Table.Column prop="name" label="Name" />
                      <Table.Column
                        prop={`prop_miss_distance`}
                        label={`Miss Distance (${preferences["miss_distance"].unit})`}
                        width={200}
                      />
                      <Table.Column
                        prop="absolute_magnitude_h"
                        label="Abs Magnitude"
                      />
                      <Table.Column prop="actions" label="" width={50} />
                    </Table>
                  )}
                </Grid>
              </Collapse>
            </Collapse.Group>
          );
        })
    );
  };

  return <>{renderReport()}</>;
};

export default TableReport;
