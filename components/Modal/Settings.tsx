import { Dispatch, SetStateAction } from 'react'

import { Grid, Modal, Radio, Text } from '@geist-ui/react'
import { ModalHooksBindings } from '@geist-ui/react/esm/use-modal'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'

import { appState } from '@/recoil/app'

const Label = styled(Text)`
  margin-bottom: 1rem;
  background: lightgray;
  color: black !important;
  font-weight: bold;
  text-align: center;
`

const options = {
  estimated_diameter: ['kilometers', 'meters', 'miles', 'feet'],
  miss_distance: ['astronomical', 'lunar', 'kilometers', 'miles'],
  relative_velocity: ['kilometers_per_second', 'kilometers_per_hour', 'miles_per_hour'],
}

interface ModalSettingsProps {
  setVisible: Dispatch<SetStateAction<boolean>>
  bindings: ModalHooksBindings
}

const ModalSettings = ({ setVisible, bindings }: ModalSettingsProps) => {
  const [preferences, setPreferences] = useRecoilState(appState)

  const onSelectChange = (val: string, key: string) => {
    setPreferences(prevState => ({ ...prevState, [key]: val }))
  }

  const renderOptions = options => {
    return options.map((item: string) => (
      <Radio key={item.toString()} value={item}>
        {item.replace(/_/g, ' ')}
      </Radio>
    ))
  }

  return (
    preferences && (
      <Modal width="320px" {...bindings}>
        <Modal.Content style={{ paddingTop: 0 }}>
          <Grid.Container alignContent="center" alignItems="center" gap={2} justify="center">
            <Grid direction="column" xs={24}>
              <Label>Estimated Diameter</Label>
              <Radio.Group
                key="estimated_diameter"
                value={preferences.estimated_diameter}
                onChange={(val: string) => onSelectChange(val, 'estimated_diameter')}
              >
                {renderOptions(options.estimated_diameter)}
              </Radio.Group>
            </Grid>
            <Grid direction="column" xs={24}>
              <Label>Miss Distance</Label>
              <Radio.Group
                key="miss_distance"
                value={preferences.miss_distance}
                onChange={(val: string) => onSelectChange(val, 'miss_distance')}
              >
                {renderOptions(options.miss_distance)}
              </Radio.Group>
            </Grid>
            <Grid direction="column" xs={24}>
              <Label>Relative Velocity</Label>
              <Radio.Group
                key="relative_velocity"
                value={preferences.relative_velocity}
                onChange={(val: string) => onSelectChange(val, 'relative_velocity')}
              >
                {renderOptions(options.relative_velocity)}
              </Radio.Group>
            </Grid>
          </Grid.Container>
        </Modal.Content>
        <Modal.Action onClick={() => setVisible(false)}>
          <Text>OK</Text>
        </Modal.Action>
      </Modal>
    )
  )
}

export default ModalSettings
