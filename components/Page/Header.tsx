import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { Grid, Image, Page, Text, Tooltip, useModal } from '@geist-ui/react'
// Icons
import Book from '@geist-ui/react-icons/book'
import Moon from '@geist-ui/react-icons/moon'
import Settings from '@geist-ui/react-icons/settings'
import Sun from '@geist-ui/react-icons/sun'
import { format } from 'date-fns'

// Custom Components
const ButtonRound = dynamic(() => import('@/components/Button/Round'))
const ModalSettings = dynamic(() => import('@/components/Modal/Settings'))

interface Props {
  themeType: string
  switchTheme: any
}

const defaultProps = {
  themeType: 'dark',
  switchTheme: null,
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type PageHeaderProps = Props & typeof defaultProps & NativeAttrs

const PageHeader: React.FC<React.PropsWithChildren<PageHeaderProps>> = ({ themeType, switchTheme }): JSX.Element => {
  const router = useRouter()
  const { setVisible, bindings } = useModal()

  return (
    <Page.Header center>
      <Grid.Container gap={1} alignItems="center" justify="space-between">
        <Grid sm>
          <Grid.Container gap={1}>
            <Grid>
              <Image src="/telescope.svg" alt="Logo" width="56px" height="56px" />
            </Grid>
            <Grid>
              <Text
                h4
                onClick={() => {
                  router.push('/')
                }}
                style={{ margin: '4px 0 0', cursor: 'pointer' }}
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
          <Grid.Container gap={1} alignItems="center">
            <Grid>
              <Tooltip text={'Glossary'} placement="bottom">
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
              <Tooltip text={'Theme'} placement="bottom">
                <ButtonRound
                  aria-label="Theme"
                  icon={themeType === 'dark' ? <Moon /> : <Sun />}
                  onClick={switchTheme}
                />
              </Tooltip>
            </Grid>
            <Grid>
              <Tooltip text={'Settings'} placement="bottom">
                <ButtonRound aria-label="Settings" icon={<Settings />} onClick={() => setVisible(true)} />
              </Tooltip>
            </Grid>
          </Grid.Container>

          <ModalSettings setVisible={setVisible} bindings={bindings} />
        </Grid>
      </Grid.Container>
    </Page.Header>
  )
}

export default PageHeader
