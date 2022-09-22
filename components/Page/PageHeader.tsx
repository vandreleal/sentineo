import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { FC, useState } from "react"

import { Grid, Image, Page, Text } from "@geist-ui/core"
import { Book, Moon, Settings, Sun } from "@geist-ui/icons"
import packageData from "package.json"

import { formatDate } from "@/utils/date"

const ButtonRound = dynamic(() => import("@/components/Button/ButtonRound"))
const DrawerSettings = dynamic(
  () => import("@/components/Drawer/DrawerSettings")
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
  const [isDrawerVisible, setIsDrawerVisible] = useState(false)

  return (
    <Page.Header center>
      <Grid.Container alignItems="center" gap={1} justify="space-between">
        <Grid sm>
          <Grid.Container alignItems="center" gap={1}>
            <Grid>
              <Image
                alt="Logo"
                height="56px"
                src="/telescope.svg"
                width="56px"
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
              <Text span type="secondary">
                {formatDate(new Date())}
              </Text>
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
