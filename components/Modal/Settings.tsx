import { useRecoilState } from "recoil";
import { appState } from "@/recoil/app";
import { Grid, Modal, Radio, Text } from "@geist-ui/react";
import styled from "styled-components";

const Label = styled(Text)`
  margin-bottom: 1rem;
  background: lightgray;
  color: black !important;
  font-weight: bold;
  text-align: center;
`;

const options = {
  estimated_diameter: ["kilometers", "meters", "miles", "feet"],
  miss_distance: ["astronomical", "lunar", "kilometers", "miles"],
  relative_velocity: [
    "kilometers_per_second",
    "kilometers_per_hour",
    "miles_per_hour",
  ],
};

function ModalSettings({ setVisible, bindings }) {
  const [preferences, setPreferences] = useRecoilState(appState);

  const onSelectChange = (val: string, key: string) => {
    setPreferences((prevState) => ({ ...prevState, [key]: val }));
  };

  const renderOptions = (options: any) => {
    return options.map((item: any) => (
      <Radio key={item.toString()} value={item}>
        {item.replace(/_/g, " ")}
      </Radio>
    ));
  };

  return (
    preferences && (
      <Modal width="320px" {...bindings}>
        <Modal.Content style={{ paddingTop: 0 }}>
          <Grid.Container
            gap={2}
            alignItems="center"
            alignContent="center"
            justify="center"
          >
            <Grid xs={24}>
              <Label>Estimated Diameter</Label>

              <Radio.Group
                key="estimated_diameter"
                value={preferences.estimated_diameter}
                onChange={(val: string) =>
                  onSelectChange(val, "estimated_diameter")
                }
              >
                {renderOptions(options.estimated_diameter)}
              </Radio.Group>
            </Grid>

            <Grid xs={24}>
              <Label>Miss Distance</Label>

              <Radio.Group
                key="miss_distance"
                value={preferences.miss_distance}
                onChange={(val: string) => onSelectChange(val, "miss_distance")}
              >
                {renderOptions(options.miss_distance)}
              </Radio.Group>
            </Grid>

            <Grid xs={24}>
              <Label>Relative Velocity</Label>

              <Radio.Group
                key="relative_velocity"
                value={preferences.relative_velocity}
                onChange={(val: string) =>
                  onSelectChange(val, "relative_velocity")
                }
              >
                {renderOptions(options.relative_velocity)}
              </Radio.Group>
            </Grid>
          </Grid.Container>
        </Modal.Content>

        <Modal.Action onClick={() => setVisible(false)}>
          <Text size="medium">OK</Text>
        </Modal.Action>
      </Modal>
    )
  );
}
export default ModalSettings;
