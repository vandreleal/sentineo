import { Dispatch, FC, SetStateAction } from "react"

import { Divider, Drawer, Grid, Radio, Spacer, Text } from "@geist-ui/core"
import { X } from "@geist-ui/icons"
import { useRecoilState } from "recoil"

import ButtonRound from "@/components/Button/Round"
import settingsGroups from "@/data/settings"
import { appState } from "@/recoil/app"

interface DrawerSettingsProps {
  isVisible: boolean
  setIsVisible: Dispatch<SetStateAction<boolean>>
}

const DrawerSettings: FC<DrawerSettingsProps> = ({
  isVisible,
  setIsVisible,
}) => {
  const [settings, setSettings] = useRecoilState(appState)

  const onSelectChange = (val: string, key: string) => {
    setSettings(prevState => ({ ...prevState, [key]: val }))
  }

  const renderOptions = (options: string[]) => {
    return options.map((item: string) => (
      <Radio key={item} value={item}>
        {item.replace(/_/g, " ")}
      </Radio>
    ))
  }

  if (!settings) {
    return null
  }

  return (
    <Drawer visible={isVisible} onClose={() => setIsVisible(false)}>
      <Drawer.Content pt={0}>
        <Grid.Container alignItems="center" justify="space-between">
          <Grid>
            <Text h1 font={1.75} margin={0}>
              Settings
            </Text>
          </Grid>
          <Grid>
            <ButtonRound
              auto
              aria-label="Close Settings"
              icon={<X />}
              onClick={() => {
                setIsVisible(false)
              }}
            />
          </Grid>
        </Grid.Container>
        <Spacer h={1} />
        <Divider />
        <Grid.Container>
          {settingsGroups.map(({ key, name, options }, index: number) => (
            <Grid key={key} direction="column" xs={24}>
              <Text h2 font={1} mb={1} mt={1} type="warning">
                {name}
              </Text>
              <Radio.Group
                key={key}
                value={settings[key]}
                onChange={(val: string) => onSelectChange(val, key)}
              >
                {renderOptions(options)}
              </Radio.Group>
              <Spacer h={1} />
              {index < settingsGroups.length - 1 && <Divider />}
            </Grid>
          ))}
        </Grid.Container>
      </Drawer.Content>
    </Drawer>
  )
}

export default DrawerSettings
