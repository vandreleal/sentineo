import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { FC, useState } from "react"

import { Grid, Image, Input, Page, Text } from "@geist-ui/core"
import { Book, Moon, Settings, Sun } from "@geist-ui/icons"
import packageData from "package.json"
import { useRecoilState } from "recoil"
import styled from "styled-components"

import { appState } from "@/recoil/app"
import { formatDate } from "@/utils/date"

const StyledDateInput = styled(Input)`
  input {
    margin: 0 !important;
  }

  &.input-container {
    height: auto !important;
  }

  .input-wrapper {
    border: none !important;
  }
`

const ButtonRound = dynamic(() => import("@/components/Button/ButtonRound"))
const DrawerSettings = dynamic(
  () => import("@/components/Drawer/DrawerSettings"),
)

interface PageHeaderProps {
  themeType?: string
  switchTheme?: VoidFunction
}

const PageHeader: FC<PageHeaderProps> = ({
  themeType = "dark",
  switchTheme,
}) => {
  const router = useRouter()
  const [settings, setSettings] = useRecoilState(appState)
  const [isDrawerVisible, setIsDrawerVisible] = useState(false)

  return (
    <Page.Header center>
      <Grid.Container alignItems="center" gap={1} justify="space-between">
        <Grid sm>
          <Grid.Container alignItems="center" gap={1}>
            <Grid>
              <Image
                alt="Logo"
                height="40px"
                src="/telescope.svg"
                width="40px"
              />
            </Grid>
            <Grid>
              <Text
                b
                span
                font={1.25}
                margin={0}
                style={{ display: "block", cursor: "pointer" }}
                onClick={() => {
                  router.push("/")
                }}
              >
                {packageData.displayName}
              </Text>
              <StyledDateInput
                crossOrigin={false}
                htmlType="date"
                value={formatDate(settings.date)}
                onChange={e => {
                  const date = new Date(e.target.value).toLocaleString(
                    "en-US",
                    {
                      timeZone: "UTC",
                    },
                  )
                  setSettings(prevState => ({
                    ...prevState,
                    ...{ date: new Date(date) },
                  }))
                }}
                onKeyDown={e => e.preventDefault()}
              />
            </Grid>
          </Grid.Container>
        </Grid>
        <Grid>
          <Grid.Container alignItems="center" gap={1}>
            <Grid>
              <ButtonRound
                auto
                aria-label="Glossary"
                icon={<Book />}
                onClick={() => {
                  router.push("/glossary")
                }}
              />
            </Grid>
            <Grid>
              <ButtonRound
                auto
                aria-label="Theme"
                icon={themeType === "dark" ? <Moon /> : <Sun />}
                onClick={switchTheme}
              />
            </Grid>
            <Grid>
              <ButtonRound
                auto
                aria-label="Settings"
                icon={<Settings />}
                onClick={() => setIsDrawerVisible(true)}
              />
            </Grid>
          </Grid.Container>
          <DrawerSettings
            isVisible={isDrawerVisible}
            setIsVisible={setIsDrawerVisible}
          />
        </Grid>
      </Grid.Container>
    </Page.Header>
  )
}

export default PageHeader
