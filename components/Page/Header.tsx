import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { Grid, Image, Page, Text, Tooltip, useModal } from '@geist-ui/react'
import { Book, Moon, Settings, Sun } from '@geist-ui/react-icons'
import { format } from 'date-fns'

const ButtonRound = dynamic(() => import('@/components/Button/Round'))
const ModalSettings = dynamic(() => import('@/components/Modal/Settings'))

interface PageHeaderProps {
  themeType: string
  switchTheme?: VoidFunction
}

const PageHeader = ({ themeType = 'dark', switchTheme }: PageHeaderProps) => {
  const router = useRouter()
  const { setVisible, bindings } = useModal()

  return (
    <Page.Header center>
      <Grid.Container alignItems="center" gap={1} justify="space-between">
        <Grid sm>
          <Grid.Container gap={1}>
            <Grid>
              <Image alt="Logo" height="56px" src="/telescope.svg" width="56px" />
            </Grid>
            <Grid>
              <Text
                h4
                style={{ margin: '4px 0 0', cursor: 'pointer' }}
                onClick={() => {
                  router.push('/')
                }}
              >
                SentiNEO
              </Text>
              <Text span type="secondary">
                {format(new Date(), 'yyyy-MM-dd')}
              </Text>
            </Grid>
          </Grid.Container>
        </Grid>
        <Grid style={{ width: 160 }}>
          <Grid.Container alignItems="center" gap={1}>
            <Grid>
              <Tooltip placement="bottom" text={'Glossary'}>
                <ButtonRound
                  aria-label="Glossary"
                  icon={<Book />}
                  onClick={() => {
                    router.push('/glossary')
                  }}
                />
              </Tooltip>
            </Grid>
            <Grid>
              <Tooltip placement="bottom" text={'Theme'}>
                <ButtonRound
                  aria-label="Theme"
                  icon={themeType === 'dark' ? <Moon /> : <Sun />}
                  onClick={switchTheme}
                />
              </Tooltip>
            </Grid>
            <Grid>
              <Tooltip placement="bottom" text={'Settings'}>
                <ButtonRound aria-label="Settings" icon={<Settings />} onClick={() => setVisible(true)} />
              </Tooltip>
            </Grid>
          </Grid.Container>
          <ModalSettings bindings={bindings} setVisible={setVisible} />
        </Grid>
      </Grid.Container>
    </Page.Header>
  )
}

export default PageHeader
