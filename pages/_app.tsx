import { AppProps } from "next/app"
import dynamic from "next/dynamic"
import Head from "next/head"
import { FC, useState } from "react"

import { CssBaseline, GeistProvider, Page } from "@geist-ui/core"
import packageData from "package.json"
import { RecoilRoot } from "recoil"
import GlobalStyle from "styles/global"

const PageHeader = dynamic(() => import("@/components/Page/Header"))
const PageFooter = dynamic(() => import("@/components/Page/Footer"))

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [themeType, setThemeType] = useState("dark")

  const switchTheme = () => {
    setThemeType(lastThemeType => (lastThemeType === "dark" ? "light" : "dark"))
  }

  return (
    <RecoilRoot>
      <GeistProvider themeType={themeType}>
        <CssBaseline />
        <GlobalStyle />
        <Head>
          <title>{packageData.displayName}</title>
          <meta
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
            name="viewport"
          />
        </Head>
        <Page
          dotBackdrop
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "1000px",
            paddingTop: "1rem",
          }}
        >
          <PageHeader switchTheme={switchTheme} themeType={themeType} />
          <Page.Content>
            <Component {...pageProps} />
          </Page.Content>
          <PageFooter />
        </Page>
      </GeistProvider>
    </RecoilRoot>
  )
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
})
